import useDeleteComment from '@/hooks/useDeleteComment';
import { Comment } from '@/types/data';
import { Session } from '@/types/session';
import ajax from '@/utils/fetching';
import { timeDiff } from '@/utils/timeDiff';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction, useCallback, useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import ModalFrame from '@/components/common/ModalFrame';
import ModalPortal from '@/components/common/ModalPortal';
import IconPencil from 'public/icon/pencil.svg';
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
  const { ButtonDelete, ModalDelete } = useDeleteComment({
    body: { deleteId: comment._id },
    onSuccess: () => setMyComment?.((prev) => prev.filter((c) => c._id !== comment._id)),
  });

  const isCommenter = useMemo(() => session?.nickname === comment.commenter.nickname, []);
  const isSelected = comment._id === recommentId;
  const handleClick = () => setRecomment?.(isSelected ? null : comment);

  if (!comment) {
    return null;
  }

  return (
    <div className="flex flex-col border-b border-black-20 pb-12">
      <div className="flex items-center gap-8">
        <h3 className="text-center text-16 font-bold">{comment.commenter?.nickname}</h3>
        <span className="text-12 text-black-60">{timeDiff(comment.createdAt)}</span>
        {isCommenter && (
          <>
            <button className="ml-auto text-black-60" aria-label="댓글 편집">
              <IconPencil />
            </button>
            <ButtonDelete />
          </>
        )}
      </div>
      <p className="mb-8 whitespace-pre-wrap text-16">{comment.content}</p>
      {open && comment.recomment.map((r) => <Recomment key={r._id} session={session} comment={r} originId={comment._id} />)}
      {my || (
        <div className="flex justify-between">
          <button onClick={handleClick} disabled={!session} className="text-12 font-bold text-sky" aria-label="대댓글 달기">
            {isSelected ? '답글 취소' : '답글 달기'}
          </button>
          {!!comment.recomment.length && (
            <button onClick={() => setOpen(!open)} className="ml-auto w-max text-12 font-bold text-sky" aria-label="답글 보기">
              {open ? '답글 접어두기' : `${comment.recomment.length}개의 답글 더 보기`}
            </button>
          )}
        </div>
      )}
      <ModalDelete />
    </div>
  );
};
export default UsersCommentItem;

const Recomment = ({ session, comment, originId }: { session: Session; comment: Comment; originId: string }) => {
  const { ButtonDelete, ModalDelete } = useDeleteComment({ body: { deleteId: comment._id, originId } });
  const isCommenter = useMemo(() => session?.nickname === comment.commenter.nickname, []);
  return (
    <div className=" flex animate-fadeIn gap-4 py-8">
      <IconReply />
      <div className="flex w-full flex-col">
        <div className="flex items-center gap-8">
          <h3 className="text-center text-14 font-bold">{comment.commenter?.nickname}</h3>
          <span className="text-black-60">{timeDiff(comment.createdAt)}</span>
          {isCommenter && <ButtonDelete />}
        </div>
        <p className="mb-4 whitespace-pre-wrap text-14">{comment.content}</p>
      </div>
      <ModalDelete />
    </div>
  );
};
