'use client';

import { PREVIOUS_PATH } from '@/constants/default';
import Link from 'next/link';
import IconHome from 'public/icon/home.svg';

interface Props {
  isPaper?: boolean;
}

const LinkHome = ({ isPaper }: Props) => {
  const handleClick = () => {
    [PREVIOUS_PATH, 'scroll'].forEach((v) => sessionStorage.removeItem(v));
  };
  return (
    <Link
      href="/"
      onClick={handleClick}
      className={isPaper ? 'flex items-center gap-12 text-16 font-medium' : 'rounded-full bg-white p-12 shadow-sm'}
    >
      {isPaper && '홈페이지'}
      <IconHome />
    </Link>
  );
};
export default LinkHome;
