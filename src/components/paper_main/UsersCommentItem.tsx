import useDeleteComment from '@/hooks/useDeleteComment';
import { Comment } from '@/types/data';
import { Session } from '@/types/session';
import { timeDiff } from '@/utils/timeDiff';
import { Dispatch, SetStateAction, useMemo } from 'react';
import IconPencil from 'public/icon/pencil.svg';

interface Props {
  comment: Comment;
  session: Session;
  setMyComment?: Dispatch<SetStateAction<Comment[]>>;
}

const UsersCommentItem = ({ comment, session, setMyComment }: Props) => {
  const { ButtonDelete, ModalDelete } = useDeleteComment({
    body: { deleteId: comment._id },
    onSuccess: () => setMyComment?.((prev) => prev.filter((c) => c._id !== comment._id)),
  });

  const isCommenter = useMemo(() => session?.nickname === comment.commenter.nickname, []);

  if (!comment) {
    return null;
  }

  return (
    <div className="flex flex-col">
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
      <ModalDelete />
    </div>
  );
};
export default UsersCommentItem;
