import { getCookie } from '@/utils/cookie';
import ajax from '@/utils/fetching';
import UsersCommentView from '@/components/paper_main/UsersCommentView';

interface Props {
  paperId: string;
}

const UsersComment = async ({ paperId }: Props) => {
  const session = await getCookie('v_s');
  const commentData = await ajax.get({ path: `/paper/${paperId}/comment` });
  return (
    <article className="flex w-full flex-col gap-12 pb-12" role="group" aria-label="댓글 목록">
      <h2 className="text-18 font-bold">댓글</h2>
      <UsersCommentView data={commentData ?? []} session={session} />
    </article>
  );
};
export default UsersComment;
