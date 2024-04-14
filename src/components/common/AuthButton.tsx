'use client';

import Image from 'next/image';
import { useState } from 'react';
import AuthModal from '@/components/common/AuthModal';

const AuthButton = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <button onClick={() => setModalOpen(true)} className="flex-center gap-8 text-16 font-medium">
        <Image src="/icon/join.svg" alt="로그인 이미지" width={24} height={24} />
        <span>로그인</span>
      </button>
      {modalOpen && <AuthModal closeModal={() => setModalOpen(false)} />}
    </>
  );
};

export default AuthButton;
