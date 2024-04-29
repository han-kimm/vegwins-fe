'use client';

import Image from 'next/image';
import { useState } from 'react';
import ModalFrame from '@/components/common/ModalFrame';
import ModalPortal from '@/components/common/ModalPortal';

const ButtonDeletePaper = () => {
  const [open, setOpen] = useState(false);

  return (
    <button className="flex-center gap-8 rounded-sm border border-black-100 px-8 text-16 font-medium" aria-label="문서 삭제">
      <div className="relative h-24 w-24">
        <Image fill src="/icon/delete.svg" alt="" aria-hidden />
      </div>
      삭제하기
      {open && (
        <ModalPortal>
          <ModalFrame closeModal={() => setOpen(false)}></ModalFrame>
        </ModalPortal>
      )}
    </button>
  );
};
export default ButtonDeletePaper;
