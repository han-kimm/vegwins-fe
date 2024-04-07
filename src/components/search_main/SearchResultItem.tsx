import Image from 'next/image';
import Link from 'next/link';
import ItemRating from '@/components/common/ItemRating';

interface Props {
  id: string;
  imageUrl?: string;
  title: string;
  hashtag?: string[];
  rating?: number | null;
}

const SearchResultItem = ({ id, imageUrl, title, hashtag, rating }: Props) => {
  return (
    <Link href={`/doc/${id}`} className="flex-center h-max w-full animate-fadeIn gap-28 border-b border-solid border-black-100 p-12 last:border-0">
      <div id="imageContainer" className="relative h-100 w-100 shrink-0">
        <Image fill priority sizes="100px" src={imageUrl ?? '/image/default.webp'} alt="" className="rounded-sm" aria-hidden={true} />
      </div>
      <div id="itemInfo" className="flex h-100 flex-grow justify-between gap-12 py-12">
        <ItemTitle title={title.length > 12 ? title.slice(0, 12) + '...' : title} hashtag={hashtag} />
        <RatingChecker rating={rating} />
      </div>
    </Link>
  );
};
export default SearchResultItem;

const ItemTitle = ({ title, hashtag }: Pick<Props, 'title' | 'hashtag'>) => {
  return (
    <div className="flex h-full flex-col justify-between">
      <h2 className="text-18 font-bold">{title}</h2>
      {!!hashtag && (
        <div className="text-12" role="group" aria-label="해시태그">
          {hashtag.map((tag) => (
            <span key={tag} className="mr-4">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

const RatingChecker = ({ rating }: Pick<Props, 'rating'>) => {
  return rating ? (
    <ItemRating rating={rating} />
  ) : (
    <p className="text-10 text-center font-medium text-black-40">
      평가하기
      <br />
      <span className="text-12">→</span>
    </p>
  );
};
