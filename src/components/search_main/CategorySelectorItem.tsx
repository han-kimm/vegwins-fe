'use client';

import { CATEGORY } from '@/constants/category';
import { SP_CATEGORY } from '@/constants/searchCookie';
import useSetSearch from '@/hooks/useSetSearch';
import BaseIcon from '@/components/common/BaseIcon';

interface Props {
  name: string;
  isSelected?: boolean;
}

const CategorySelectorItem = ({ name, isSelected }: Props) => {
  const { setCookieRouting } = useSetSearch();

  const changeSearchParams = () => {
    setCookieRouting(SP_CATEGORY, isSelected ? '' : name);
  };
  return (
    <button onClick={changeSearchParams} className={`flex-center w-60 shrink-0 flex-col ${isSelected ? 'text-black-100' : 'text-black-40'}`}>
      <BaseIcon render={CATEGORY[name]} name={name} fontSize={12} />
      {isSelected && <span className="font-bold text-sky">초기화 하기</span>}
    </button>
  );
};
export default CategorySelectorItem;
