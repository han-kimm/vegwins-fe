import { Comment } from '@/types/data';
import { Session } from '@/types/session';
import { Dispatch, SetStateAction, useState } from 'react';
import UsersRecommentItem from '@/components/paper_main/UsersRecommentItem';

interface Props {
  session: Session;
  recommentData: Comment[];
  originId: string;
  recommentId: string;
  setRecomment: Dispatch<SetStateAction<string>>;
}
const UsersRecomment = ({ session, recommentData, originId, recommentId, setRecomment }: Props) => {
  const [open, setOpen] = useState(false);
  const isSelected = originId === recommentId;
  const handleClick = () => setRecomment?.(isSelected ? '' : originId);
  return (
    <div className="flex flex-col gap-12 border-b border-black-20 pb-12">
      <div className="flex justify-between ">
        <button onClick={handleClick} disabled={!session} className="text-12 font-bold text-sky" aria-label="대댓글 달기">
          {isSelected ? '답글 취소' : '답글 달기'}
        </button>
        {!!recommentData.length && (
          <button onClick={() => setOpen(!open)} className="ml-auto w-max text-12 font-bold text-sky" aria-label="답글 보기">
            {open ? '답글 접어두기' : `${recommentData.length}개의 답글 더 보기`}
          </button>
        )}
      </div>
      {open && recommentData.map((r) => <UsersRecommentItem key={r._id} session={session} comment={r} originId={originId} />)}
    </div>
  );
};
export default UsersRecomment;
