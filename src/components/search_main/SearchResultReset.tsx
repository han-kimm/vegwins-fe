'use client';

import { SP_KEYWORD } from '@/constants/sessionStorage';
import useSetSearch from '@/hooks/useSavePath';

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
