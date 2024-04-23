'use client';

import { PREVIOUS_PATH } from '@/constants/default';
import Link from 'next/link';

const SearchResultReset = () => {
  const handleClick = () => {
    sessionStorage.removeItem(PREVIOUS_PATH);
  };
  return (
    <Link href="/search" onClick={handleClick} className="ml-8 text-12 font-bold text-sky" aria-label="검색 결과 초기화">
      모든 검색 초기화
    </Link>
  );
};
export default SearchResultReset;
