'use client';

import { SP_KEYWORD } from '@/constants/searchCookie';
import useSetSearch from '@/hooks/useSetSearch';
import Image from 'next/image';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import IconReset from 'public/icon/reset.svg';

interface Props {
  k: string | undefined;
}

const SearchBar = ({ k }: Props) => {
  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  useEffect(() => {
    setValue(k ?? '');
  }, [k]);

  const { setCookieRouting } = useSetSearch();

  const changeSearchParams = (e: FormEvent) => {
    e.preventDefault();
    setCookieRouting(SP_KEYWORD, value);
  };

  const resetKeyword = () => {
    setValue('');
    setCookieRouting(SP_KEYWORD, '');
  };

  return (
    <form onSubmit={changeSearchParams} className="relative w-full">
      <input
        name={SP_KEYWORD}
        value={value}
        onChange={handleChange}
        placeholder="'검색어' 또는 '#특징'"
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
      {!!value && (
        <button
          type="button"
          onClick={resetKeyword}
          disabled={!value}
          className={`absolute right-16 top-1/2 -translate-y-1/2 ${value ? 'text-black-80' : 'text-black-40'}`}
          aria-label="검색어 초기화 버튼"
        >
          <IconReset />
        </button>
      )}
    </form>
  );
};
export default SearchBar;
