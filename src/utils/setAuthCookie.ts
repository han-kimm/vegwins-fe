'use server';

import { cookies } from 'next/headers';

export const setAuthCookie = () => {
  const cookieStore = cookies();
  cookieStore.set('session', JSON.stringify({ isLogin: true }));
};
