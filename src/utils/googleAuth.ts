import toast from 'react-hot-toast';

declare global {
  interface Window {
    google: any;
  }
}

const googleAuthPath = 'http://localhost:8000/auth/google';

const authCallback = async (response: any) => {
  try {
    const res = await fetch(googleAuthPath, {
      method: 'POST',
      body: JSON.stringify(response),
    });
    console.log(res);
    toast.success('구글 계정으로 로그인 완료!');
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
