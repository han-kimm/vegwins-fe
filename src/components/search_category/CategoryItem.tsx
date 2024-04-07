'use client';

import { CATEGORY } from '@/constants/category';
import useSetSearch from '@/hooks/useSetSearch';
import Link from 'next/link';
import Icon from '@/components/Icon';

interface Props {
  name: string;
  isSelected?: boolean;
}

const CategoryItem = ({ name, isSelected }: Props) => {
  const { pathname, createQueryString } = useSetSearch();

  return (
    <Link
      href={pathname + '?' + createQueryString('category', isSelected ? '' : name)}
      className={`flex-center w-60 shrink-0 flex-col ${isSelected ? 'text-black-100' : 'text-black-40'}`}
    >
      <Icon render={CATEGORY[name]} name={name} fontSize={12} />
      {isSelected && <span className="font-bold text-sky">초기화 하기</span>}
    </Link>
  );
};
export default CategoryItem;
