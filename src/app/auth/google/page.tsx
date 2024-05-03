'use client';

import { setCookie, setTokenCookie } from '@/utils/cookie';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import FadingDot from '@/components/common/FadingDot';
import IconGoogle from 'public/icon/google.svg';
import IconLogo from 'public/icon/logo.svg';

interface Props {
  searchParams: {
    code: string;
  };
}

const GoogleAuthPage = ({ searchParams }: Props) => {
  const router = useRouter();
  useEffect(() => {
    (async () => {
      try {
        const { code } = searchParams;
        console.log(searchParams);
        const { accessToken, refreshToken, nickname } = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/auth/google', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ code }),
        }).then((resp) => resp.json());
        if (nickname) {
          toast.success(`${nickname}님 안녕하세요!`);
          await setTokenCookie(accessToken, refreshToken);
          await setCookie({ name: 'v_s', value: { nickname }, path: '/' });
        }
      } catch (e) {
        console.error(e);
        toast.error('다시 시도해 주십시오.');
      } finally {
        router.push('/');
      }
    })();
  });

  return (
    <div className="flex-center h-dvh w-full">
      <div className="flex-center gap-16">
        <IconGoogle />
        <FadingDot />
        <IconLogo />
      </div>
    </div>
  );
};
export default GoogleAuthPage;