import { setCookie } from '@/utils/cookie';
import ajax from '@/utils/fetching';
import toast from 'react-hot-toast';

declare global {
  interface Window {
    google: any;
  }
}

const googleAuthPath = '/auth/google';

const authCallback = async (response: any) => {
  try {
    const { accessToken, refreshToken, nickname } = await ajax.post({ path: googleAuthPath, body: response });
    if (nickname) {
      toast.success(`${nickname}님 안녕하세요!`);
      await setCookie({ name: 'v_at', value: accessToken, path: '/', secure: true, httpOnly: true, sameSite: 'strict' });
      await setCookie({ name: 'v_rt', value: refreshToken, path: '/api/auth/refresh', secure: true, httpOnly: true, sameSite: 'strict' });
      await setCookie({ name: 'v_s', value: { nickname }, path: '/' });
    }
  } catch (e) {
    console.error(e);
    toast.error('다시 시도해 주세요.');
  }
};

export const popup = () => {
  const { google } = window;
  if (!google) {
    return;
  }
  const client = google.accounts.oauth2.initCodeClient({
    client_id: process.env.NEXT_PUBLIC_ID_GOOGLE,
    scope: 'profile',
    ux_mode: 'popup',
    callback: authCallback,
    state: 'vegwins',
  });
  client.requestCode();
};

const oneTap = () => {
  const { google } = window;
  if (!google) {
    return;
  }
  google.accounts.id.initialize({
    client_id: process.env.NEXT_PUBLIC_ID_GOOGLE,
    callback: authCallback,
    itp_support: true,
    use_fedcm_for_prompt: true,
  });
  google.accounts.id.prompt();
};

export const googleAuth = () => {
  const current = document.querySelector('#googleAuth');
  if (current) {
    oneTap();
    return;
  }
  const script = document.createElement('script');
  script.id = 'googleAuth';
  script.src = 'https://accounts.google.com/gsi/client';
  script.async = true;
  script.onload = oneTap;

  document.head.append(script);
};
