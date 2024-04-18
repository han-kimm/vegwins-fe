import { DEFAULT_IMAGE } from '@/constants/default';
import { SearchItem } from '@/types/data';
import Image from 'next/image';
import Link from 'next/link';
import ItemRating from '@/components/common/ItemRating';

const SearchResultItem = ({ id, imageUrl, title, hashtag, rated, end }: SearchItem) => {
  return (
    <Link
      href={`/paper/${id}`}
      className={`${end && 'relative bg-black-0 [&>div]:opacity-30'} flex-center transform-active h-max w-full animate-fadeIn gap-28 p-12`}
    >
      <div className="relative h-100 w-100 shrink-0">
        <Image fill sizes="100px" src={imageUrl ?? DEFAULT_IMAGE} alt="" className="rounded-sm" aria-hidden={true} />
      </div>
      <div className="flex h-100 flex-grow justify-between gap-12 py-12">
        <ItemTitle title={title.length > 12 ? title.slice(0, 12) + '...' : title} hashtag={hashtag} />
        <RatingChecker rated={rated} />
      </div>
      {end && <p className="absolute left-32 text-18 font-bold">판매종료</p>}
    </Link>
  );
};
export default SearchResultItem;

const ItemTitle = ({ title, hashtag }: Pick<SearchItem, 'title' | 'hashtag'>) => {
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

const RatingChecker = ({ rated }: Pick<SearchItem, 'rated'>) => {
  return rated ? (
    <ItemRating rating={rated} />
  ) : (
    <p className="text-10 text-center font-medium text-black-40">
      평가하기
      <br />
      <span className="text-12">→</span>
    </p>
  );
};
