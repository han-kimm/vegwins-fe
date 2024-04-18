import Link from 'next/link';

const SearchResultReset = () => {
  return (
    <Link href="/search" type="reset" className="ml-8 font-bold text-sky">
      모든 검색 초기화
    </Link>
  );
};
export default SearchResultReset;
