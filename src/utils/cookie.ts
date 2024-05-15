'use server';

import { ResponseCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { cookies } from 'next/headers';

interface Args extends ResponseCookie {
  value: any;
}

export const setCookie = async ({ ...args }: Args) => {
  const { path, value, maxAge, httpOnly, secure, sameSite } = args;
  const cookieStore = cookies();
  cookieStore.set(args.name, typeof value === 'string' ? value : JSON.stringify(value), {
    maxAge: maxAge ?? 60 * 60 * 24,
    httpOnly,
    secure,
    sameSite,
    path,
  });
};

export const getCookie = async (key: string) => {
  const cookieStore = cookies();
  const value = cookieStore.get(key)?.value;
  if (!value) {
    return null;
  }
  return value[0] === '{' ? JSON.parse(value) : value;
};

export const deleteCookie = async (key: string) => {
  cookies().delete(key);
};

export const setTokenCookie = async (accessToken: string, refreshToken: string) => {
  await setCookie({ name: 'v_at', value: accessToken, path: '/', secure: true, httpOnly: true, sameSite: 'strict' });
  await setCookie({ name: 'v_rt', value: refreshToken, path: '/', secure: true, httpOnly: true, sameSite: 'strict' });
};

export const logoutCookie = async () => {
  await deleteCookie('v_at');
  await deleteCookie('v_rt');
  await deleteCookie('v_s');
};
