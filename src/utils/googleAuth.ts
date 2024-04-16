declare global {
  interface Window {
    google: any;
  }
}

const tabOrPopup = () => {
  const { google } = window;
  const userAgent = window.navigator.userAgent.toLowerCase();
  if (userAgent.includes('samsung')) {
    const client = google.accounts.oauth2.initCodeClient({
      client_id: '818484339128-sors7er5dtp2kko9g3765q2gjh21ahvs.apps.googleusercontent.com',
      scope: 'profile',
      ux_mode: 'popup',
      callback: (response: any) => {
        alert('구글 로그인 성공');
      },
      state: 'vegwins',
    });
    client.requestCode();
    return;
  }
  google.accounts.id.initialize({
    client_id: process.env.NEXT_PUBLIC_ID_GOOGLE,
    callback: async (response: any) => {
      alert('구글 로그인 성공');
    },
    itp_support: true,
    use_fedcm_for_prompt: true,
  });
  google.accounts.id.prompt();
};

export const googleAuth = () => {
  const current = document.querySelector('#googleAuth');
  if (current) {
    tabOrPopup();
    return;
  }
  const script = document.createElement('script');
  script.id = 'googleAuth';
  script.src = 'https://accounts.google.com/gsi/client';
  script.async = true;
  script.onload = googleAuth;

  document.head.append(script);
};
