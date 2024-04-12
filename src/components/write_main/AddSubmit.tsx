import { memo, useRef, useState } from 'react';
import AddSubmitModal from '@/components/write_main/AddSubmitModal';
import IconUpload from 'public/icon/upload.svg';

interface Props {
  required: boolean;
}

const AddSubmit = memo(function AddSubmit({ required }: Props) {
  const [modalOpen, setModalOpen] = useState(false);
  const buttenRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <button
        type="button"
        onClick={() => setModalOpen(true)}
        disabled={!required}
        className={`${required ? 'transform-active border-black-80 bg-black-100 text-white' : 'border-black-40 text-black-40'} flex-center mt-20 grow gap-12 rounded-sm border py-12 text-18 font-medium`}
      >
        <IconUpload />
        작성 완료
      </button>
      <button ref={buttenRef} hidden />
      {modalOpen && <AddSubmitModal closeModal={() => setModalOpen(false)} buttonRef={buttenRef} />}
    </>
  );
});
export default AddSubmit;
