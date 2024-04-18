import { setCookie } from '@/utils/cookie';
import { getLocalStorage } from '@/utils/localStorage';

type Fetch = typeof fetch;

interface HandlerParams extends RequestInit {
  path: string;
  body?: any;
  queryKey?: string[];
}

type ApiHandler = (params: HandlerParams) => Promise<any>;

class Fetching {
  fetchJSON = async (...params: Parameters<Fetch>) => {
    return await fetch(...params)
      .then((resp) => resp.json())
      .catch((err) => console.error(err));
  };
  updateToken = async () => {
    const refreshToken = getLocalStorage('v_rt');
    if (!refreshToken) {
      throw Error('리프레시 토큰이 없습니다.');
    }
    const { accessToken } = await this.post({ path: '/api/auth/refresh', body: { refreshToken } });
    setCookie({ name: 'v_at', value: accessToken, httpOnly: true, secure: true, sameSite: 'strict' });
  };

  get: ApiHandler = async ({ path, queryKey, ...init }) => {
    const resp = await this.fetchJSON(path, { ...init, next: { tags: queryKey } });
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
