import { Comment } from '@/types/data';
import { Session } from '@/types/session';
import { timeDiff } from '@/utils/timeDiff';
import { Dispatch, SetStateAction, useState } from 'react';
import IconReply from 'public/icon/reply.svg';

interface Props {
  comment: Comment;
  session?: Session;
  recommentId?: string;
  setRecomment?: Dispatch<SetStateAction<Comment | null>>;
  r?: boolean;
}

const UsersCommentItem = ({ comment, session, recommentId, setRecomment, r }: Props) => {
  const [open, setOpen] = useState(false);

  if (!comment) {
    return null;
  }
  const isSelected = comment._id === recommentId;
  const handleClick = () => setRecomment?.(isSelected ? null : comment);

  return (
    <div className="flex flex-col border-b border-black-20 pb-12">
      <div className="flex items-center gap-8">
        <h3 className="text-center text-16 font-bold">{comment.commenter?.nickname}</h3>
        <span className="text-12 text-black-60">{timeDiff(comment.createdAt)}</span>
        <button onClick={handleClick} disabled={!session} className={`${isSelected && 'text-sky'} text-12 font-bold`}>
          {isSelected ? '답글 취소' : '답글 달기'}
        </button>
      </div>
      <p className="mb-8 whitespace-pre-wrap text-16">{comment.content}</p>
      {open && comment.recomment.map((r) => <Recomment key={r._id} comment={r} />)}
      {!!comment.recomment.length && (
        <button onClick={() => setOpen(!open)} className="ml-auto w-max text-12 font-bold text-sky" aria-label="답글 보기">
          {open ? '답글 접어두기' : `${comment.recomment.length}개의 답글 더 보기`}
        </button>
      )}
    </div>
  );
};
export default UsersCommentItem;

const Recomment = ({ comment }: Pick<Props, 'comment'>) => {
  return (
    <div className=" flex animate-fadeIn gap-4 py-8">
      <IconReply />
      <div className="flex flex-col">
        <div className="flex items-center gap-8">
          <h3 className="text-center text-14 font-bold">{comment.commenter?.nickname}</h3>
          <span className="text-black-60">{timeDiff(comment.createdAt)}</span>
        </div>
        <p className="mb-4 whitespace-pre-wrap text-14">{comment.content}</p>
      </div>
    </div>
  );
};
