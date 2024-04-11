import { ALTMSG } from '@/constants/ratingAlt';
import { setSessionStorage } from '@/utils/sessionStorage';
import Image from 'next/image';
import { useParams } from 'next/navigation';

interface Props {
  rating: number;
  setRating: (rating: number) => void;
}
const MyRatingSelector = ({ rating, setRating }: Props) => {
  const { docId } = useParams();

  const setRatingSessionStorage = (status: number) => {
    setRating(rating === status ? -1 : status);
    setSessionStorage({ key: `r${docId}`, value: rating === status ? -1 : status });
  };
  return (
    <div className="flex w-full justify-evenly" role="group" aria-label="평가 고르기">
      {[2, 1, 0].map((status) => (
        <button
          type="button"
          onClick={() => setRatingSessionStorage(status)}
          key={status}
          className={`flex-center transform-active relative h-40 w-40 rounded-full ${rating === status ? 'bg-orange' : 'bg-black-20'}`}
        >
          {rating === status && <div className="absolute -top-12 left-1/2 mb-4 h-8 w-8 -translate-x-1/2 rounded-full bg-black-80" />}
          <Image width={24} height={24} src={`/icon/rate-${status}.svg`} alt={ALTMSG[status]} />
        </button>
      ))}
    </div>
  );
};
export default MyRatingSelector;
