import { SearchItem } from '@/types/data';
import ajax from '@/utils/fetching';
import LiftingButton from '@/components/common/LiftingButton';
import LinkHome from '@/components/common/LinkHome';
import CategorySelector from '@/components/search_header/CategorySelector';
import SearchBar from '@/components/search_header/SearchBar';
import SearchResult from '@/components/search_main/SearchResult';

interface Props {
  searchParams: { [key in 'c' | 'k']: string };
}
const Search = async ({ searchParams }: Props) => {
  const { c, k } = searchParams;
  const data: SearchItem[] = await ajax.get({
    path: `/paper?${c ? `c=${c}` : ''}&${k ? `k=${encodeURIComponent(k)}` : ''}`,
    cache: 'no-store',
  });
  return (
    <div className="max-h-max min-h-dvh px-16 pb-28 pt-16">
      <header className="mb-20 flex flex-col gap-8">
        <div className="flex gap-8">
          <SearchBar />
          <LinkHome />
        </div>
        <CategorySelector />
      </header>
      <main className="flex flex-grow flex-col gap-24">
        <SearchResult data={data} k={k} />
      </main>
      <LiftingButton />
    </div>
  );
};
export default Search;
