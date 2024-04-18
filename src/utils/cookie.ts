'use server';

import { ResponseCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { cookies } from 'next/headers';

interface Args extends ResponseCookie {
  value: any;
}

export const setCookie = ({ ...args }: Args) => {
  const { httpOnly, secure, sameSite } = args;
  const cookieStore = cookies();
  cookieStore.set(args.name, JSON.stringify(args.value), { maxAge: args.maxAge ?? 60 * 60, httpOnly, secure, sameSite });
};

export const getCookie = (key: string) => {
  const cookieStore = cookies();
  return JSON.parse(cookieStore.get(key)?.value ?? 'null');
};
