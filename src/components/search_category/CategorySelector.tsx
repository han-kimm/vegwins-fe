import { CATEGORY_KEY } from '@/constants/category';
import CategorySelectorItem from '@/components/search_category/CategorySelectorItem';

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
      <div>{selected ? <CategorySelectorItem key={selected} name={selected} isSelected /> : <NoSelected />}</div>
      <div className="flex overflow-scroll scroll-smooth">
        {CATEGORY_KEY.filter((key) => key !== selected).map((key) => (
          <CategorySelectorItem key={key} name={key} />
        ))}
      </div>
    </section>
  );
};
export default CategorySelector;

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
