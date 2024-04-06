'use server';

import { cookies } from 'next/headers';

interface Args {
  key: string;
  value: {};
}

export const setCookie = ({ key, value }: Args) => {
  const cookieStore = cookies();
  cookieStore.set(key, JSON.stringify(value));
};

export const getCookie = (key: string) => {
  const cookieStore = cookies();
  return JSON.parse(cookieStore.get(key)?.value ?? 'null');
};
