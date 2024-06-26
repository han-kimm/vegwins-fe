import { CATEGORY } from '@/constants/category';
import { SP_CATEGORY } from '@/constants/default';
import useChangeQuery from '@/hooks/useChangeQuery';
import IconBase from '@/components/common/IconBase';

interface Props {
  name: string;
  isSelected?: boolean;
  setSelected: (name: string) => void;
}

const CategorySelectorItem = ({ name, isSelected, setSelected }: Props) => {
  const { changeQuery } = useChangeQuery();
  const handleClick = () => {
    const updatedValue = isSelected ? '' : name;
    setSelected(updatedValue);
    changeQuery({ name: SP_CATEGORY, value: updatedValue });
  };
  return (
    <button onClick={handleClick} className={`flex-center w-60 shrink-0 flex-col ${isSelected ? 'text-black-100' : 'text-black-100'}`}>
      <IconBase render={CATEGORY[name]} name={name} fontSize={12} />
      {isSelected && <span className="font-bold text-sky">초기화 하기</span>}
    </button>
  );
};
export default CategorySelectorItem;
