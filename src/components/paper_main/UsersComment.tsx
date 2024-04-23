import { getCookie } from '@/utils/cookie';
import UsersCommentView from '@/components/paper_main/UsersCommentView';

const UsersComment = async () => {
  const session = await getCookie('v_s');
  return (
    <article className="flex w-full flex-col gap-12 pb-12" role="group" aria-label="댓글 목록">
      <h2 className="text-18 font-bold">댓글</h2>
      <UsersCommentView data={[]} session={session} />
    </article>
  );
};
export default UsersComment;
