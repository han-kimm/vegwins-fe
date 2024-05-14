import { getCookie } from '@/utils/cookie';
import { getData } from '@/utils/fetching';
import UsersCommentView from '@/components/paper_main/UsersCommentView';

interface Props {
  paperId: string;
}

const UsersComment = async ({ paperId }: Props) => {
  const session = await getCookie('v_s');
  const commentData = await getData({ path: `/paper/${paperId}/comment`, queryKey: [`${paperId}/comment`] });
  return (
    <article className="flex w-full flex-col gap-12 pb-12" role="group" aria-label="댓글 목록">
      <h2 className="text-18 font-bold">댓글</h2>
      <UsersCommentView data={commentData.error ? null : commentData} session={session} />
    </article>
  );
};
export default UsersComment;
