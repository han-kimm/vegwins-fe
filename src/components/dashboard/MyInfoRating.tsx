import { Rating, SearchItem } from '@/types/data';
import { getData } from '@/utils/fetching';
import { Fragment } from 'react';
import MyInfoRatingSelector from '@/components/dashboard/MyInfoRatingSelector';
import SearchResultItem from '@/components/search_main/SearchResultItem';

const MyInfoRating = async () => {
  const myRating: Array<{ rating: Rating; _id: SearchItem }> = await getData({ path: '/user/rating', queryKey: ['myRating'] });
  return (
    <div className="scrollbar flex max-h-400 min-h-108 flex-col gap-20 overflow-y-scroll pr-20">
      {myRating?.length ? (
        myRating.map((data, i) => (
          <Fragment key={data._id?._id}>
            {!!i && <hr className="border-black-100" />}
            <SearchResultItem {...data._id} />
            <MyInfoRatingSelector paperId={data._id?._id} rating={data.rating} />
          </Fragment>
        ))
      ) : (
        <p className="m-auto text-16">평가한 문서가 없습니다.</p>
      )}
    </div>
  );
};
export default MyInfoRating;
