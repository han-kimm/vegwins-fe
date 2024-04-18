import { SearchItem } from '@/types/data';
import { Fragment } from 'react';
import SearchResultEmpty from '@/components/search_main/SearchResultEmpty';
import SearchResultItem from '@/components/search_main/SearchResultItem';
import SearchResultReset from '@/components/search_main/SearchResultReset';

interface Props {
  k?: string;
  data: SearchItem[];
}

const SearchResultView = ({ k, data }: Props) => {
  return (
    <section className="flex flex-grow flex-col">
      <div className="mb-4 ml-20">
        <h1 className="inline text-18 font-bold">{k ? `"${k}" 검색 결과(${data.length}) 입니다.` : '최근 작성된 문서'}</h1>
        {!!k && <SearchResultReset />}
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
