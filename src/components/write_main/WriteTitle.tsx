import { ChangeEvent, memo } from 'react';
import WriteFormRow from '@/components/write_main/WriteFormRow';

interface Props {
  title: string;
  setTitle: (title: string) => void;
}

const WriteTitle = memo(function WriteTitle({ title, setTitle }: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setTitle(newValue);
  };

  return (
    <WriteFormRow label="문서명" required={!title}>
      <input
        value={title}
        onChange={handleChange}
        placeholder="입력해 주세요."
        className="h-max w-full border-b border-black-60 bg-transparent font-bold focus:outline-none"
      />
    </WriteFormRow>
  );
});
export default WriteTitle;
