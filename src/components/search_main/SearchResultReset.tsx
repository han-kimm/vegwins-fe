'use client';

import { SP_KEYWORD } from '@/constants/searchCookie';
import useSetSearch from '@/hooks/useSetSearch';

const SearchResultReset = () => {
  const { setCookieRouting } = useSetSearch();

  const changeSearchParams = () => {
    setCookieRouting(SP_KEYWORD, '');
  };

  return (
    <button type="reset" onClick={changeSearchParams} className="ml-8 font-bold text-sky">
      검색어 초기화
    </button>
  );
};
export default SearchResultReset;
