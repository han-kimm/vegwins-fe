import useFetchedState from '@/hooks/useFetchedState';
import { SearchItem } from '@/types/data';
import SearchResultItemList from '@/components/search_main/SearchResultItemList';

const MyInfoPaper = () => {
  const { state: myPaper } = useFetchedState<SearchItem[]>({ init: [], path: '/user/paper', deps: [] });

  return (
    <div className="scrollbar h-400 overflow-y-scroll pr-20">
      <SearchResultItemList data={myPaper} my />
    </div>
  );
};
export default MyInfoPaper;
