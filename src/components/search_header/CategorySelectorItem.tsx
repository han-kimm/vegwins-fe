'use client';

import { CATEGORY } from '@/constants/category';
import { QUERY } from '@/constants/sessionStorage';
import { getSessionStorage, setSessionStorage } from '@/utils/sessionStorage';
import BaseIcon from '@/components/common/BaseIcon';

interface Props {
  name: string;
  isSelected?: boolean;
  setSelected: (name: string) => void;
}

const CategorySelectorItem = ({ name, isSelected, setSelected }: Props) => {
  const handleClick = () => {
    const updatedValue = isSelected ? '' : name;

    const previousQuery = getSessionStorage(QUERY);
    setSessionStorage({ key: QUERY, value: { ...previousQuery, c: updatedValue } });
    setSelected(updatedValue);
  };
  return (
    <button onClick={handleClick} className={`flex-center w-60 shrink-0 flex-col ${isSelected ? 'text-black-100' : 'text-black-40'}`}>
      <BaseIcon render={CATEGORY[name]} name={name} fontSize={12} />
      {isSelected && <span className="font-bold text-sky">초기화 하기</span>}
    </button>
  );
};
export default CategorySelectorItem;
