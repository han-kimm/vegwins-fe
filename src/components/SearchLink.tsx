import Link from 'next/link';
import IconSearch from 'public/icon/search.svg';

const SearchLink = () => {
  return (
    <Link href="/search" className="flex w-full items-center gap-20 rounded-full bg-black-80 p-8 pl-20 text-20 font-medium text-white">
      <IconSearch />
      <span>검색하기</span>
    </Link>
  );
};
export default SearchLink;
