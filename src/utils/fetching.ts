'use server';

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

const makeHeader = async (body?: any) => {
  const accessToken = await getCookie('v_at');
  if (!body) {
    return { headers: { Cookie: 'v_at=' + accessToken } };
  }

  const isFormData = body instanceof FormData;
  if (isFormData) {
    return { headers: { Cookie: 'v_at=' + accessToken }, body };
  }
  return { headers: { 'Content-Type': 'application/json', Cookie: 'v_at=' + accessToken }, body: JSON.stringify(body) };
};

const fetchJSON = async (...params: Parameters<Fetch>) => {
  try {
    const wrappedFetch = async () =>
      fetch(_baseUrl + params[0], { ...params[1], ...((await makeHeader(params[1]?.body)) as any) }).then((resp) => resp.json());
    const res = await wrappedFetch();
    if (res.code === 419) {
      const prevToken = await getCookie('v_rt');
      const { accessToken, refreshToken } = await fetch(_baseUrl + '/auth/refresh', { headers: { Cookie: 'v_rt=' + prevToken } }).then((resp) =>
        resp.json(),
      );
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
