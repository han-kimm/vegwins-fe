import { setCookie } from '@/utils/cookie';
import ajax from '@/utils/fetching';
import { setLocalStorage } from '@/utils/localStorage';
import toast from 'react-hot-toast';

declare global {
  interface Window {
    google: any;
  }
}

const googleAuthPath = '/api/auth/google';

const authCallback = async (response: any) => {
  try {
    const res: { refreshToken: string; nickname: string } = await ajax.post({ path: googleAuthPath, body: response });
    setLocalStorage({ key: 'v_rt', value: res.refreshToken, maxAge: 60 * 60 * 24 });
    setCookie({ key: 'v_s', value: { isAuth: true, nickname: res.nickname }, maxAge: 60 * 60 * 24 });
    toast.success(`${res.nickname}님 안녕하세요!`);
  } catch (e) {
    console.error(e);
    toast.error('다시 시도해 주세요.');
  }
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

const popup = () => {
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

const oneTabOrPopup = async () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  if (userAgent.includes('samsung')) {
    popup();
    return;
  }
  oneTap();
};

export const googleAuth = () => {
  const current = document.querySelector('#googleAuth');
  if (current) {
    oneTabOrPopup();
    return;
  }
  const script = document.createElement('script');
  script.id = 'googleAuth';
  script.src = 'https://accounts.google.com/gsi/client';
  script.async = true;
  script.onload = oneTabOrPopup;

  document.head.append(script);
};
