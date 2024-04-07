'use client';

import { ALTMSG } from '@/constants/ratingAlt';
import { setCookie } from '@/utils/cookie';
import Image from 'next/image';
import { useParams } from 'next/navigation';

interface Props {
  rating: number;
}
const MyRatingSelector = ({ rating }: Props) => {
  const { docId } = useParams();

  const setRatingCookie = (status: number) => {
    setCookie({ key: `r${docId}`, value: status });
  };
  return (
    <div className="flex gap-20">
      <p className="w-72 text-end text-16 font-bold">{ALTMSG[rating ?? -1]}</p>
      <div className="flex gap-20" role="group" aria-label="평가 고르기">
        {[2, 1, 0].map((status) => (
          <button
            type="button"
            onClick={() => setRatingCookie(status)}
            key={status}
            className={`relative rounded-full p-8 ${rating === status ? 'bg-orange' : 'bg-black-20'}`}
          >
            {rating === status && <div className="absolute -top-12 left-1/2 mb-4 h-8 w-8 -translate-x-1/2 rounded-full bg-black-80" />}
            <Image width={24} height={24} src={`/icon/rate-${status}.svg`} alt={ALTMSG[status]} />
          </button>
        ))}
      </div>
    </div>
  );
};
export default MyRatingSelector;
