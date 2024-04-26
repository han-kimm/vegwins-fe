import useFetchedState from '@/hooks/useFetchedState';
import { Rating, SearchItem } from '@/types/data';
import { Fragment, useState } from 'react';
import DeferredSpinner from '@/components/errorHandling/DeferredSpinner';
import MyRatingSelector from '@/components/paper_main/MyRatingSelector';
import SearchResultItem from '@/components/search_main/SearchResultItem';

const MyInfoRating = () => {
  const { state: myRating, pending } = useFetchedState<{ rating: Rating; _id: SearchItem }[]>({ init: [], path: '/user/rating', deps: [] });

  if (pending) {
    return <DeferredSpinner />;
  }
  return (
    <div className="scrollbar min-h-108 flex max-h-400 flex-col gap-20 overflow-y-scroll pr-20">
      {myRating.length ? (
        myRating.map((data, i) => (
          <Fragment key={data._id._id}>
            {!!i && <hr className="border-black-100" />}
            <SearchResultItem {...data._id} />
            <MyInfoRatingSelector paperId={data._id._id} rating={data.rating} />
          </Fragment>
        ))
      ) : (
        <p className="m-auto text-16">평가한 문서가 없습니다.</p>
      )}
    </div>
  );
};
export default MyInfoRating;

interface Props {
  paperId: string;
  rating: Rating;
}

const MyInfoRatingSelector = ({ paperId, rating: initial }: Props) => {
  const [{ rating }, setRating] = useState({ rating: initial });
  return <MyRatingSelector paperId={paperId} rating={rating} setRating={setRating} />;
};
