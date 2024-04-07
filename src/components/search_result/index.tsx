import { Suspense } from 'react';
import SearchItem from '@/components/search_result/SearchItem';

interface Props {
  q?: string;
}

const ResultContainer = ({ q }: Props) => {
  // Data Fetching
  return (
    <Suspense fallback={<h1 className="mb-4 ml-20 text-18 font-bold">{`"${q}" 검색 중...`}</h1>}>
      <ResultView data={MOCK} q={q} />
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
    <section>
      <h1 className="mb-4 ml-20 text-18 font-bold">{q ? `"${q}" 검색 결과(${data.length}) 입니다.` : '최근 작성된 문서'}</h1>
      <div className="flex w-full flex-col rounded-md bg-white px-16 shadow-lg" role="group">
        {MOCK.map((data) => (
          <SearchItem key={data.id} {...data} />
        ))}
      </div>
    </section>
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
