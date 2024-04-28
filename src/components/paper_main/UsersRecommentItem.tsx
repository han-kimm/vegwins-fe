import useDeleteComment from '@/hooks/useDeleteComment';
import { Comment } from '@/types/data';
import { Session } from '@/types/session';
import { timeDiff } from '@/utils/timeDiff';
import { FunctionComponent, useMemo } from 'react';
import IconReply from 'public/icon/reply.svg';

interface Props {
  session: Session;
  comment: Comment;
  originId: string;
  isEdited: boolean;
  ButtonEdit: FunctionComponent<{ comment: Comment; isEdited: boolean }>;
}

const UsersRecommentItem = ({ session, comment, originId, isEdited, ButtonEdit }: Props) => {
  const { ButtonDelete, ModalDelete } = useDeleteComment({ body: { deleteId: comment._id, originId } });
  const isCommenter = useMemo(() => session?.nickname === comment.commenter.nickname, []);

  return (
    <div className={`${isEdited ? 'opacity-30' : ''} flex animate-fadeIn gap-4`}>
      <IconReply />
      <div className="flex w-full flex-col">
        <div className="flex items-center gap-8">
          <h3 className="text-center text-14 font-bold">{comment.commenter?.nickname}</h3>
          <span className="text-black-60">{timeDiff(comment.createdAt)}</span>
          {isCommenter && (
            <>
              <ButtonEdit comment={comment} isEdited={isEdited} />
              <ButtonDelete />
            </>
          )}
        </div>
        <p className="whitespace-pre-wrap text-14">{comment.content}</p>
      </div>
      <ModalDelete />
    </div>
  );
};
export default UsersRecommentItem;
