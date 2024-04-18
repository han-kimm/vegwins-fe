import { RATING_MSG } from '@/constants/default';
import { setLocalStorage } from '@/utils/localStorage';
import Image from 'next/image';
import { useParams } from 'next/navigation';

interface Props {
  rating: number;
  setRating: (rating: number) => void;
}
const MyRatingSelector = ({ rating, setRating }: Props) => {
  const { paperId } = useParams();

  const setRatingLocalStorage = (status: number) => {
    setRating(rating === status ? -1 : status);
    setLocalStorage({ key: `r${paperId}`, value: rating === status ? -1 : status });
  };
  return (
    <div className="flex w-full justify-evenly" role="group" aria-label="평가 고르기">
      {[2, 1, 0].map((status) => (
        <button
          type="button"
          onClick={() => setRatingLocalStorage(status)}
          key={status}
          className={`flex-center transform-active relative h-40 w-40 rounded-full ${rating === status ? 'bg-orange' : 'bg-black-20'}`}
        >
          {rating === status && <div className="absolute -top-12 left-1/2 mb-4 h-8 w-8 -translate-x-1/2 rounded-full bg-black-80" />}
          <Image width={24} height={24} src={`/icon/rate-${status}.svg`} alt={RATING_MSG[status]} />
        </button>
      ))}
    </div>
  );
};
export default MyRatingSelector;
