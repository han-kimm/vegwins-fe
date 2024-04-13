'use client';

import { INPUT_PLACEHODER, SP_KEYWORD } from '@/constants/default';
import useChangeQuery from '@/hooks/useChangeQuery';
import Image from 'next/image';
import { FormEvent, Suspense, useEffect, useRef } from 'react';
import IconReset from 'public/icon/reset.svg';

const SearchBar = () => {
  return (
    <Suspense>
      <SearchInput />
    </Suspense>
  );
};
export default SearchBar;

const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { changeQuery, searchParams } = useChangeQuery();

  useEffect(() => {
    const initial = searchParams.get(SP_KEYWORD);
    inputRef.current!.value = initial ?? '';
  }, [searchParams]);

  const resetKeyword = () => {
    inputRef.current!.value = '';
    changeQuery({ name: SP_KEYWORD });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    changeQuery({ name: SP_KEYWORD, value: inputRef.current?.value });
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full" aria-label="검색어 입력">
      <input
        ref={inputRef}
        type="search"
        placeholder={INPUT_PLACEHODER}
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
      {!!inputRef.current?.value && (
        <button
          type="button"
          onClick={resetKeyword}
          disabled={!inputRef.current?.value}
          className={`absolute right-16 top-1/2 -translate-y-1/2 ${inputRef.current?.value ? 'text-black-80' : 'text-black-40'}`}
          aria-label="검색어 초기화 버튼"
        >
          <IconReset />
        </button>
      )}
    </form>
  );
};
