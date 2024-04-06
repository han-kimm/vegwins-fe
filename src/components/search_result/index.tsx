import SearchItem from '@/components/search_result/SearchItem';

const SearchResult = () => {
  const searchParam = '삼각김밥';
  const searchCount = MOCK.length;
  return (
    <section>
      <h1 className="mb-4 ml-20 text-18 font-bold">{`"${searchParam}" 검색 결과(${searchCount}) 입니다.`}</h1>
      <div className="flex w-full flex-col rounded-md bg-white px-16 shadow-lg" role="group">
        {MOCK.map((data) => (
          <SearchItem key={data.id} {...data} />
        ))}
      </div>
    </section>
  );
};
export default SearchResult;

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
