import CategorySelector from '@/components/search_category';
import HomeButton from '@/components/search_header/HomeButton';
import SearchBar from '@/components/search_header/SearchBar';

const Search = () => {
  return (
    <div className="h-dvh p-16">
      <header className="mb-12 flex gap-8">
        <HomeButton />
        <SearchBar />
      </header>
      <main>
        <CategorySelector />
      </main>
    </div>
  );
};
export default Search;
