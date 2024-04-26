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
    <div className="scrollbar flex max-h-400 min-h-108 overflow-y-scroll pr-20">
      {myPaper.length ? <SearchResultItemList data={myPaper} my /> : <p className="m-auto text-16">작성한 문서가 없습니다.</p>}
    </div>
  );
};
export default MyInfoPaper;
