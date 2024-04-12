'use client';

import { INPUT_PLACEHODER, SP_KEYWORD } from '@/constants/default';
import useChangeQuery from '@/hooks/useSavePath';
import Image from 'next/image';
import { ChangeEvent, FormEvent, Suspense, useCallback, useEffect, useMemo, useState } from 'react';
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
  const { changeQuery, searchParams } = useChangeQuery();
  const [value, setValue] = useState(() => searchParams.get(SP_KEYWORD) ?? '');

  useEffect(() => {
    const initial = searchParams.get(SP_KEYWORD);
    setValue(initial ?? '');
  }, [searchParams]);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
  }, []);

  const resetKeyword = useCallback(() => {
    setValue('');
    changeQuery(SP_KEYWORD);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    changeQuery(SP_KEYWORD, value);
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
