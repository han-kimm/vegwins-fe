'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ModalFrame from '@/components/common/ModalFrame';
import IconGoogle from 'public/icon/google.svg';

const AuthButton = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <button onClick={() => setModalOpen(true)} className="flex-center gap-8 text-16 font-medium">
        <Image src="/icon/join.svg" alt="로그인 이미지" width={24} height={24} />
        <span>로그인</span>
      </button>
      {modalOpen && (
        <ModalFrame closeModal={() => setModalOpen(false)}>
          <h2 className="text-18 font-bold">로그인</h2>
          <Link
            href={makeGoogleURL()}
            className="flex-center transform-active my-auto h-40 gap-12 rounded-full border border-black-20 bg-black-0 text-14 font-medium"
          >
            <IconGoogle />
            구글 계정으로 로그인
          </Link>
        </ModalFrame>
      )}
    </>
  );
};

export default AuthButton;

const makeGoogleURL = () => {
  const endPoint = 'https://accounts.google.com/o/oauth2/v2/auth';
  const config = {
    client_id: process.env.NEXT_PUBLIC_ID_GOOGLE!,
    redirect_uri: 'http://localhost:3000/auth/google',
    response_type: 'token',
    scope: 'https://www.googleapis.com/auth/userinfo.profile',
    include_granted_scopes: 'true',
    state: 'pass-through value',
  };
  const configKey = Object.keys(config) as (keyof typeof config)[];

  const params = new URLSearchParams();
  for (const key of configKey) {
    params.set(key, config[key]);
  }
  const newParams = params.toString();
  return endPoint + '?' + newParams;
};
