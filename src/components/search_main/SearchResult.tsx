import { MOCK } from '@/constants/mockSearch';
import { Suspense } from 'react';
import SearchResultView from '@/components/search_main/SearchResultView';

const SearchResult = () => {
  // initial (최근 추가된 문서)
  // Data Fetching
  return (
    <Suspense fallback={<h1 className="mb-4 ml-20 text-18 font-bold">검색 중...</h1>}>
      <SearchResultView data={MOCK} />
    </Suspense>
  );
};
export default SearchResult;
