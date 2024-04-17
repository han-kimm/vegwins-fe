'use client';

import { googleAuth } from '@/utils/googleAuth';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useState } from 'react';

const AuthModal = dynamic(() => import('./AuthModal'), { ssr: false });

const AuthButton = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    googleAuth();
    setOpen(true);
  };
  return (
    <>
      <button onClick={handleClick} className="flex-center gap-8 text-16 font-medium">
        <Image src="/icon/join.svg" alt="로그인 이미지" width={24} height={24} />
        <span>로그인</span>
      </button>
      {open && <AuthModal closeModal={() => setOpen(false)} />}
    </>
  );
};

export default AuthButton;
