import { ALTMSG } from '@/constants/ratingAlt';
import { getCookie } from '@/utils/cookie';
import MyRatingSelector from '@/components/doc_main/MyRatingSelector';

interface Props {
  docId: string;
}

const MyRating = async ({ docId }: Props) => {
  const myRating = await getCookie(`r${docId}`);
  return (
    <div className="flex-center grow flex-col gap-28 rounded-md bg-white p-20 shadow-lg">
      <div className="flex w-full gap-12">
        <p className="shrink-0 text-18 font-bold">나의 평가</p>
        <div className="h-full w-1 border-l border-black-60 " />
        <p className="grow text-center text-18 font-bold">{ALTMSG[myRating ?? -1]}</p>
      </div>
      <MyRatingSelector rating={myRating} />
    </div>
  );
};
export default MyRating;
