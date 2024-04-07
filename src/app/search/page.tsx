import LiftingButton from '@/components/LiftingButton';
import CategorySelector from '@/components/search_category';
import HomeButton from '@/components/search_header/HomeButton';
import SearchBar from '@/components/search_header/SearchBar';
import ResultContainer from '@/components/search_result';

const Search = ({ searchParams }: { searchParams: { [key: string]: string | undefined } }) => {
  const { category } = searchParams;
  const { q } = searchParams;
  return (
    <div className="max-h-max min-h-dvh px-16 pb-28 pt-16">
      <header className="mb-12 flex gap-8">
        <HomeButton />
        <SearchBar />
      </header>
      <main className="flex flex-grow flex-col gap-24">
        <CategorySelector selected={category} />
        <ResultContainer q={q} />
      </main>
      <LiftingButton />
    </div>
  );
};
export default Search;
