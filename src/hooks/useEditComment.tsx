import { Comment, TargetComment } from '@/types/data';
import { useCallback, useState } from 'react';
import IconPencil from 'public/icon/pencil.svg';

const useTargetComment = () => {
  const [targetComment, setTargetComment] = useState<TargetComment>();

  const setter = useCallback(
    ({ status, comment }: TargetComment) =>
      setTargetComment((prev) =>
        prev?.status === status ? (prev.comment._id === comment._id ? undefined : { ...prev, comment }) : { status, comment },
      ),
    [],
  );
  const setRecomment = useCallback(
    (comment: Comment) => () => {
      setter({ status: 'recomment', comment });
    },
    [],
  );

  const setEditComment = useCallback(
    (comment: Comment) => () => {
      setter({ status: 'edit', comment });
    },
    [],
  );

  const ButtonEdit = useCallback(
    ({ comment, isEdited }: { comment: Comment; isEdited: boolean }) => (
      <button onClick={setEditComment(comment)} className={`${isEdited ? 'text-black-100' : 'text-black-60'} ml-auto`} aria-label="댓글 편집">
        <IconPencil />
      </button>
    ),
    [],
  );

  return { targetComment, setRecomment, ButtonEdit };
};
export default useTargetComment;
