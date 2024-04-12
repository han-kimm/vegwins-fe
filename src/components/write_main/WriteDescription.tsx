import { SetSubmitData } from '@/constants/default';
import { ChangeEvent, memo } from 'react';
import WriteFormRow from '@/components/write_main/WriteFormRow';

interface Props {
  description: string;
  setDescription: SetSubmitData;
}

const WriteDescription = memo(function WriteDescription({ description, setDescription }: Props) {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newDescription = e.target.value;
    setDescription((prev) => ({ ...prev, description: newDescription }));
  };

  return (
    <WriteFormRow label="설명" required={!description}>
      <div className="relative grow">
        <textarea
          value={description}
          onChange={handleChange}
          className="h-200 w-full rounded-sm border border-black-60 bg-transparent p-8 text-14 font-bold focus:outline-none"
        />
        {!description && (
          <p className="pointer-events-none absolute top-0 flex p-8 text-14 font-bold text-black-40" aria-label="설명 예시">
            비건, 비거니즘에 해당하는 이유, 근거를 작성해 주세요.
            <br />
            <br />
            예시 1. 밀으로 만들어진 비건 과자입니다. **팜유 주의** <br />
          </p>
        )}
      </div>
    </WriteFormRow>
  );
});
export default WriteDescription;
