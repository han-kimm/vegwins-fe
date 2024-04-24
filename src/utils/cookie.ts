'use server';

import { ResponseCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { cookies } from 'next/headers';

interface Args extends ResponseCookie {
  value: any;
}

export const setCookie = ({ ...args }: Args) => {
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

export const getCookie = (key: string) => {
  const cookieStore = cookies();
  const value = cookieStore.get(key)?.value;
  if (!value) {
    return null;
  }
  return value[0] === '{' ? JSON.parse(value) : value;
};

export const deleteCookie = (key: string) => {
  cookies().delete(key);
};
