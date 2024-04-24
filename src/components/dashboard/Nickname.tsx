'use client';

import IconManage from 'public/icon/manage.svg';

const Nickname = () => {
  return (
    <button className="flex-center mx-20 gap-20 border-b border-black-100 py-40 text-18 font-bold">
      <IconManage />
      닉네임 변경
    </button>
  );
};
export default Nickname;
