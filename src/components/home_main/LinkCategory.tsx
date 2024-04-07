import { CATEGORY, CATEGORY_KEY } from '@/constants/category';
import Link from 'next/link';
import BaseIcon from '@/components/common/BaseIcon';

const LinkCategory = () => {
  return (
    <section
      className="flex h-120 w-full scroll-mx-60 gap-20 overflow-scroll scroll-smooth pt-4"
      role="group"
      aria-label="카테고리에 따른 검색 페이지 이동"
    >
      {CATEGORY_KEY.map((key) => (
        <Link
          href={`/search?category=${key}`}
          key={key}
          className={`flex-center h-100 w-100 shrink-0 flex-col gap-8 rounded-sm bg-white py-8 shadow-sm first:ml-40 last:mr-40`}
          aria-label={`${key} 카테고리 검색 페이지로 이동`}
        >
          <BaseIcon render={CATEGORY[key]} name={key} />
        </Link>
      ))}
    </section>
  );
};
export default LinkCategory;
