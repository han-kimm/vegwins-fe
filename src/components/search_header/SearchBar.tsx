'use client';

import useSetSearch from '@/hooks/useSetSearch';
import { setCookie } from '@/utils/cookie';
import Image from 'next/image';
import { FormEvent } from 'react';

const INPUTNAME = 'q';
interface CustomEvent extends FormEvent<HTMLFormElement> {
  target: EventTarget & {
    [INPUTNAME]: HTMLInputElement;
  };
}

const SearchBar = () => {
  const { router, pathname, createQueryString } = useSetSearch();

  const changeSearchParams = (e: CustomEvent) => {
    e.preventDefault();
    const q = e.target[INPUTNAME].value;
    const newParams = createQueryString('q', q);
    const newPath = pathname + '?' + newParams;
    setCookie({ key: 'sp', value: newPath });
    router.push(newPath);
  };
  return (
    <form onSubmit={changeSearchParams} className="relative w-full">
      <input
        name={INPUTNAME}
        placeholder="'검색어' 또는 '#특징'으로 검색"
        className="h-48 w-full rounded-full bg-white pl-48 text-16 font-bold shadow-sm"
      />
      <Image
        width={22}
        height={22}
        src="/icon/search.svg"
        alt="검색 아이콘"
        className="absolute left-16 top-1/2 -translate-y-1/2"
        aria-hidden={true}
      />
    </form>
  );
};
export default SearchBar;
