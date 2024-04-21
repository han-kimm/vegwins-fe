import { CATEGORY, CATEGORY_KEY } from '@/constants/category';
import { SetSubmitData } from '@/constants/default';
import { memo } from 'react';
import IconBase from '@/components/common/IconBase';
import WriteFormRow from '@/components/write_main/WriteFormRow';

interface Props {
  category: string[];
  setCategory: SetSubmitData;
}

const WriteCategory = memo(function WriteCategory({ category, setCategory }: Props) {
  const handleClick = (isSelected: boolean, key: string) => {
    if (isSelected) {
      setCategory((prev) => ({ ...prev, category: prev.category.filter((v) => v !== key) }));
      return;
    }
    setCategory((prev) => ({ ...prev, category: [...prev.category, key] }));
  };
  return (
    <WriteFormRow label="카테고리" required={!category.length}>
      <div className="flex flex-wrap gap-8">
        {CATEGORY_KEY.slice(2).map((key, i) => {
          const isSelected = category?.includes(key);
          return (
            <button
              type="button"
              onClick={() => handleClick(isSelected, key)}
              key={i}
              className={`flex-center transform-active w-60 shrink-0 flex-col transition duration-300 ${isSelected ? 'text-black-100' : 'text-black-40'}`}
            >
              <IconBase render={CATEGORY[key]} name={key} fontSize={12} />
            </button>
          );
        })}
      </div>
    </WriteFormRow>
  );
});
export default WriteCategory;
