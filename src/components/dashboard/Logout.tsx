'use client';

import { deleteCookie, setCookie } from '@/utils/cookie';
import ajax from '@/utils/fetching';
import IconLogout from 'public/icon/logout.svg';

const Logout = () => {
  const logout = async () => {
    ajax.isAuth = false;
    setCookie({ name: 'v_rt', value: '', maxAge: 1, path: '/api/refresh' });
    deleteCookie('v_s');
  };

  return (
    <button onClick={logout} className="flex-center start- col-start-2 gap-8 text-18 font-bold">
      <IconLogout />
      로그아웃
    </button>
  );
};
export default Logout;
