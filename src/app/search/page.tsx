import { SearchParamsType } from '@/constants/searchCookie';
import HomeButton from '@/components/common/HomeButton';
import LiftingButton from '@/components/common/LiftingButton';
import SearchBar from '@/components/search_header/SearchBar';
import CategorySelector from '@/components/search_main/CategorySelector';
import SearchResult from '@/components/search_main/SearchResult';

interface Props {
  searchParams: { [key in SearchParamsType]: string | undefined };
}

const Search = ({ searchParams }: Props) => {
  const { c, k } = searchParams;
  return (
    <div className="max-h-max min-h-dvh px-16 pb-28 pt-16">
      <header className="mb-12 flex gap-8">
        <SearchBar k={k} />
        <HomeButton />
      </header>
      <main className="flex flex-grow flex-col gap-24">
        <CategorySelector selected={c} />
        <SearchResult k={k} />
      </main>
      <LiftingButton />
    </div>
  );
};
export default Search;
