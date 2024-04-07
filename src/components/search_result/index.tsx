import Image from 'next/image';
import { Suspense } from 'react';
import Anchor from '@/components/Anchor';
import SearchItem from '@/components/search_result/SearchItem';

interface Props {
  q?: string;
}

const ResultContainer = ({ q }: Props) => {
  // Data Fetching
  return (
    <Suspense fallback={<h1 className="mb-4 ml-20 text-18 font-bold">{`"${q}" 검색 중...`}</h1>}>
      <ResultView data={q ? MOCK.slice(2, 2) : MOCK} q={q} />
    </Suspense>
  );
};
export default ResultContainer;

interface ResultViewProps {
  data: typeof MOCK;
  q?: string;
}

const ResultView = ({ data, q }: ResultViewProps) => {
  return (
    <section className="flex flex-grow flex-col">
      <h1 className="mb-4 ml-20 text-18 font-bold">{q ? `"${q}" 검색 결과(${data.length}) 입니다.` : '최근 작성된 문서'}</h1>
      {data.length ? (
        <div className={`flex w-full flex-col rounded-md bg-white px-16 shadow-lg`} role="group">
          {data.map((data) => (
            <SearchItem key={data.id} {...data} />
          ))}
        </div>
      ) : (
        <ResultEmpty />
      )}
    </section>
  );
};

const ResultEmpty = () => {
  return (
    <div className="flex flex-grow animate-fadeIn flex-col">
      <h2 className="flex-center w-full flex-grow text-24 font-bold">일치하는 문서가 없습니다.</h2>
      <div className="border-t border-solid border-black-100 p-20">
        <h3 className="mb-4 text-18 font-bold">제안</h3>
        <p className="mb-4 text-14 font-medium">검색 결과가 없다면, 새로운 문서를 생성해 주세요!</p>
        <Anchor href="/commit" className="w-max text-14 text-white">
          <Image width={16} height={16} src="/icon/pencil.svg" alt="" aria-hidden={true} />
          <span>문서 작성하기</span>
        </Anchor>
      </div>
    </div>
  );
};

const MOCK: Array<{
  id: string;
  imgSrc?: string;
  title: string;
  hashtag?: string[];
  rating?: number | null;
}> = [
  {
    id: '1',
    title: '풀무원',
    imgSrc: '/image/sample.png',
    hashtag: ['#웃어', '#좋아'],
    rating: 44,
  },
  {
    id: '2',
    title: 'CU 삼각김밥 뿡가뽕뽀로뽕뽕',
    imgSrc: '/image/sample2.jpg',
    hashtag: ['#CU', '#삼각김밥'],
    rating: 77,
  },
  {
    id: '3',
    title: '에에올',
    hashtag: ['#영화', '#재밌다'],
    rating: 100,
  },
  {
    id: '4',
    title: '에에올',
    rating: 33,
  },
  {
    id: '5',
    title: '에에올',
    hashtag: ['#영화', '#재밌다'],
  },
  {
    id: '6',
    title: '에에올',
    hashtag: ['#영화', '#재밌다'],
    rating: null,
  },
  {
    id: '7',
    title: '에에올',
    hashtag: ['#영화', '#재밌다'],
    rating: 33,
  },
  {
    id: '8',
    title: '에에올',
    hashtag: ['#영화', '#재밌다'],
    rating: null,
  },
];
