import CategorySelector from '@/components/search_category';
import HomeButton from '@/components/search_header/HomeButton';
import SearchBar from '@/components/search_header/SearchBar';
import SearchResult from '@/components/search_result';

const Search = () => {
  return (
    <div className="flex h-dvh flex-col px-16 pt-16">
      <header className="mb-12 flex gap-8">
        <HomeButton />
        <SearchBar />
      </header>
      <main className="flex flex-grow flex-col gap-24">
        <CategorySelector />
        <SearchResult />
      </main>
    </div>
  );
};
export default Search;
