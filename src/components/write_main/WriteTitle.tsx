import { SetSubmitData } from '@/constants/default';
import useDebounce from '@/hooks/useDebounce';
import useUncontrolInput from '@/hooks/useUncontrolInput';
import { memo } from 'react';
import WriteFormRow from '@/components/write_main/WriteFormRow';

interface Props {
  title: string;
  setTitle: SetSubmitData;
}
const WriteTitle = memo(function WriteTitle({ title, setTitle }: Props) {
  const { ref, refCallback } = useUncontrolInput<HTMLInputElement>(title);
  const handleChange = useDebounce(() => {
    setTitle((prev) => ({ ...prev, title: ref.current?.value! }));
  }, 500);

  return (
    <WriteFormRow label="문서명" required={!title}>
      <input
        ref={refCallback}
        defaultValue={title}
        onChange={handleChange}
        placeholder="입력해 주세요."
        className="h-max w-full border-b border-black-60 bg-transparent font-bold focus:outline-none"
      />
    </WriteFormRow>
  );
});
export default WriteTitle;
