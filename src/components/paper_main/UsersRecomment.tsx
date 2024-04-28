import { Comment, TargetComment } from '@/types/data';
import { Session } from '@/types/session';
import { Dispatch, FunctionComponent, SetStateAction, useState } from 'react';
import UsersRecommentItem from '@/components/paper_main/UsersRecommentItem';

interface Props {
  session: Session;
  commentData: Comment;
  originId: string;
  isSelected: boolean;
  setRecomment: (comment: Comment) => () => void;
  targetComment?: TargetComment;
  ButtonEdit: FunctionComponent<{ comment: Comment; isEdited: boolean }>;
}
const UsersRecomment = ({ session, commentData, originId, isSelected, setRecomment, targetComment, ButtonEdit }: Props) => {
  const [open, setOpen] = useState(false);
  const recommentLength = commentData.recomment.length;
  return (
    <div className="flex flex-col gap-12 border-b border-black-20 pb-12">
      <div className="flex justify-between ">
        <button
          onClick={setRecomment(commentData)}
          disabled={!session}
          className={`${isSelected ? ' text-sky' : ''} text-12 font-bold`}
          aria-label="대댓글 달기"
        >
          {isSelected ? '답글 취소' : '답글 달기'}
        </button>
        {!!recommentLength && (
          <button onClick={() => setOpen(!open)} className="ml-auto w-max text-12 font-bold text-sky" aria-label="답글 보기">
            {open ? '답글 접어두기' : `${recommentLength}개의 답글 더 보기`}
          </button>
        )}
      </div>
      {open &&
        commentData.recomment.map((r) => (
          <UsersRecommentItem
            key={r._id}
            session={session}
            comment={r}
            originId={originId}
            isEdited={targetComment?.status === 'edit' && targetComment.comment._id === r._id}
            ButtonEdit={ButtonEdit}
          />
        ))}
    </div>
  );
};
export default UsersRecomment;
