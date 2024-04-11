import { ChangeEvent, memo } from 'react';
import AddFormRow from '@/components/write_main/AddFormRow';

interface Props {
  title: string;
  setTitle: (title: string) => void;
}

const AddTitle = memo(function AddTitle({ title, setTitle }: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setTitle(newValue);
  };

  return (
    <AddFormRow label="문서명" required={!title}>
      <input
        value={title}
        onChange={handleChange}
        placeholder="입력해 주세요."
        className="h-max w-full border-b border-black-60 bg-transparent font-bold focus:outline-none"
      />
    </AddFormRow>
  );
});
export default AddTitle;
