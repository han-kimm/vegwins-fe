import useFetchedState from '@/hooks/useFetchedState';
import { Rating, SearchItem } from '@/types/data';
import { Fragment, useState } from 'react';
import MyRating from '@/components/paper_main/MyRating';
import MyRatingSelector from '@/components/paper_main/MyRatingSelector';
import SearchResultItem from '@/components/search_main/SearchResultItem';

const MyInfoRating = () => {
  const { state: myRating } = useFetchedState<{ rating: Rating; _id: SearchItem }[]>({ init: [], path: '/user/rating', deps: [] });
  console.log(myRating);
  return (
    <div className="flex flex-col gap-20">
      {myRating.map((data, i) => (
        <Fragment key={data._id._id}>
          {!!i && <hr className="border-black-100" />}
          <SearchResultItem {...data._id} />
          <MyInfoRatingSelector paperId={data._id._id} rating={data.rating} />
        </Fragment>
      ))}
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
