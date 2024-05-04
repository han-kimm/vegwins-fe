'use client';

import { PREVIOUS_PATH } from '@/constants/default';
import { getLocalStorage } from '@/utils/browserStorage';
import { setCookie, setTokenCookie } from '@/utils/cookie';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect } from 'react';
import toast from 'react-hot-toast';
import FadingDot from '@/components/common/FadingDot';
import IconGoogle from 'public/icon/google.svg';
import IconLogo from 'public/icon/logo.svg';

const GoogleAuthPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  useEffect(() => {
    (async () => {
      try {
        const code = searchParams.get('code');
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
        const previousPath = getLocalStorage(PREVIOUS_PATH);
        router.push(previousPath || '/');
        localStorage.clear();
      }
    })();
  }, []);

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

const SuspendedPage = () => {
  return (
    <Suspense>
      <GoogleAuthPage />
    </Suspense>
  );
};

export default SuspendedPage;
