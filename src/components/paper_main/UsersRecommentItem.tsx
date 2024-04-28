import useDeleteComment from '@/hooks/useDeleteComment';
import { Comment } from '@/types/data';
import { Session } from '@/types/session';
import { timeDiff } from '@/utils/timeDiff';
import { useMemo } from 'react';
import IconPencil from 'public/icon/pencil.svg';
import IconReply from 'public/icon/reply.svg';

interface Props {
  session: Session;
  comment: Comment;
  originId: string;
}

const UsersRecommentItem = ({ session, comment, originId }: Props) => {
  const { ButtonDelete, ModalDelete } = useDeleteComment({ body: { deleteId: comment._id, originId } });
  const isCommenter = useMemo(() => session?.nickname === comment.commenter.nickname, []);
  return (
    <div className=" flex animate-fadeIn gap-4">
      <IconReply />
      <div className="flex w-full flex-col">
        <div className="flex items-center gap-8">
          <h3 className="text-center text-14 font-bold">{comment.commenter?.nickname}</h3>
          <span className="text-black-60">{timeDiff(comment.createdAt)}</span>
          {isCommenter && (
            <>
              <button className="ml-auto text-black-60" aria-label="댓글 편집">
                <IconPencil />
              </button>
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
