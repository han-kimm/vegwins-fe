import { Suspense } from 'react';
import ApiErrorBoundary from '@/components/errorHandling/ApiErrorBoundary';
import SearchFallback from '@/components/search_main/SearchFallback';
import SearchResultView from '@/components/search_main/SearchResultView';

interface Props {
  c?: string;
  k?: string;
}

const SearchResult = (props: Props) => {
  return (
    <ApiErrorBoundary>
      <Suspense fallback={<SearchFallback />}>
        <SearchResultView {...props} />
      </Suspense>
    </ApiErrorBoundary>
  );
};
export default SearchResult;
