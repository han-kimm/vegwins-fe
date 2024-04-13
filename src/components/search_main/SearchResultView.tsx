'use client';

import { SP_KEYWORD } from '@/constants/default';
import { PREVIOUS_PATH } from '@/constants/localStorage';
import { MockSearch } from '@/constants/mockSearch';
import useChangeQuery from '@/hooks/useChangeQuery';
import { Fragment } from 'react';
import SearchResultEmpty from '@/components/search_main/SearchResultEmpty';
import SearchResultItem from '@/components/search_main/SearchResultItem';
import SearchResultReset from '@/components/search_main/SearchResultReset';

interface Props {
  data: MockSearch;
}

const SearchResultView = ({ data }: Props) => {
  const { searchParams, changeQuery } = useChangeQuery();
  const keyword = searchParams.get(SP_KEYWORD);

  return (
    <section className="flex flex-grow flex-col">
      <div className="mb-4 ml-20">
        <h1 className="inline text-18 font-bold">{keyword ? `"${keyword}" 검색 결과(${data.length}) 입니다.` : '최근 작성된 문서'}</h1>
        {!!keyword && <SearchResultReset />}
      </div>
      {data.length ? (
        <div
          onClick={() => changeQuery({ save: true, routing: false })}
          className="flex w-full flex-col rounded-md bg-white px-16 shadow-lg"
          role="group"
        >
          {data.map((data, i) => (
            <Fragment key={data.id}>
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
