import { SearchItem } from '@/types/data';
import Link from 'next/link';
import { Fragment } from 'react';
import SearchResultEmpty from '@/components/search_main/SearchResultEmpty';
import SearchResultItem from '@/components/search_main/SearchResultItem';
import SearchResultReset from '@/components/search_main/SearchResultReset';

interface Props {
  c?: string;
  k?: string;
  data: SearchItem[];
}

const SearchResultView = ({ c, k, data }: Props) => {
  const setLabel = () => {
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
  return (
    <section className="flex flex-grow flex-col" aria-label="검색 목록">
      <div className="mb-12 ml-20 flex items-center">
        <h1 className="text-18 font-bold">{setLabel()}</h1>
        {(!!c || !!k) && <SearchResultReset />}
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
