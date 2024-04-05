'use client';

import { CATEGORY, CATEGORY_KEY } from '@/constants/category';
import { useState } from 'react';
import Icon from '@/components/Icon';

const CategorySelector = () => {
  const [selected, setSelected] = useState('');
  const toggleSelected = (key: string) => {
    if (selected === key) {
      setSelected('');
      return;
    }
    setSelected(key);
  };

  return (
    <section className="relative flex h-96 gap-12 overflow-scroll scroll-smooth rounded-md bg-white p-12 shadow-md" role="group" aria-label="검색 결과를 필터링하는 카테고리 선택">
      {CATEGORY_KEY.map((key) => (
        <button
          onClick={() => toggleSelected(key)}
          key={key}
          className={`flex-center w-60 shrink-0 flex-col transition-all duration-500 ${key === selected ? 'text-black-100' : 'text-black-40'}`}
        >
          <Icon obj={CATEGORY} objKey={key} fontSize={12} />
          {key === selected && <div className="mt-8 h-4 w-4/5 rounded-full bg-black-100" />}
        </button>
      ))}
    </section>
  );
};
export default CategorySelector;
