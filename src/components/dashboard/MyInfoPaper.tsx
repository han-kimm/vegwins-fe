import useFetchedState from '@/hooks/useFetchedState';
import { SearchItem } from '@/types/data';
import DeferredSpinner from '@/components/errorHandling/DeferredSpinner';
import SearchResultItemList from '@/components/search_main/SearchResultItemList';

const MyInfoPaper = () => {
  const { state: myPaper, pending } = useFetchedState<SearchItem[]>({ init: [], path: '/user/paper', deps: [] });

  if (pending) {
    return <DeferredSpinner />;
  }
  return (
    <div className="scrollbar h-400 overflow-y-scroll pr-20">
      <SearchResultItemList data={myPaper} my />
    </div>
  );
};
export default MyInfoPaper;
