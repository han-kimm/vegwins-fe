'use client';

import { INPUT_PLACEHODER, SP_KEYWORD } from '@/constants/default';
import useChangeQuery from '@/hooks/useChangeQuery';
import Image from 'next/image';
import { ChangeEvent, FormEvent, Suspense, memo, useEffect, useState } from 'react';
import IconBackspace from 'public/icon/backspace.svg';

const SearchBar = memo(function SearchBar() {
  return (
    <Suspense>
      <SearchInput />
    </Suspense>
  );
});
export default SearchBar;

const SearchInput = () => {
  const { changeQuery, searchParams } = useChangeQuery();
  const initial = searchParams.get(SP_KEYWORD) ?? '';
  const [value, setValue] = useState(initial);

  useEffect(() => {
    setValue(initial);
  }, [initial]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const resetKeyword = () => {
    setValue('');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    changeQuery({ name: SP_KEYWORD, value });
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full" aria-label="검색어 입력">
      <input
        value={value}
        onChange={handleChange}
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
      <button
        type="button"
        onClick={resetKeyword}
        disabled={!value}
        className={`absolute right-16 top-1/2 -translate-y-1/2 first:h-16 first:w-16 ${value ? 'first: text-black-100' : 'text-black-80'}`}
        aria-label="검색어 지우기"
      >
        <IconBackspace />
      </button>
    </form>
  );
};
