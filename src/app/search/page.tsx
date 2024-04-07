import HomeButton from '@/components/common/HomeButton';
import LiftingButton from '@/components/common/LiftingButton';
import SearchBar from '@/components/search_header/SearchBar';
import CategorySelector from '@/components/search_main/CategorySelector';
import SearchResult from '@/components/search_main/SearchResult';

const Search = ({ searchParams }: { searchParams: { [key: string]: string | undefined } }) => {
  const { category, q } = searchParams;
  return (
    <div className="max-h-max min-h-dvh px-16 pb-28 pt-16">
      <header className="mb-12 flex gap-8">
        <SearchBar />
        <HomeButton />
      </header>
      <main className="flex flex-grow flex-col gap-24">
        <CategorySelector selected={category} />
        <SearchResult q={q} />
      </main>
      <LiftingButton />
    </div>
  );
};
export default Search;
