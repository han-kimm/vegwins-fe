import HomeLink from '@/components/common/HomeLink';
import LiftingButton from '@/components/common/LiftingButton';
import CategorySelector from '@/components/search_header/CategorySelector';
import SearchBar from '@/components/search_header/SearchBar';
import SearchResult from '@/components/search_main/SearchResult';

const Search = () => {
  return (
    <div className="max-h-max min-h-dvh px-16 pb-28 pt-16">
      <header className="mb-20 flex flex-col gap-8">
        <div className="flex gap-8">
          <SearchBar />
          <HomeLink />
        </div>
        <CategorySelector />
      </header>
      <main className="flex flex-grow flex-col gap-24">
        <SearchResult />
      </main>
      <LiftingButton />
    </div>
  );
};
export default Search;
