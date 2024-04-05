import Image from 'next/image';
import Link from 'next/link';
import ItemRating from '@/components/ItemRating';

interface Props<T> {
  id: T;
  imgSrc?: T;
  title: T;
  hashtag: T[];
  rating: number;
}

const SearchItem = ({ id, imgSrc, title, hashtag, rating }: Props<string>) => {
  return (
    <Link href={`/document/${id}`} className="flex-center h-max w-full gap-28 border-b border-solid border-black-100 p-20">
      <div id="imageContainer" className="relative h-100 w-100">
        <Image fill sizes="100px" src={imgSrc ?? '/image/default.png'} alt="" className="rounded-sm" aria-hidden={true} />
      </div>
      <div id="itemInfo" className="flex h-100 flex-grow justify-between py-12">
        <div id="title" className="flex h-full flex-col justify-between">
          <h2 className="text-18 font-bold">{title}</h2>
          <div className="text-12" role="group" aria-label="해시태그">
            {hashtag.map((tag) => (
              <span key={tag} className="mr-4">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <ItemRating rating={rating} />
      </div>
    </Link>
  );
};
export default SearchItem;
