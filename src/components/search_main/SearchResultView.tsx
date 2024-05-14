import { SearchItem } from '@/types/data';
import { getData } from '@/utils/fetching';
import SearchResultEmpty from '@/components/search_main/SearchResultEmpty';
import SearchResultItemList from '@/components/search_main/SearchResultItemList';
import SearchResultReset from '@/components/search_main/SearchResultReset';

interface Props {
  c?: string;
  k?: string;
}

const SearchResultView = async ({ c, k }: Props) => {
  const data: SearchItem[] = await getData({
    path: `/paper?${c ? `c=${c}` : ''}&${k ? `k=${encodeURIComponent(k)}` : ''}`,
    queryKey: ['search'],
  });

  return (
    <section className="flex flex-grow flex-col" aria-label="검색 목록">
      <div className="mb-12 ml-20 flex flex-wrap items-center justify-between">
        <h1 className="text-18 font-bold">{setLabel(data, c, k)}</h1>
        {data && (!!c || !!k) && <SearchResultReset />}
      </div>
      {data?.length ? <SearchResultItemList data={data} /> : <SearchResultEmpty />}
    </section>
  );
};
export default SearchResultView;

const setLabel = (data: SearchItem[], c?: string, k?: string) => {
  const length = data?.length || 0;
  if (c && k) {
    return `${c}: "${k}" 검색 결과(${length})`;
  } else if (c) {
    return `${c}: 검색 결과(${length})`;
  } else if (k) {
    return `"${k}" 검색 결과(${length})`;
  } else if (length) {
    return '최근 작성된 문서';
  }
};
