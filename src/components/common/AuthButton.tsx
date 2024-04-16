'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useState } from 'react';

declare global {
  interface Window {
    google: any;
  }
}

// const AuthModal = dynamic(() => import('@/components/common/AuthModal'), { ssr: false });

const AuthButton = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const googleAuth = () => {
    const { google } = window;
    if ('Identity') {
      google.accounts.id.initialize({
        client_id: process.env.NEXT_PUBLIC_ID_GOOGLE,
        callback: async (response: any) => {
          // Here we call our Provider with the token provided by google
          alert('구글 로그인 성공');
        },
        itp_support: true,
      });
      google.accounts.id.prompt((re: any) => {
        alert(JSON.stringify(re));
      });
    }
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
      {/* {modalOpen && <AuthModal closeModal={() => setModalOpen(false)} />} */}
    </>
  );
};

export default AuthButton;
