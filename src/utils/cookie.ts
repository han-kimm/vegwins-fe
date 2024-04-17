'use server';

import { cookies } from 'next/headers';

interface Args {
  key: string;
  value: any;
  maxAge?: number;
}

export const setCookie = ({ key, value, maxAge }: Args) => {
  const cookieStore = cookies();
  cookieStore.set(key, JSON.stringify(value), { maxAge: maxAge ?? 1000 * 60 * 10 });
};

export const getCookie = (key: string) => {
  const cookieStore = cookies();
  return JSON.parse(cookieStore.get(key)?.value ?? 'null');
};
