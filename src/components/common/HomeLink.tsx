'use client';

import { QUERY } from '@/constants/sessionStorage';
import { setSessionStorage } from '@/utils/sessionStorage';
import Link from 'next/link';
import IconHome from 'public/icon/home.svg';

interface Props {
  isDoc?: boolean;
}

const HomeLink = ({ isDoc }: Props) => {
  const resetQuery = () => {
    setSessionStorage({ key: QUERY, value: null });
  };
  return (
    <Link href="/" onClick={resetQuery} className={isDoc ? 'flex items-center gap-12 text-16 font-medium' : 'rounded-full bg-white p-12 shadow-sm'}>
      {isDoc && '홈페이지'}
      <IconHome />
    </Link>
  );
};
export default HomeLink;
