import { MockComment } from '@/constants/mockComment';
import { Session } from '@/types/session';
import { timeDiff } from '@/utils/timeDiff';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  comment: MockComment[number];
  session: Session;
  recommentId?: string;
  setRecomment?: Dispatch<SetStateAction<MockComment[number] | null>>;
  r?: boolean;
}

const UsersCommentItem = ({ comment, session, recommentId, setRecomment, r }: Props) => {
  const isSelected = comment.id === recommentId;
  const handleClick = () => setRecomment?.((prev) => (prev?.id === comment.id ? null : comment));

  return (
    <div key={comment.id} className={`${r ? 'my-8 ml-12 border-l pl-12' : 'border-b border-black-20 pb-12'} flex flex-col`}>
      <div className="flex items-center gap-8">
        {/* <div className="h-4 w-4 rounded-full bg-black-100" /> */}
        <h3 className="text-center text-14 font-bold">{comment.nickname}</h3>
        <span className="text-black-60">{timeDiff(comment.createdAt)}</span>
        {r || (
          <button onClick={handleClick} disabled={!session} className={`${isSelected && 'text-sky'} font-bold`}>
            {isSelected ? '답글 취소' : '답글 달기'}
          </button>
        )}
      </div>
      <p className="text-14">{comment.comment}</p>
      {comment.recomment?.map((r) => <UsersCommentItem key={r.id} comment={r} session={session} r />)}
    </div>
  );
};
export default UsersCommentItem;
