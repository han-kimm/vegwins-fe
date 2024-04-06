'use client';

import { CATEGORY, CATEGORY_KEY } from '@/constants/category';
import Link from 'next/link';
import Icon from '@/components/Icon';

interface Props {
  selected?: string;
}

const CategorySelector = ({ selected }: Props) => {
  return (
    <section
      className="relative flex h-96 gap-12 [&>div]:rounded-md [&>div]:bg-white [&>div]:p-12 [&>div]:shadow-md"
      role="group"
      aria-label="검색 결과를 필터링하는 카테고리 선택"
    >
      <div>{selected ? <CategoryItem key={selected} name={selected} isSelected /> : <NoSelected />}</div>
      <div className="flex overflow-scroll scroll-smooth">
        {CATEGORY_KEY.filter((key) => key !== selected).map((key) => (
          <CategoryItem key={key} name={key} />
        ))}
      </div>
    </section>
  );
};
export default CategorySelector;

interface ItemProps {
  name: string;
  isSelected?: boolean;
}

const CategoryItem = ({ name, isSelected }: ItemProps) => {
  return (
    <Link
      href={isSelected ? '/search' : `/search?category=${name}`}
      className={`flex-center w-60 shrink-0 flex-col ${isSelected ? 'text-black-100' : 'text-black-40'}`}
    >
      <Icon render={CATEGORY[name]} name={name} fontSize={12} />
      {isSelected && <span className="font-bold text-sky">초기화 하기</span>}
    </Link>
  );
};

const NoSelected = () => {
  return (
    <div className="flex-center h-full w-60 text-center text-12 text-black-40">
      <p>
        설정된
        <br />
        카테고리
        <br />
        없음
      </p>
    </div>
  );
};
