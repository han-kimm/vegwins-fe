'use client';

import { CATEGORY, CATEGORY_KEY } from '@/constants/category';
import { useState } from 'react';
import Icon from '@/components/Icon';

const Category = () => {
  const [selected, setSelected] = useState('');

  return (
    <section className="relative flex h-108 items-start gap-12 overflow-scroll rounded-lg bg-white p-20 shadow-md" role="group" aria-label="검색 결과를 필터링하는 카테고리 선택">
      {CATEGORY_KEY.map((key) => (
        <button onClick={() => setSelected(key)} key={key} className={`flex-center w-80 shrink-0 flex-col ${key === selected ? 'text-black-100' : 'text-black-40'}`}>
          <Icon obj={CATEGORY} objKey={key} />
          {key === selected && <div className="mt-8 h-4 w-4/5 rounded-full bg-black-100" />}
        </button>
      ))}
    </section>
  );
};
export default Category;
