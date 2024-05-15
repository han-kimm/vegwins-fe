import { getCookie, setTokenCookie } from '@/utils/cookie';

type Fetch = typeof fetch;

interface HandlerParams extends RequestInit {
  path: string;
  body?: any;
  revalidate?: number;
  queryKey?: string[];
}

type ApiHandler = (params: HandlerParams) => Promise<any>;

const _baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? '';

const makeHeader = (body: any) => {
  const isFormData = body instanceof FormData;
  if (isFormData) {
    return { body };
  }
  return { headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) };
};

const fetchJSON = async (...params: Parameters<Fetch>) => {
  try {
    const wrappedFetch = async () =>
      fetch(_baseUrl + params[0], { ...params[1], ...(params[1]?.body ? makeHeader(params[1].body) : {}) }).then((resp) => resp.json());
    const res = await wrappedFetch();
    if (res.code === 419) {
      const { accessToken, refreshToken } = await fetchJSON('/auth/refresh');
      await setTokenCookie(accessToken, refreshToken);
      const refetchRes = await wrappedFetch();
      return refetchRes;
    }
    return res;
  } catch (e) {
    console.error(e);
  }
};

export const getData: ApiHandler = async ({ path, queryKey, revalidate, ...init }) => {
  try {
    return await fetchJSON(path, { ...init, next: { revalidate, tags: queryKey } });
  } catch (e) {
    console.error(e);
  }
};

export const getSSR: ApiHandler = async ({ path, queryKey, revalidate, ...init }) => {
  try {
    const accessToken = await getCookie('v_at');
    const wrappedFetch = async (accessToken: string) =>
      fetch(_baseUrl + path, { ...init, headers: { Cookie: 'v_at=' + accessToken }, next: { revalidate, tags: queryKey } }).then((resp) =>
        resp.json(),
      );

    const res = await wrappedFetch(accessToken);
    if (res.code === 419) {
      const refreshToken = await getCookie('v_rt');
      const { accessToken: newAt, refreshToken: newRt } = await fetch(_baseUrl + '/auth/refresh', {
        headers: { Cookie: 'v_rt=' + refreshToken },
      }).then((resp) => resp.json());
      await setTokenCookie(newAt, newRt);
      const refetchRes = await wrappedFetch(newAt);
      return refetchRes;
    }
  } catch (e) {
    console.error(e);
  }
};

export const postData: ApiHandler = async ({ path, body, ...init }) => {
  try {
    return await fetchJSON(path, {
      ...init,
      method: 'POST',
      body,
    });
  } catch (e) {
    console.error(e);
  }
};

export const putData: ApiHandler = async ({ path, body, ...init }) => {
  return await fetchJSON(path, {
    ...init,
    method: 'PUT',
    body,
  });
};

export const deleteData: ApiHandler = async ({ path, body }) => {
  try {
    return await fetchJSON(path, {
      method: 'DELETE',
      body,
    });
  } catch (e) {
    console.error(e);
  }
};
