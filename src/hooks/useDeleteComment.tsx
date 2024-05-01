import ajax from '@/utils/fetching';
import { refreshTag } from '@/utils/revalidate';
import { useParams } from 'next/navigation';
import { useCallback, useState } from 'react';
import toast from 'react-hot-toast';
import ModalFrame from '@/components/common/ModalFrame';
import ModalPortal from '@/components/common/ModalPortal';
import IconDelete from 'public/icon/delete.svg';

interface Props {
  body: { deleteId: string; originId?: string };
  onSuccess?: () => void;
}

const useDeleteComment = ({ body, onSuccess }: Props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { paperId } = useParams();

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };
  const deleteByClick = useCallback(async () => {
    try {
      const res = await ajax.delete({ path: `/paper/${paperId}/comment`, body });
      if (res.success) {
        setModalOpen(false);
        onSuccess?.();
        toast.success('댓글 삭제 완료');
        refreshTag(`${paperId}/comment`);
      }
    } catch (e) {
      console.error(e);
      toast.error('다시 시도해 주십시오.');
    }
  }, []);

  const ModalDelete = useCallback(
    () =>
      modalOpen && (
        <ModalPortal>
          <ModalFrame closeModal={() => setModalOpen(false)}>
            <p className="mb-32 text-16 font-bold">정말로 삭제하시겠습니까?</p>
            <div className="mx-auto flex gap-40">
              <button onClick={deleteByClick} className="transform-active w-100 rounded-sm bg-black-100 p-8 text-16 text-white">
                예
              </button>
              <button onClick={() => setModalOpen(false)} className="transform-active w-100 rounded-sm border border-black-100 p-8 text-16">
                아니오
              </button>
            </div>
          </ModalFrame>
        </ModalPortal>
      ),
    [modalOpen],
  );

  const ButtonDelete = useCallback(
    () => (
      <button onClick={toggleModal} className="text-black-60" aria-label="댓글 삭제">
        <IconDelete />
      </button>
    ),
    [],
  );

  return { ButtonDelete, ModalDelete };
};
export default useDeleteComment;
