import { SearchItem } from '@/types/data';
import { Suspense } from 'react';
import SearchResultView from '@/components/search_main/SearchResultView';

interface Props {
  data: SearchItem[];
  c?: string;
  k?: string;
}

const SearchResult = (props: Props) => {
  return (
    <Suspense fallback={<h1 className="mb-4 ml-20 text-18 font-bold">검색 중...</h1>}>
      <SearchResultView {...props} />
    </Suspense>
  );
};
export default SearchResult;
