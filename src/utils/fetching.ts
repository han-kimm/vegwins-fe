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
    const isSSR = typeof window === 'undefined';
    if (isSSR) {
      return;
    }
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
    const wrappedFetch = () =>
      fetch(this.#baseUrl + params[0], {
        ...{
          headers: {
            'content-type': 'application/json',
            authorization: 'bearer' + ' ' + `${this.#accessToken}`,
          },
        },
        ...params[1],
      }).then((resp) => resp.json());
    const res = await wrappedFetch();
    if (res.code === 419) {
      await this.updateToken();
      const refetchRes = await wrappedFetch();
      return refetchRes;
    }
    if (res.error) {
      throw Error(res.error);
    }
    return res;
  };

  get: ApiHandler = async ({ path, queryKey, revalidate, ...init }) => {
    try {
      await this.restoreToken();

      return await this.fetchJSON(path, { ...init, next: { revalidate, tags: queryKey } });
    } catch (e) {
      console.error(e);
    }
  };

  post: ApiHandler = async ({ path, body, ...init }) => {
    try {
      await this.restoreToken();

      return await this.fetchJSON(path, {
        ...init,
        method: 'POST',
        body: JSON.stringify(body),
      });
    } catch (e) {
      console.error(e);
    }
  };

  delete: ApiHandler = async ({ path, body }) => {
    try {
      await this.restoreToken();

      return await this.fetchJSON(path, {
        method: 'DELETE',
        body: JSON.stringify(body),
      });
    } catch (e) {
      console.error(e);
    }
  };
}
const ajax = new Fetching();

export default ajax;
