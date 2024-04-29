'use client';

import useEditComment from '@/hooks/useEditComment';
import { Comment } from '@/types/data';
import { Session } from '@/types/session';
import UsersCommentInput from '@/components/paper_main/UsersCommentInput';
import UsersCommentItem from '@/components/paper_main/UsersCommentItem';
import UsersRecomment from '@/components/paper_main/UsersRecomment';

interface Props {
  data: Comment[];
  session: Session;
}

const UsersCommentView = ({ data, session }: Props) => {
  const { targetComment, resetTarget, setRecomment, ButtonEdit } = useEditComment();
  return (
    <>
      {data?.map((comment) => {
        const isEdited = targetComment?.status === 'edit' && targetComment.comment._id === comment._id;
        const isSeleted = targetComment?.status === 'recomment' && targetComment.comment._id === comment._id;

        return (
          <div key={comment._id} className="animate-fadeIn">
            <UsersCommentItem session={session} comment={comment} isEdited={isEdited} ButtonEdit={ButtonEdit} />
            <UsersRecomment
              session={session}
              originId={comment._id}
              commentData={comment}
              isSelected={isSeleted}
              setRecomment={setRecomment}
              targetComment={targetComment}
              ButtonEdit={ButtonEdit}
            />
          </div>
        );
      })}
      <UsersCommentInput sessionName={session?.nickname} targetComment={targetComment} resetTarget={resetTarget} />
    </>
  );
};
export default UsersCommentView;
