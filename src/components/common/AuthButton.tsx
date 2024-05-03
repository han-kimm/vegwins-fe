'use client';

import { googleAuth } from '@/lib/googleAuth';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useState } from 'react';

const AuthModal = dynamic(() => import('./AuthModal'), { ssr: false });

const AuthButton = () => {
  const [open, setOpen] = useState(false);
  const [pending, setPending] = useState(true);

  const handleClick = () => {
    googleAuth(() => setPending(false));
    setOpen(true);
  };
  return (
    <>
      <button type="button" onClick={handleClick} className="flex-center gap-8 text-16 font-medium" aria-label="구글 계정으로 로그인">
        <Image src="/icon/join.svg" alt="로그인 이미지" width={24} height={24} aria-hidden />
        <span>로그인</span>
      </button>
      {open && <AuthModal closeModal={() => setOpen(false)} pending={pending} />}
    </>
  );
};

export default AuthButton;
