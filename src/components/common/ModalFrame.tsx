import useModalScroll from '@/hooks/useModalScroll';
import Image from 'next/image';
import { ReactNode } from 'react';
import ModalPortal from '@/components/common/ModalPortal';

interface ModalFrameProps {
  children: ReactNode;
  closeModal: () => void;
}

const ModalFrame = ({ children, closeModal }: ModalFrameProps) => {
  useModalScroll();
  return (
    <ModalPortal>
      <div
        onClick={closeModal}
        className="fixed left-0 top-0 z-20 flex h-screen w-full items-center justify-center bg-gray-900 bg-opacity-70 text-center"
      >
        <div
          className="relative mx-32 flex min-h-max w-4/5 min-w-300 max-w-400 flex-col gap-20 rounded-md bg-white p-20"
          onClick={(event) => event.stopPropagation()}
          role="alert"
          aria-label="팝업창"
        >
          {children}
          <button onClick={closeModal} className="absolute right-24 top-24">
            <Image width={18} height={18} src="/icon/cancel.svg" alt="팝업창 종료" />
          </button>
        </div>
      </div>
    </ModalPortal>
  );
};
export default ModalFrame;
