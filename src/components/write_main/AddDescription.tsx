import { ChangeEvent, memo } from 'react';
import AddFormRow from '@/components/write_main/AddFormRow';

interface Props {
  description: string;
  setDescription: (description: string) => void;
}

const AddDescription = memo(function AddDescription({ description, setDescription }: Props) {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setDescription(newValue);
  };

  return (
    <AddFormRow label="설명" required={!description}>
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
            예시 2. 비거니즘에 대해서 이야기하는 책입니다. 저자는 피터 싱어입니다.
          </p>
        )}
      </div>
    </AddFormRow>
  );
});
export default AddDescription;
