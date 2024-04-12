import { ChangeEvent, RefObject, useState } from 'react';
import ModalFrame from '@/components/common/ModalFrame';
import IconUpload from 'public/icon/upload.svg';

interface Props {
  closeModal: () => void;
  buttonRef: RefObject<HTMLButtonElement>;
}

const WriteSubmitModal = ({ closeModal, buttonRef }: Props) => {
  const [signed, setSigned] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setSigned(e.target.checked);
  return (
    <ModalFrame closeModal={closeModal}>
      <h2 className="text-18 font-bold">완료 전 확인하기</h2>
      <button onClick={() => setSigned(!signed)} className="mt-20 flex gap-8">
        <input
          checked={signed}
          onChange={handleChange}
          type="checkbox"
          className="mt-[0.5rem] h-16 w-16 shrink-0 rounded-lg accent-black-80"
          tabIndex={-1}
          aria-hidden
        />
        <p className="text-start text-16 font-medium">
          부적절한 내용
          <strong>(논비건, 욕설, 혐오발언)</strong>은 경고 없이 삭제됩니다.
        </p>
      </button>
      <button
        onClick={() => buttonRef.current?.click()}
        disabled={!signed}
        className={`${signed ? 'transform-active border-black-80 bg-black-100 text-white' : 'border-black-40 text-black-40'} flex-center mt-auto gap-12 rounded-sm border py-12 text-18 font-medium`}
      >
        <IconUpload />
        작성 완료
      </button>
    </ModalFrame>
  );
};
export default WriteSubmitModal;
