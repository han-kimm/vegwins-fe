import { RATING_MSG } from '@/constants/default';
import Image from 'next/image';

interface Props {
  rating: number;
}

const ItemRating = ({ rating }: Props) => {
  const status = Math.floor(rating / 33.5);
  return (
    <div className="flex flex-col items-center">
      <Image width={24} height={24} src={`/icon/rate-${status}.svg`} alt={`평가: ${RATING_MSG[status]}`} />
      <span className="text-12 font-bold">{rating + '%'}</span>
    </div>
  );
};
export default ItemRating;
