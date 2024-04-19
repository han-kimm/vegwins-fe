import { getCookie, setCookie } from '@/utils/cookie';
import { getLocalStorage } from '@/utils/localStorage';

type Fetch = typeof fetch;

interface HandlerParams extends RequestInit {
  path: string;
  body?: any;
  revalidate?: number;
  queryKey?: string[];
}

type ApiHandler = (params: HandlerParams) => Promise<any>;

class Fetching {
  #baseUrl = 'http://localhost:3000/api';
  fetchJSON = async (...params: Parameters<Fetch>) => {
    let accessToken;
    const isSSR = typeof window === 'undefined';
    if (isSSR) {
      accessToken = await getCookie('v_at');
    }
    return await fetch(this.#baseUrl + params[0], {
      ...params[1],
      ...(isSSR ? { headers: { Cookie: `v_at=${accessToken}` } } : {}),
    })
      .then((resp) => resp.json())
      .catch((err) => console.error(err));
  };
  updateToken = async () => {
    const refreshToken = getLocalStorage('v_rt');
    if (!refreshToken) {
      throw Error('리프레시 토큰이 없습니다.');
    }
    const { accessToken } = await this.post({ path: '/auth/refresh', body: { refreshToken } });
    setCookie({ name: 'v_at', value: accessToken, httpOnly: true, secure: true, sameSite: 'strict' });
  };

  get: ApiHandler = async ({ path, queryKey, revalidate, ...init }) => {
    const resp = await this.fetchJSON(path, { ...init, next: { revalidate, tags: queryKey } });
    return resp;
  };

  post: ApiHandler = async ({ path, body, ...init }) => {
    const resp = await this.fetchJSON(path, {
      ...init,
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    if (resp.code === 419) {
      await this.updateToken();
      return await this.post({ path, body, ...init });
    }
    return resp;
  };
}
const ajax = new Fetching();

export default ajax;
