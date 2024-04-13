import { SetSubmitData } from '@/constants/default';
import useDebounce from '@/hooks/useDebounce';
import { FocusEvent, memo, useRef } from 'react';
import WriteFormRow from '@/components/write_main/WriteFormRow';

interface Props {
  setTitle: SetSubmitData;
}
const WriteTitle = memo(function WriteTitle({ setTitle }: Props) {
  const ref = useRef<HTMLInputElement>(null);
  const handleChange = useDebounce(() => {
    setTitle((prev) => ({ ...prev, title: ref.current?.value! }));
  }, 500);

  return (
    <WriteFormRow label="문서명" required={!ref.current?.value}>
      <input
        ref={ref}
        onChange={handleChange}
        placeholder="입력해 주세요."
        className="h-max w-full border-b border-black-60 bg-transparent font-bold focus:outline-none"
      />
    </WriteFormRow>
  );
});
export default WriteTitle;
