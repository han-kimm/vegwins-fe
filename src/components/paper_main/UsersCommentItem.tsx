import { Comment } from '@/types/data';
import { Session } from '@/types/session';
import ajax from '@/utils/fetching';
import { timeDiff } from '@/utils/timeDiff';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction, useCallback, useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import ModalFrame from '@/components/common/ModalFrame';
import ModalPortal from '@/components/common/ModalPortal';
import IconReply from 'public/icon/reply.svg';

interface Props {
  comment: Comment;
  session: Session;
  recommentId?: string;
  setRecomment?: Dispatch<SetStateAction<Comment | null>>;
  my?: boolean;
  setMyComment?: Dispatch<SetStateAction<Comment[]>>;
}

const UsersCommentItem = ({ comment, session, recommentId, setRecomment, my, setMyComment }: Props) => {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();
  const isCommenter = useMemo(() => session?.nickname === comment.commenter.nickname, []);
  const isSelected = comment._id === recommentId;
  const handleClick = () => setRecomment?.(isSelected ? null : comment);

  const deleteByClick = useCallback(async () => {
    try {
      const res = await ajax.delete({ path: '/user/comment', body: { deleteId: comment._id } });
      if (res.success) {
        setModalOpen(false);
        setMyComment?.((prev) => prev.filter((v) => v._id !== comment._id));
        toast.success('댓글 삭제 완료');
        router.refresh();
      }
    } catch (e) {
      console.error(e);
      toast.error('다시 시도해 주십시오.');
    }
  }, []);

  if (!comment) {
    return null;
  }

  return (
    <div className="flex flex-col border-b border-black-20 pb-12">
      <div className="flex items-center gap-8">
        <h3 className="text-center text-16 font-bold">{comment.commenter?.nickname}</h3>
        <span className="text-12 text-black-60">{timeDiff(comment.createdAt)}</span>
        <button onClick={handleClick} disabled={!session} className={`${isSelected && 'text-sky'} text-12 font-bold`}>
          {my || (isSelected ? '답글 취소' : '답글 달기')}
        </button>
        {isCommenter && (
          <button onClick={() => setModalOpen(true)} className="ml-auto text-12">
            삭제하기
          </button>
        )}
      </div>
      <p className="mb-8 whitespace-pre-wrap text-16">{comment.content}</p>
      {open && comment.recomment.map((r) => <Recomment key={r._id} session={session} comment={r} originId={comment._id} />)}
      {my ||
        (!!comment.recomment.length && (
          <button onClick={() => setOpen(!open)} className="ml-auto w-max text-12 font-bold text-sky" aria-label="답글 보기">
            {open ? '답글 접어두기' : `${comment.recomment.length}개의 답글 더 보기`}
          </button>
        ))}
      {modalOpen && (
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
      )}
    </div>
  );
};
export default UsersCommentItem;

const Recomment = ({ session, comment, originId }: { session: Session; comment: Comment; originId: string }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const isCommenter = useMemo(() => session?.nickname === comment.commenter.nickname, []);
  const router = useRouter();

  const deleteByClick = useCallback(async () => {
    try {
      const res = await ajax.delete({ path: '/user/comment', body: { deleteId: comment._id, originId } });
      if (res.success) {
        setModalOpen(false);
        toast.success('댓글 삭제 완료');
        router.refresh();
      }
    } catch (e) {
      console.error(e);
      toast.error('다시 시도해 주십시오.');
    }
  }, []);
  return (
    <div className=" flex animate-fadeIn gap-4 py-8">
      <IconReply />
      <div className="flex w-full flex-col">
        <div className="flex items-center gap-8">
          <h3 className="text-center text-14 font-bold">{comment.commenter?.nickname}</h3>
          <span className="text-black-60">{timeDiff(comment.createdAt)}</span>
          {isCommenter && (
            <button onClick={() => setModalOpen(true)} className="ml-auto text-12">
              삭제하기
            </button>
          )}
        </div>
        <p className="mb-4 whitespace-pre-wrap text-14">{comment.content}</p>
      </div>
      {modalOpen && (
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
      )}
    </div>
  );
};
