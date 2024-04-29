import { SetSubmitData } from '@/constants/default';
import useDebounce from '@/hooks/useDebounce';
import useUncontrolInput from '@/hooks/useUncontrolInput';
import { memo } from 'react';
import WriteFormRow from '@/components/write_main/WriteFormRow';

interface Props {
  description: string;
  setDescription: SetSubmitData;
}

const WriteDescription = memo(function WriteDescription({ description, setDescription }: Props) {
  const ref = useUncontrolInput<HTMLTextAreaElement>({ syncState: description });
  const handleChange = useDebounce(() => {
    setDescription((prev) => ({ ...prev, description: ref.current?.value! }));
  }, 500);

  return (
    <WriteFormRow label="설명" required={!description}>
      <textarea
        ref={ref}
        defaultValue={description}
        onChange={handleChange}
        placeholder="비건, 비거니즘에 해당하는 이유, 근거를 작성해 주세요."
        className="h-200 w-full rounded-sm border border-black-60 bg-transparent p-8 text-14 font-bold focus:outline-none"
      />
    </WriteFormRow>
  );
});
export default WriteDescription;
