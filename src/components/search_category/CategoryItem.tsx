'use client';

import { CATEGORY } from '@/constants/category';
import useSetSearch from '@/hooks/useSetSearch';
import { setCookie } from '@/utils/cookie';
import Icon from '@/components/Icon';

interface Props {
  name: string;
  isSelected?: boolean;
}

const CategoryItem = ({ name, isSelected }: Props) => {
  const { router, pathname, createQueryString } = useSetSearch();

  const changeSearchParams = () => {
    const newParams = createQueryString('category', isSelected ? '' : name);
    const newPath = pathname + '?' + newParams;
    setCookie({ key: 'sp', value: newPath });
    router.push(newPath);
  };
  return (
    <button onClick={changeSearchParams} className={`flex-center w-60 shrink-0 flex-col ${isSelected ? 'text-black-100' : 'text-black-40'}`}>
      <Icon render={CATEGORY[name]} name={name} fontSize={12} />
      {isSelected && <span className="font-bold text-sky">초기화 하기</span>}
    </button>
  );
};
export default CategoryItem;
