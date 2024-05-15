import { DEFAULT_IMAGE } from '@/constants/default';
import { SearchItem } from '@/types/data';
import Image from 'next/image';
import ItemRating from '@/components/common/ItemRating';
import SearchResultItemLink from '@/components/search_main/SearchResultItemLink';
import IconPageview from 'public/icon/pageview.svg';

const SearchResultItem = ({ _id, imageUrl, title, hashtag, rated, end, view, rating }: SearchItem) => {
  return (
    <SearchResultItemLink _id={_id} end={end}>
      <div className="relative h-100 w-100 shrink-0">
        <Image fill sizes="100px" src={imageUrl || DEFAULT_IMAGE} alt="" className="rounded-sm object-cover" aria-hidden={true} />
      </div>
      <div className="flex h-100 flex-grow justify-between gap-12 py-12">
        <ItemTitle title={title.length > 12 ? title.slice(0, 12) + '...' : title} hashtag={hashtag} />
        <div className="flex w-48 shrink-0 flex-col items-center text-12 font-bold">
          {view ? (
            <>
              <IconPageview />
              <span>{view}</span>
            </>
          ) : (
            <RatingChecker rating={rating} rated={rated} />
          )}
        </div>
      </div>
      {end && <p className="absolute left-32 text-18 font-bold">판매종료</p>}
    </SearchResultItemLink>
  );
};
export default SearchResultItem;

const ItemTitle = ({ title, hashtag = [] }: Pick<SearchItem, 'title' | 'hashtag'>) => {
  const tags = hashtag.reduce((acc, cur) => acc + ' ' + cur, '');
  return (
    <div className="flex h-full flex-col justify-between">
      <h2 className="text-18 font-bold">{title}</h2>
      {!!hashtag && (
        <div className="text-12" role="group" aria-label="해시태그">
          {tags.length > 25 ? tags.slice(0, 25) + '...' : tags}
        </div>
      )}
    </div>
  );
};

const RatingChecker = ({ rated, rating }: Pick<SearchItem, 'rated' | 'rating'>) => {
  return rating?.length ? (
    <ItemRating rating={rated} />
  ) : (
    <p className="text-10 text-center font-medium text-black-100">
      평가하기
      <br />
      <span className="text-12">→</span>
    </p>
  );
};
