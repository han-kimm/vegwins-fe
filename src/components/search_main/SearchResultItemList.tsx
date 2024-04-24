import { SearchItem } from '@/types/data';
import { Fragment } from 'react';
import SearchResultItem from '@/components/search_main/SearchResultItem';

interface Props {
  data: SearchItem[];
}

const SearchResultItemList = ({ data }: Props) => {
  return (
    <div className="flex w-full flex-col rounded-md bg-white px-16 shadow-lg" role="group">
      {data.map((data, i) => (
        <Fragment key={data._id}>
          {!i || <hr className="border-black-60" />}
          <SearchResultItem {...data} />
        </Fragment>
      ))}
    </div>
  );
};
export default SearchResultItemList;
