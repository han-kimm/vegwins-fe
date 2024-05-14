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

const fetchJSON = async (...params: Parameters<Fetch>) => {
  try {
    const wrappedFetch = async () =>
      fetch(_baseUrl + params[0], { ...params[1], ...((await makeHeader(params[1]?.body)) as any) }).then((resp) => resp.json());
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
