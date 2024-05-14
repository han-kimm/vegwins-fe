'use client';

import useUncontrolInput from '@/hooks/useUncontrolInput';
import { deleteData } from '@/utils/fetching';
import { refreshTag } from '@/utils/revalidate';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import ModalFrame from '@/components/common/ModalFrame';
import ModalPortal from '@/components/common/ModalPortal';

interface Props {
  title: string;
  paperId: string;
}
const ButtonDeletePaper = ({ title, paperId }: Props) => {
  const [open, setOpen] = useState(false);
  const { ref: inputRef, refCallback } = useUncontrolInput<HTMLInputElement>({ syncState: '' });
  const router = useRouter();

  const deleteByClick = async () => {
    if (inputRef.current?.value !== title) {
      return;
    }
    try {
      await deleteData({ path: `/paper/${paperId}` });
      toast.success('삭제 완료');
      refreshTag(['search', 'myPaper', 'myRating']);
      router.push('/');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <button
      onClick={() => setOpen(true)}
      className="flex-center gap-8 rounded-sm border border-black-100 px-8 text-16 font-medium"
      aria-label="문서 삭제"
    >
      <div className="relative h-24 w-24">
        <Image fill src="/icon/delete.svg" alt="" aria-hidden />
      </div>
      삭제하기
      {open && (
        <ModalPortal>
          <ModalFrame closeModal={() => setOpen(false)}>
            <div className="text-14">
              <p className="text-18 font-bold">정말로 삭제하시겠습니까?</p>
              <span>삭제 후, 복구가 불가능합니다.</span>
              <br />
              <strong>{`"${title}"`}</strong>
              <span>입력해주십시오.</span>
            </div>
            <input ref={refCallback} placeholder={title} className="w-full rounded-sm border border-black-100 px-12 py-4 text-18 font-bold" />
            <div className="mx-auto flex gap-40">
              <button onClick={deleteByClick} className="transform-active w-100 rounded-sm border border-black-100 p-8 text-16 font-bold">
                삭제하기
              </button>
              <button onClick={() => setOpen(false)} className="transform-active w-100 rounded-sm bg-black-100 p-8 text-16 text-white">
                취소하기
              </button>
            </div>
          </ModalFrame>
        </ModalPortal>
      )}
    </button>
  );
};
export default ButtonDeletePaper;
