import Link from 'next/link';

const SearchResultReset = () => {
  return (
    <Link
      href="/search"
      className="transform-active ml-8 rounded-full bg-black-100 px-8 py-4 text-12 font-bold text-white"
      aria-label="검색 결과 초기화"
    >
      검색 초기화
    </Link>
  );
};
export default SearchResultReset;
