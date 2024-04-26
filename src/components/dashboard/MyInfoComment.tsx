import useFetchedState from '@/hooks/useFetchedState';
import { Comment } from '@/types/data';
import { Session } from '@/types/session';
import DeferredSpinner from '@/components/errorHandling/DeferredSpinner';
import UsersCommentItem from '@/components/paper_main/UsersCommentItem';

interface Props {
  session: Session;
}
const MyInfoComment = ({ session }: Props) => {
  const { state: myComment, setState, pending } = useFetchedState<Comment[]>({ init: [], path: '/user/comment', deps: [] });

  if (pending) {
    return <DeferredSpinner />;
  }
  return (
    <div className="scrollbar flex max-h-400 min-h-108 flex-col gap-12 overflow-y-scroll pr-20">
      {myComment.length ? (
        myComment.map((comment) => <UsersCommentItem key={comment._id} session={session} comment={comment} my setMyComment={setState} />)
      ) : (
        <p className="m-auto text-16">작성한 댓글이 없습니다.</p>
      )}
    </div>
  );
};
export default MyInfoComment;
