import { popup } from '@/lib/googleAuth';
import ModalFrame from '@/components/common/ModalFrame';
import ModalPortal from '@/components/common/ModalPortal';
import IconGoogle from 'public/icon/google.svg';

interface Props {
  closeModal: () => void;
}

const AuthModal = ({ closeModal }: Props) => {
  return (
    <ModalPortal>
      <ModalFrame closeModal={closeModal}>
        <h2 className="text-18 font-bold">로그인</h2>
        <button
          onClick={popup}
          className="flex-center transform-active my-auto h-40 gap-12 rounded-full border border-black-20 bg-black-0 text-14 font-medium"
        >
          <IconGoogle />
          구글 계정으로 로그인
        </button>
      </ModalFrame>
    </ModalPortal>
  );
};
export default AuthModal;
