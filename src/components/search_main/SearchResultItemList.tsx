import { SearchItem } from '@/types/data';
import { Fragment } from 'react';
import SearchResultItem from '@/components/search_main/SearchResultItem';

interface Props {
  data: SearchItem[];
  my?: boolean;
}

const SearchResultItemList = ({ data, my = false }: Props) => {
  return (
    <div className={`${my ? '' : 'rounded-md px-16 shadow-lg'} flex w-full flex-col bg-white`} role="group">
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
