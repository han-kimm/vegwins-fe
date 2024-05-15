'use client';

import { logoutCookie } from '@/utils/cookie';
import { useRouter } from 'next/navigation';
import IconLogout from 'public/icon/logout.svg';

const Logout = () => {
  const router = useRouter();
  const logout = async () => {
    await logoutCookie();
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
