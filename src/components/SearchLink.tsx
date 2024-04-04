import Link from 'next/link';
import IconSearch from 'public/icon/search.svg';

const SearchLink = () => {
  return (
    <section className="w-full px-40" aria-label="검색 페이지로 이동">
      <Link href="/search" className="flex items-center gap-20 rounded-full bg-black-80 p-8 pl-20 text-20 font-medium text-white shadow-sm">
        <IconSearch />
        <span>검색하기</span>
      </Link>
    </section>
  );
};
export default SearchLink;
