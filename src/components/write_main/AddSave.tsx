import { WRITE_SAVE } from '@/constants/sessionStorage';
import { getSessionStorage } from '@/utils/sessionStorage';
import Image from 'next/image';
import { memo } from 'react';

const BUTTON_TITLE = ['임시 저장', '불러 오기'];

interface Props {
  handleSave: () => void;
  handleRecall: () => void;
}

const AddSave = memo(function AddSave({ handleSave, handleRecall }: Props) {
  const isSave = getSessionStorage(WRITE_SAVE);
  return (
    <div className="flex gap-20 text-16">
      {BUTTON_TITLE.map((title, i) => (
        <button
          onClick={i ? handleRecall : handleSave}
          key={title}
          className={`${i && isSave ? 'border-black-60 text-black-60' : 'border-black-80'} flex-center transform-active grow gap-12 rounded-sm border py-12 font-bold`}
        >
          <Image width={24} height={24} src={`/icon/${i ? 'reset' : 'save'}.svg`} alt="" aria-hidden />
          {title}
        </button>
      ))}
    </div>
  );
});
export default AddSave;
