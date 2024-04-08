import { MOCK } from '@/constants/mockSearch';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import BaseLink from '@/components/common/BaseLink';
import SearchResultItem from '@/components/search_main/SearchResultItem';
import SearchResultReset from '@/components/search_main/SearchResultReset';

interface Props {
  k?: string;
}

const SearchResult = ({ k }: Props) => {
  // Data Fetching
  return (
    <Suspense fallback={<h1 className="mb-4 ml-20 text-18 font-bold">{`"${k}" 검색 중...`}</h1>}>
      <SearchResultView data={k ? MOCK.slice(2, 2) : MOCK} k={k} />
    </Suspense>
  );
};
export default SearchResult;

interface SearchResultViewProps extends Props {
  data: typeof MOCK;
}

const SearchResultView = ({ data, k }: SearchResultViewProps) => {
  return (
    <section className="flex flex-grow flex-col">
      <div className="mb-4 ml-20">
        <h1 className="inline text-18 font-bold">{k ? `"${k}" 검색 결과(${data.length}) 입니다.` : '최근 작성된 문서'}</h1>
        {!!k && <SearchResultReset />}
      </div>
      {data.length ? (
        <div className={`flex w-full flex-col rounded-md bg-white px-16 shadow-lg`} role="group">
          {data.map((data) => (
            <SearchResultItem key={data.id} {...data} />
          ))}
        </div>
      ) : (
        <SearchResultEmpty />
      )}
    </section>
  );
};

const SearchResultEmpty = () => {
  return (
    <div className="flex flex-grow animate-fadeIn flex-col">
      <h2 className="flex-center w-full flex-grow text-24 font-bold">일치하는 문서가 없습니다.</h2>
      <div className="border-t border-solid border-black-100 p-20">
        <h3 className="mb-4 text-18 font-bold">제안</h3>
        <p className="mb-4 text-14 font-medium">검색 결과가 없다면, 새로운 문서를 생성해 주세요!</p>
        <BaseLink href="/commit" className="w-max text-14 text-white">
          <Image width={16} height={16} src="/icon/pencil.svg" alt="" aria-hidden={true} />
          <span>문서 작성하기</span>
        </BaseLink>
      </div>
    </div>
  );
};
