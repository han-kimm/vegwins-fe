import useModalScroll from '@/hooks/useModalScroll';
import { ChangeEvent, RefObject, useState } from 'react';
import ModalFrame from '@/components/common/ModalFrame';
import IconUpload from 'public/icon/upload.svg';

interface Props {
  closeModal: () => void;
  buttonRef: RefObject<HTMLButtonElement>;
}

const WriteSubmitModal = ({ closeModal, buttonRef }: Props) => {
  useModalScroll();
  const [signed, setSigned] = useState({ sensored: false, edited: false });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setSigned((prev) => ({ ...prev, [e.target.name]: e.target.checked }));
  return (
    <ModalFrame closeModal={closeModal}>
      <h2 className="text-18 font-bold">완료 전 확인하기</h2>
      <button onClick={() => setSigned((prev) => ({ ...prev, sensored: !prev.sensored }))} className="my-20 flex gap-8">
        <input
          name="sensored"
          checked={signed.sensored}
          onChange={handleChange}
          type="checkbox"
          className="transform-active mt-[0.5rem] h-16 w-16 shrink-0 rounded-lg accent-black-80"
          tabIndex={-1}
          aria-hidden
        />
        <p className="text-start text-16 font-medium">
          부적절한 내용
          <strong>(논비건, 욕설, 혐오발언)</strong>은 제보일로부터 3일 동안 해당 문서의 댓글에서 의견을 받은 뒤, 삭제 여부가 결정됩니다.
        </p>
      </button>
      <button onClick={() => setSigned((prev) => ({ ...prev, edited: !prev.edited }))} className="my-20 flex gap-8">
        <input
          name="edited"
          checked={signed.edited}
          onChange={handleChange}
          type="checkbox"
          className="transform-active mt-[0.5rem] h-16 w-16 shrink-0 rounded-lg accent-black-80"
          tabIndex={-1}
          aria-hidden
        />
        <p className="text-start text-16 font-medium">
          <strong>이미지 추가, 공식 명칭 수정, 이벤트 해시태그 추가</strong>등의 수정이 이루어질 수 있습니다.
        </p>
      </button>
      <button
        onClick={() => buttonRef.current?.click()}
        disabled={!signed.sensored || !signed.edited}
        className={`${signed.sensored && signed.edited ? 'transform-active border-black-80 bg-black-100 text-white' : 'border-black-40 text-black-40'} flex-center mt-auto gap-12 rounded-sm border py-12 text-18 font-medium`}
      >
        <IconUpload />
        작성 완료
      </button>
    </ModalFrame>
  );
};
export default WriteSubmitModal;
