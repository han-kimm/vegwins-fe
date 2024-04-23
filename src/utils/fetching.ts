type Fetch = typeof fetch;

interface HandlerParams extends RequestInit {
  path: string;
  body?: any;
  revalidate?: number;
  queryKey?: string[];
}

type ApiHandler = (params: HandlerParams) => Promise<any>;

export class Fetching {
  constructor() {
    this.checkAuth();
  }

  #accessToken = '';
  set accessToken(token: string) {
    this.#accessToken = token;
  }
  #baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? '';
  #isAuth = false;

  getSession = async () => {
    return await this.fetchJSON('/session');
  };

  checkAuth = async () => {
    const res = await this.fetchJSON('/authCheck');
    if (res) {
      this.#isAuth = res.isAuth;
      return res.isAuth;
    }
    return false;
  };

  restoreToken = async () => {
    if (!this.#accessToken && this.#isAuth) {
      await this.updateToken();
    }
  };

  updateToken = async () => {
    const { accessToken } = await this.fetchJSON('/refresh');
    this.#accessToken = accessToken;
  };

  fetchJSON = async (...params: Parameters<Fetch>) => {
    return await fetch(this.#baseUrl + params[0], {
      ...params[1],
      ...{
        headers: {
          'content-type': 'application/json',
          authorization: 'bearer' + ' ' + `${this.#accessToken}`,
        },
      },
    })
      .then((resp) => resp.json())
      .catch((err) => console.error(err));
  };

  get: ApiHandler = async ({ path, queryKey, revalidate, ...init }) => {
    try {
      await this.restoreToken();

      const resp = await this.fetchJSON(path, { ...init, next: { revalidate, tags: queryKey } });
      if (resp.code === 419) {
        await this.updateToken();
        return await this.fetchJSON(path, { ...init, next: { revalidate, tags: queryKey } });
      }
      return resp;
    } catch (e) {
      console.error(e);
    }
  };

  post: ApiHandler = async ({ path, body, ...init }) => {
    try {
      await this.restoreToken();

      const resp = await this.fetchJSON(path, {
        ...init,
        method: 'POST',
        body: JSON.stringify(body),
      });
      if (resp.code === 419) {
        await this.updateToken();
        console.log(this.#accessToken);
        return await this.fetchJSON(path, {
          ...init,
          method: 'POST',
          body: JSON.stringify(body),
        });
      }
      return resp;
    } catch (e) {
      console.error(e);
    }
  };

  delete: ApiHandler = async ({ path, body }) => {
    try {
      const resp = await this.fetchJSON(path, {
        method: 'DELETE',
        body: JSON.stringify(body),
      });

      return resp;
    } catch (e) {
      console.error(e);
    }
  };
}
const ajax = new Fetching();

export default ajax;
