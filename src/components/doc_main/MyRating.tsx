import { getCookie } from '@/utils/cookie';
import MyRatingSelector from '@/components/doc_main/MyRatingSelector';

interface Props {
  docId: string;
}

const MyRating = async ({ docId }: Props) => {
  const myRating = await getCookie(`r${docId}`);
  return (
    <div className="flex flex-col gap-28 rounded-md bg-white p-24 shadow-lg">
      <div className="flex gap-12">
        <p className="w-72 shrink-0 text-18 font-bold">나의 평가</p>
        <span className="text-black-80">평가한 문서는 홈 화면 상단 프로필에서 확인할 수 있습니다.</span>
      </div>
      <MyRatingSelector rating={myRating} />
    </div>
  );
};
export default MyRating;
