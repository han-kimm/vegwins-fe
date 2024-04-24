import { Suspense } from 'react';
import ApiErrorBoundary from '@/components/errorHandling/ApiErrorBoundary';
import SearchResultView from '@/components/search_main/SearchResultView';

interface Props {
  c?: string;
  k?: string;
}

const SearchResult = (props: Props) => {
  return (
    <ApiErrorBoundary>
      <Suspense fallback={<h1 className="mb-4 ml-20 text-18 font-bold">검색 중...</h1>}>
        <SearchResultView {...props} />
      </Suspense>
    </ApiErrorBoundary>
  );
};
export default SearchResult;
