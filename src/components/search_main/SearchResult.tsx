import ajax from '@/utils/fetching';
import { Suspense } from 'react';
import SearchResultView from '@/components/search_main/SearchResultView';

interface Props {
  c?: string;
  k?: string;
}

const SearchResult = async ({ c, k }: Props) => {
  const resp = await ajax.get({
    path: `http://localhost:3000/api/paper?${c ? `c=${c}` : ''}&${k ? `k=${k}` : ''}`,
    // revalidate: 180,
    cache: 'no-cache',
    queryKey: [c ?? '', k ?? ''],
  });
  console.log(resp.data);
  return (
    <Suspense fallback={<h1 className="mb-4 ml-20 text-18 font-bold">검색 중...</h1>}>
      <SearchResultView k={k} data={resp?.data ?? []} />
    </Suspense>
  );
};
export default SearchResult;
