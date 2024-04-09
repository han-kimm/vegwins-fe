import { MockComment } from '@/constants/mockComment';
import dayjs from 'dayjs';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  comment: MockComment[number];
  session: {
    id: string;
    name: string;
  } | null;
  recommentId?: string;
  setRecomment?: Dispatch<SetStateAction<MockComment[number] | null>>;
  r?: boolean;
}

const UsersCommentItem = ({ comment, session, recommentId, setRecomment, r }: Props) => {
  const isSelected = comment.id === recommentId;
  const date = dayjs(Date.now());
  const dayDiff = date.diff(comment.createdAt, 'd');

  const handleClick = () => setRecomment?.((prev) => (prev?.id === comment.id ? null : comment));

  return (
    <div key={comment.id} className={`${r ? 'my-8 ml-12 border-l pl-12' : 'border-b pb-12'} flex flex-col`}>
      <div className="flex items-baseline gap-8">
        <h3 className="mb-4 text-center text-14 font-medium">{comment.nickname}</h3>
        <span className="text-black-60">{dayDiff + '일 전'}</span>
        {r || (
          <button onClick={handleClick} disabled={!session} className={`${isSelected && 'font-medium text-sky'}`}>
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
