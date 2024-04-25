import useFetchedState from '@/hooks/useFetchedState';
import { Comment } from '@/types/data';
import UsersCommentItem from '@/components/paper_main/UsersCommentItem';

const MyInfoComment = () => {
  const { state: myComment } = useFetchedState<Comment[]>({ init: [], path: '/user/comment', deps: [] });

  return (
    <div className="scrollbar h-400 overflow-y-scroll pr-20">
      {myComment.map((comment) => (
        <UsersCommentItem key={comment._id} comment={comment} my />
      ))}
    </div>
  );
};
export default MyInfoComment;
