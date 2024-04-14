import dynamic from 'next/dynamic';
import { memo, useRef, useState } from 'react';
import IconUpload from 'public/icon/upload.svg';

const WriteSubmitModal = dynamic(() => import('@/components/write_main/WriteSubmitModal'), { ssr: false });

interface Props {
  required: boolean;
}

const WriteSubmit = memo(function WriteSubmit({ required }: Props) {
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
      {modalOpen && <WriteSubmitModal closeModal={() => setModalOpen(false)} buttonRef={buttenRef} />}
    </>
  );
});
export default WriteSubmit;
