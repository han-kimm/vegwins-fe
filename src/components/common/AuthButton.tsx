'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useState } from 'react';

declare global {
  interface Window {
    google: any;
  }
}

const AuthModal = dynamic(() => import('@/components/common/AuthModal'), { ssr: false });

const AuthButton = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const googleAuth = () => {
    const { google } = window;
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (!userAgent.includes('samsung')) {
      console.log(65);
      const client = google.accounts.oauth2.initCodeClient({
        client_id: '818484339128-sors7er5dtp2kko9g3765q2gjh21ahvs.apps.googleusercontent.com',
        scope: 'profile',
        ux_mode: 'popup',
        callback: (response: any) => {
          console.log(response);
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
  const googleOneTap = () => {
    const current = document.querySelector('#googleAuth');
    if (current) {
      googleAuth();
      return;
    }
    const script = document.createElement('script');
    script.id = 'googleAuth';
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.onload = googleAuth;

    document.head.append(script);
  };

  return (
    <>
      <button onClick={googleOneTap} className="flex-center gap-8 text-16 font-medium">
        <Image src="/icon/join.svg" alt="로그인 이미지" width={24} height={24} />
        <span>로그인</span>
      </button>
      {modalOpen && <AuthModal closeModal={() => setModalOpen(false)} />}
    </>
  );
};

export default AuthButton;
