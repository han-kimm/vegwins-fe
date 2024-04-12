'use client';

import { INPUT_PLACEHODER } from '@/constants/default';
import { QUERY, SP_KEYWORD } from '@/constants/sessionStorage';
import { getSessionStorage, setSessionStorage } from '@/utils/sessionStorage';
import Image from 'next/image';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import IconReset from 'public/icon/reset.svg';

const SearchBar = () => {
  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  useEffect(() => {
    const initial = getSessionStorage(QUERY);
    if (initial?.k) {
      setValue(initial.k);
    }
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const previousQuery = getSessionStorage(QUERY);
    setSessionStorage({ key: QUERY, value: { ...previousQuery, k: value } });
  };

  const resetKeyword = () => {
    setValue('');

    const previousQuery = getSessionStorage(QUERY);
    setSessionStorage({ key: QUERY, value: { ...previousQuery, k: '' } });
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full">
      <input
        type="search"
        name={SP_KEYWORD}
        value={value}
        onChange={handleChange}
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
