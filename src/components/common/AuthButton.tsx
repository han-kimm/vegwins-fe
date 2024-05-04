'use client';

import { PREVIOUS_PATH } from '@/constants/default';
import { googleAuth } from '@/lib/googleAuth';
import { setLocalStorage } from '@/utils/browserStorage';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const AuthModal = dynamic(() => import('./AuthModal'), { ssr: false });

const AuthButton = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const handleClick = () => {
    googleAuth();
    setOpen(true);
    setLocalStorage({ key: PREVIOUS_PATH, value: pathname });
  };
  return (
    <>
      <button type="button" onClick={handleClick} className="flex-center gap-8 text-16 font-medium" aria-label="구글 계정으로 로그인">
        <Image src="/icon/join.svg" alt="로그인 이미지" width={24} height={24} aria-hidden />
        <span>로그인</span>
      </button>
      {open && <AuthModal closeModal={() => setOpen(false)} />}
    </>
  );
};

export default AuthButton;
