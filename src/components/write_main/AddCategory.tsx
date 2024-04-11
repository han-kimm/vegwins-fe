import { CATEGORY, CATEGORY_KEY } from '@/constants/category';
import { Dispatch, SetStateAction, memo } from 'react';
import BaseIcon from '@/components/common/BaseIcon';

interface Props {
  category: string[];
  setCategory: Dispatch<SetStateAction<string[]>>;
}
const AddCategory = memo(function AddCategory({ category, setCategory }: Props) {
  const handleClick = (isSelected: boolean, key: string) => {
    if (isSelected) {
      setCategory((prev) => prev.filter((v) => v !== key));
      return;
    }
    setCategory((prev) => [...prev, key]);
  };
  return (
    <div className="flex flex-wrap gap-8">
      {CATEGORY_KEY.map((key, i) => {
        const isSelected = category?.includes(key);
        return (
          <button
            type="button"
            onClick={() => handleClick(isSelected, key)}
            key={i}
            className={`flex-center w-60 shrink-0 flex-col transition duration-300 ${isSelected ? 'text-black-100' : 'text-black-40'}`}
          >
            <BaseIcon render={CATEGORY[key]} name={key} fontSize={12} />
          </button>
        );
      })}
    </div>
  );
});
export default AddCategory;
