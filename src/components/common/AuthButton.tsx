'use client';

import { googleAuth } from '@/utils/googleAuth';
import Image from 'next/image';

const AuthButton = () => {
  return (
    <button onClick={googleAuth} className="flex-center gap-8 text-16 font-medium">
      <Image src="/icon/join.svg" alt="로그인 이미지" width={24} height={24} />
      <span>로그인</span>
    </button>
  );
};

export default AuthButton;
