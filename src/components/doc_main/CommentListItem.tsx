import { MockComment } from '@/constants/mockComment';
import CommentInput from '@/components/doc_main/CommentInput';

interface Props {
  comment: MockComment[0];
  recommentId: string;
  session: {
    id: string;
    name: string;
  } | null;
  setRecommentId?: (id: string) => void;
}

const CommentListItem = ({ comment, session, recommentId, setRecommentId }: Props) => {
  const isSelected = recommentId === comment.id;
  const isMine = session?.id === comment.id;

  return (
    <div key={comment.id} className="flex flex-col transition-all">
      <button
        onClick={() => setRecommentId?.(isSelected ? '' : comment.id)}
        className="relative z-0 mb-4 w-max px-12 text-center text-14 font-medium"
      >
        {comment.nickname}
        <line className={`${isSelected ? 'bg-black-60' : isMine ? 'bg-orange' : 'bg-black-20'} absolute bottom-0 left-0 -z-10 h-[0.6rem] w-full`} />
      </button>
      <p className="mb-8 ml-12 text-14">{comment.comment}</p>
      {comment.recomment?.map((re) => (
        <div key={re.id} className="ml-20 border-l pl-12">
          <CommentListItem comment={re} session={session} recommentId={recommentId} />
        </div>
      ))}
      {isSelected && <CommentInput sessionName={session?.name} />}
    </div>
  );
};
export default CommentListItem;
