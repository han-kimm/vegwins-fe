import { SearchItem } from '@/types/data';
import ajax from '@/utils/fetching';
import { ErrorBoundary } from 'next/dist/client/components/error-boundary';
import Link from 'next/link';
import { Fragment } from 'react';
import ApiErrorBoundary from '@/components/errorHandling/ApiErrorBoundary';
import SearchResultEmpty from '@/components/search_main/SearchResultEmpty';
import SearchResultItem from '@/components/search_main/SearchResultItem';
import SearchResultReset from '@/components/search_main/SearchResultReset';

interface Props {
  c?: string;
  k?: string;
}

const SearchResultView = async ({ c, k }: Props) => {
  const data: SearchItem[] = await ajax.get({
    path: `/paper?${c ? `c=${c}` : ''}&${k ? `k=${encodeURIComponent(k)}` : ''}`,
    revalidate: 300,
  });

  return (
    <section className="flex flex-grow flex-col" aria-label="검색 목록">
      <div className="mb-12 ml-20 flex items-center">
        <h1 className="text-18 font-bold">{setLabel(data, c, k)}</h1>
        {data && (!!c || !!k) && <SearchResultReset />}
      </div>
      {data.length ? (
        <div className="flex w-full flex-col rounded-md bg-white px-16 shadow-lg" role="group">
          {data.map((data, i) => (
            <Fragment key={data._id}>
              {!i || <hr className="border-black-60" />}
              <SearchResultItem {...data} />
            </Fragment>
          ))}
        </div>
      ) : (
        <SearchResultEmpty />
      )}
    </section>
  );
};
export default SearchResultView;

const setLabel = (data: SearchItem[], c?: string, k?: string) => {
  if (c && k) {
    return `${c}: "${k}" 검색 결과(${data.length})`;
  } else if (c) {
    return `${c}: 검색 결과(${data.length})`;
  } else if (k) {
    return `"${k}" 검색 결과(${data.length})`;
  } else if (data.length) {
    return '최근 작성된 문서';
  }
};
