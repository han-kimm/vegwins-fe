import { getCookie } from '@/utils/cookie';

type Fetch = typeof fetch;

interface HandlerParams extends RequestInit {
  path: string;
  body?: any;
  revalidate?: number;
  queryKey?: string[];
}

type ApiHandler = (params: HandlerParams) => Promise<any>;

export class Fetching {
  #baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? '';
  noNeedTokenPath = ['/paper', '/paper'];

  makeHeader = async (body?: any) => {
    const isFormData = body instanceof FormData;
    const isSSR = typeof window === 'undefined';
    let accessToken = '';
    if (isSSR) {
      accessToken = await getCookie('v_at');
      return { headers: { Cookie: 'v_at=' + accessToken } };
    }
    if (isFormData) {
      return { body };
    }
    return { headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) };
  };

  fetchJSON = async (...params: Parameters<Fetch>) => {
    try {
      params[0];

      const wrappedFetch = async () =>
        fetch(this.#baseUrl + params[0], { ...params[1], ...((await this.makeHeader(params[1]?.body)) as any) }).then((resp) => resp.json());
      const res = await wrappedFetch();
      if (res.code === 419) {
        await this.fetchJSON('/auth/refresh');
        const refetchRes = await wrappedFetch();
        return refetchRes;
      }
      return res;
    } catch (e) {
      console.error(e);
    }
  };

  get: ApiHandler = async ({ path, queryKey, revalidate, ...init }) => {
    try {
      return await this.fetchJSON(path, { ...init, next: { revalidate, tags: queryKey } });
    } catch (e) {
      console.error(e);
    }
  };

  post: ApiHandler = async ({ path, body, ...init }) => {
    try {
      return await this.fetchJSON(path, {
        ...init,
        method: 'POST',
        body,
      });
    } catch (e) {
      console.error(e);
    }
  };

  put: ApiHandler = async ({ path, body, ...init }) => {
    return await this.fetchJSON(path, {
      ...init,
      method: 'PUT',
      body,
    });
  };

  delete: ApiHandler = async ({ path, body }) => {
    try {
      return await this.fetchJSON(path, {
        method: 'DELETE',
        body,
      });
    } catch (e) {
      console.error(e);
    }
  };
}

const ajax = new Fetching();

export default ajax;
