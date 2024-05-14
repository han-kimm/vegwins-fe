'use client';

import { deleteCookie, setCookie } from '@/utils/cookie';
import { useRouter } from 'next/navigation';
import IconLogout from 'public/icon/logout.svg';

const Logout = () => {
  const router = useRouter();
  const logout = async () => {
    await setCookie({ name: 'v_at', value: '', maxAge: 1, path: '/' });
    await setCookie({ name: 'v_rt', value: '', maxAge: 1, path: '/api/refresh' });
    await deleteCookie('v_s');
    router.push('/');
  };

  return (
    <button onClick={logout} className="flex-center start- col-start-2 gap-8">
      <IconLogout />
      로그아웃
    </button>
  );
};
export default Logout;
