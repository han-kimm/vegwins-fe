import ajax from '@/utils/fetching';
import { Suspense } from 'react';
import SearchResultView from '@/components/search_main/SearchResultView';

const SearchResult = async () => {
  // initial (최근 추가된 문서)
  // Data Fetching
  const { data } = await ajax.get({ path: 'http://localhost:3000/api/paper', cache: 'no-cache' });
  console.log(data);
  return (
    <Suspense fallback={<h1 className="mb-4 ml-20 text-18 font-bold">검색 중...</h1>}>
      <SearchResultView data={data} />
    </Suspense>
  );
};
export default SearchResult;
