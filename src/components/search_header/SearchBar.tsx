import Image from 'next/image';

const SearchBar = () => {
  return (
    <div className="relative w-full">
      <input placeholder="'검색어' 또는 '#특징'으로 검색" className="h-48 w-full rounded-full bg-white pl-48 text-16 font-bold shadow-sm" />
      <Image width={22} height={22} src="/icon/search.svg" alt="검색 아이콘" className="absolute left-16 top-1/2 -translate-y-1/2" aria-hidden={true} />
    </div>
  );
};
export default SearchBar;
