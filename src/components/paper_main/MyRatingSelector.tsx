import { RATING_MSG } from '@/constants/default';
import { Paper, Rating } from '@/types/data';
import { setLocalStorage } from '@/utils/browserStorage';
import { getCookie } from '@/utils/cookie';
import { deleteData, postData } from '@/utils/fetching';
import { refreshTag } from '@/utils/revalidate';
import Image from 'next/image';
import toast from 'react-hot-toast';

interface Props {
  paperRating?: Paper['rating'];
  paperId: string;
  rating: Rating;
  setRating: (rating: Rating) => void;
}
const MyRatingSelector = ({ paperRating, paperId, rating, setRating }: Props) => {
  const changeRating = async (status: Rating) => {
    const isSame = rating === status;
    const newValue = isSame ? -1 : status;
    setRating(newValue);

    const isAuth = await getCookie('v_s');
    if (!isAuth) {
      setLocalStorage({ key: `r${paperId}`, value: newValue });
      return;
    }

    try {
      let res;
      if (isSame) {
        res = await deleteData({ path: `/paper/${paperId}/rating`, body: { rating } });
      } else {
        res = await postData({ path: `/paper/${paperId}/rating`, body: { rating: newValue } });
      }
      if (!res.error) {
        toast.success('평가 반영 완료!');
      } else {
        setRating(rating);
        toast.error('다시 시도해 주십시오.');
      }
      await refreshTag(['myRating', 'search']);
    } catch {
      setRating(rating);
    }
  };

  return (
    <>
      <div className="flex w-full justify-evenly" role="group" aria-label="평가 고르기">
        {RATINGS.map((status) => (
          <button
            type="button"
            onClick={() => changeRating(status)}
            key={status}
            className={`flex-center transform-active relative h-40 w-40 rounded-full ${rating === status ? 'bg-orange' : 'bg-black-20'}`}
          >
            {rating === status && <div className="absolute -top-12 left-1/2 mb-4 h-8 w-8 -translate-x-1/2 rounded-full bg-black-80" />}
            <Image width={24} height={24} src={`/icon/rate-${status}.svg`} alt={RATING_MSG[status]} />
          </button>
        ))}
      </div>
      {rating !== -1 && rating > -1 && paperRating && (
        <span className="absolute bottom-4">{paperRating?.[rating] ? `${paperRating[rating]}명과 같은 의견이에요!` : '첫 평가 감사합니다!'}</span>
      )}
    </>
  );
};
export default MyRatingSelector;

const RATINGS = [2, 1, 0] as const;
