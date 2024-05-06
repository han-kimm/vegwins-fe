const SearchFallback = () => {
  return (
    <>
      <h1 className="mb-4 ml-20 text-18 font-bold">검색 중...</h1>
      <div className="flex flex-grow flex-col gap-12">
        {[1, 2, 3].map((v) => (
          <div key={v} className="transform-active flex h-max w-full animate-pulse gap-28 rounded-sm bg-white py-12">
            <div className="ml-20 h-100 w-100 shrink-0 rounded-sm bg-black-0" />
            <div className="mt-8 h-16 w-100 bg-black-0" />
          </div>
        ))}
      </div>
    </>
  );
};
export default SearchFallback;
