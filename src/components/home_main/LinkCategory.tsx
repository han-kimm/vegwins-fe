'use client';

import { CATEGORY, CATEGORY_KEY } from '@/constants/category';
import { PREVIOUS_PATH } from '@/constants/default';
import { useDraggable } from '@/hooks/useDragScroll';
import { setSessionStorage } from '@/utils/browserStorage';
import Link from 'next/link';
import { useRef } from 'react';
import IconBase from '@/components/common/IconBase';

const LinkCategory = () => {
  const dragRef = useRef<HTMLDivElement>(null);
  const handler = useDraggable(dragRef);
  const savePath = (key: string) => {
    setSessionStorage({ key: PREVIOUS_PATH, value: `/search?c=${key}` });
  };
  return (
    <section
      ref={dragRef}
      {...handler}
      className="flex h-120 w-full gap-20 overflow-scroll pt-4"
      role="group"
      aria-label="카테고리에 따른 검색 페이지 이동"
    >
      {CATEGORY_KEY.map((key) => (
        <Link
          key={key}
          href={`/search?c=${key}`}
          onClick={() => savePath(key)}
          className={`flex-center transform-active h-100 w-100 shrink-0 flex-col gap-8 rounded-sm bg-white py-8 shadow-sm first:ml-40 last:mr-40`}
          aria-label={`${key} 카테고리 검색 페이지로 이동`}
        >
          <IconBase render={CATEGORY[key]} name={key} />
        </Link>
      ))}
    </section>
  );
};
export default LinkCategory;
