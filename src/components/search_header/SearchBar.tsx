import Image from 'next/image';

const SearchBar = () => {
  return (
    <div className="relative w-full">
      <input placeholder="'검색어' 또는 '#특징'을 입력해 주세요. " className="-z-10 h-48 w-full rounded-full bg-white pl-52 text-20 font-medium shadow-sm" />
      <Image width={22} height={22} src="/icon/search.svg" alt="검색 아이콘" className="absolute left-16 top-1/2 -translate-y-1/2" aria-hidden={true} />
    </div>
  );
};
export default SearchBar;
