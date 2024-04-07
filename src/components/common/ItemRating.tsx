import Image from 'next/image';

interface Props {
  rating: number;
}

const ItemRating = ({ rating }: Props) => {
  const status = Math.floor(rating / 33.5);
  return (
    <div className="flex flex-col items-center">
      <Image width={24} height={24} src={`/icon/rate-${status}.svg`} alt={`평가: ${ALTMSG[status]}`} />
      <span className="text-12 font-bold">{rating + '%'}</span>
    </div>
  );
};
export default ItemRating;

const ALTMSG: { [key: number]: string } = {
  [0]: '안 좋음',
  [1]: '보통',
  [2]: '좋음',
};
