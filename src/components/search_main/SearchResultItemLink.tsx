'use client';

import { PREVIOUS_PATH } from '@/constants/default';
import { setSessionStorage } from '@/utils/browserStorage';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface Props {
  _id: string;
  end: boolean;
  children: ReactNode;
}

const SearchResultItemLink = ({ _id, end, children }: Props) => {
  const path = usePathname();
  const savePath = () => {
    setSessionStorage({ key: PREVIOUS_PATH, value: path });
  };
  return (
    <Link
      href={`/paper/${_id}`}
      onClick={savePath}
      className={`${end && 'relative bg-black-0 [&>div]:opacity-30'} flex-center transform-active h-max w-full animate-fadeIn gap-28 py-12`}
    >
      {children}
    </Link>
  );
};
export default SearchResultItemLink;
