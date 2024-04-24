import useModalScroll from '@/hooks/useModalScroll';
import { deleteCookie, setCookie } from '@/utils/cookie';
import ajax from '@/utils/fetching';
import IconLogout from 'public/icon/logout.svg';
import IconManage from 'public/icon/manage.svg';

interface Props {
  closeSheet: () => void;
}

const ProfileBottomSheet = ({ closeSheet }: Props) => {
  useModalScroll();

  const logout = async () => {
    ajax.isAuth = false;
    setCookie({ name: 'v_rt', value: '', maxAge: 1, path: '/api/refresh' });
    deleteCookie('v_s');
  };
  return (
    <div onClick={closeSheet} className="fixed bottom-0 left-0 z-10 flex h-screen w-full animate-fadeIn items-end bg-gray-900 bg-opacity-30">
      <div onClick={(e) => e.stopPropagation()} className="flex h-max w-full animate-slideDown flex-col rounded-t-sm bg-white shadow-lg">
        <button className="flex-center mx-20 gap-20 border-b border-black-100 py-40 text-18 font-bold">
          <IconManage />
          닉네임 변경
        </button>
        <button onClick={logout} className="flex-center mx-20 gap-20 py-40 text-18 font-bold">
          <IconLogout />
          로그아웃
        </button>
      </div>
    </div>
  );
};
export default ProfileBottomSheet;
