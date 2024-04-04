import HomeButton from '@/components/search_header/HomeButton';
import SearchBar from '@/components/search_header/SearchBar';

const Search = () => {
  return (
    <div className="h-dvh p-16">
      <header className="flex gap-8">
        <HomeButton />
        <SearchBar />
      </header>
    </div>
  );
};
export default Search;
