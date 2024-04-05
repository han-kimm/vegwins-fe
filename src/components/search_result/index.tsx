import SearchItem from '@/components/search_result/SearchItem';

const SearchResult = () => {
  const searchParam = '삼각김밥';
  const searchCount = 5;
  return (
    <section className="flex flex-grow flex-col gap-8">
      <h1 className="ml-20 text-18 font-bold">{`"${searchParam}" 검색 결과(${searchCount}) 입니다.`}</h1>
      <div className="flex w-full flex-grow flex-col overflow-scroll rounded-t-md bg-white px-16 shadow-lg" role="group">
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
  hashtag: string[];
  rating: number;
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
    title: 'CU 삼각김밥',
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
];
