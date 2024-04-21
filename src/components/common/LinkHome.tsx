'use client';

import { PREVIOUS_PATH } from '@/constants/default';
import { setLocalStorage } from '@/utils/localStorage';
import Link from 'next/link';
import IconHome from 'public/icon/home.svg';

interface Props {
  isPaper?: boolean;
}

const LinkHome = ({ isPaper }: Props) => {
  return (
    <Link
      href="/"
      onClick={() => setLocalStorage({ key: PREVIOUS_PATH, value: null })}
      className={isPaper ? 'flex items-center gap-12 text-16 font-medium' : 'rounded-full bg-white p-12 shadow-sm'}
    >
      {isPaper && '홈페이지'}
      <IconHome />
    </Link>
  );
};
export default LinkHome;
