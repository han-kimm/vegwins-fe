import { MockComment } from '@/constants/mockComment';
import { Comment } from '@/types/data';
import { Session } from '@/types/session';
import { timeDiff } from '@/utils/timeDiff';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  comment: Comment | Omit<Comment, 'recomment'>;
  session?: Session;
  recommentId?: string;
  setRecomment?: Dispatch<SetStateAction<Omit<Comment, 'recomment'> | null>>;
  r?: boolean;
}

const UsersCommentItem = ({ comment, session, recommentId, setRecomment, r }: Props) => {
  if (!comment) {
    return null;
  }
  const isSelected = comment._id === recommentId;
  const handleClick = () => setRecomment?.(isSelected ? null : comment);

  if (r) {
    console.log(comment);
  }

  return (
    <div key={comment._id} className={`${r ? 'my-8 ml-12 border-l pl-12' : 'border-b border-black-20 pb-12'} flex flex-col`}>
      <div className="flex items-center gap-8">
        <h3 className="text-center text-14 font-bold">{comment.commenter?.nickname}</h3>
        <span className="text-black-60">{timeDiff(comment.createdAt)}</span>
        {r || (
          <button onClick={handleClick} disabled={!session} className={`${isSelected && 'text-sky'} font-bold`}>
            {isSelected ? '답글 취소' : '답글 달기'}
          </button>
        )}
      </div>
      <p className="whitespace-pre-wrap text-14">{comment.content}</p>
      {'recomment' in comment && comment.recomment.map((r) => <UsersCommentItem key={r._id} comment={r} r />)}
    </div>
  );
};
export default UsersCommentItem;
