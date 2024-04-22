import { SearchItem } from '@/types/data';
import { Suspense } from 'react';
import SearchResultView from '@/components/search_main/SearchResultView';

interface Props {
  data: SearchItem[];
  k?: string;
}

const SearchResult = ({ data, k }: Props) => {
  return (
    <Suspense fallback={<h1 className="mb-4 ml-20 text-18 font-bold">검색 중...</h1>}>
      <SearchResultView k={k} data={data ?? []} />
    </Suspense>
  );
};
export default SearchResult;
