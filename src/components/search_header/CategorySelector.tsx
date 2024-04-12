'use client';

import { CATEGORY_KEY } from '@/constants/category';
import { SP_CATEGORY } from '@/constants/sessionStorage';
import useChangeQuery from '@/hooks/useSavePath';
import { Suspense, useState } from 'react';
import CategorySelectorItem from '@/components/search_header/CategorySelectorItem';

const CategorySelector = () => {
  return (
    <Suspense>
      <CategorySelect />
    </Suspense>
  );
};
export default CategorySelector;

const CategorySelect = () => {
  const { searchParams } = useChangeQuery();
  const [selected, setSelected] = useState(() => searchParams.get(SP_CATEGORY) ?? '');

  return (
    <section
      className="relative flex h-96 gap-12 [&>div]:rounded-md [&>div]:bg-white [&>div]:p-12 [&>div]:shadow-md"
      role="group"
      aria-label="검색 결과를 필터링하는 카테고리 선택"
    >
      <div className="transform-active">
        {selected ? <CategorySelectorItem name={selected} setSelected={setSelected} isSelected /> : <NoSelected />}
      </div>
      <div className="flex overflow-scroll scroll-smooth">
        {CATEGORY_KEY.filter((key) => key !== selected).map((key) => (
          <CategorySelectorItem key={key} name={key} setSelected={setSelected} />
        ))}
      </div>
    </section>
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
