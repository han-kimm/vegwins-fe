import useDeleteComment from '@/hooks/useDeleteComment';
import { Comment } from '@/types/data';
import { Session } from '@/types/session';
import { timeDiff } from '@/utils/timeDiff';
import { FunctionComponent, useMemo } from 'react';

interface Props {
  comment: Comment;
  session: Session;
  onSuccess?: () => void;
  isEdited: boolean;
  ButtonEdit: FunctionComponent<{ comment: Comment; isEdited: boolean }>;
}

const UsersCommentItem = ({ comment, session, onSuccess, isEdited, ButtonEdit }: Props) => {
  const { ButtonDelete, ModalDelete } = useDeleteComment({
    body: { deleteId: comment._id },
    onSuccess,
  });

  const isCommenter = useMemo(() => session?.nickname === comment.commenter.nickname, []);

  if (!comment) {
    return null;
  }

  return (
    <div className={`${isEdited ? 'opacity-50' : ''} flex flex-col`}>
      <div className="flex items-center gap-8">
        <h3 className="text-center text-16 font-bold">{comment.commenter?.nickname}</h3>
        <span className="text-12 text-black-60">{timeDiff(comment.createdAt)}</span>
        {isCommenter && (
          <>
            <ButtonEdit comment={comment} isEdited={isEdited} />
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
