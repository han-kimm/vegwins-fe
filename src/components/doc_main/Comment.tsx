import { MOCK_COMMENT } from '@/constants/mockComment';
import { MockDoc } from '@/constants/mockDoc';
import { getCookie } from '@/utils/cookie';
import CommentCommiter from '@/components/doc_main/CommentCommiter';
import CommentList from '@/components/doc_main/CommentList';

interface Props {
  data: MockDoc;
  docId: string;
}

const Comment = async ({ data, docId }: Props) => {
  const session = await getCookie('session');

  // Comment Fetching...
  return (
    <section className="flex-center relative grow flex-col gap-20 rounded-md bg-white p-20 shadow-lg" aria-label="유저 의견">
      <CommentCommiter name={data.commiter.nickname} createdAt={data.createdAt} docId={docId} isCommiter={data.commiter.id === session?.id} />
      <CommentList data={MOCK_COMMENT} session={session} />
    </section>
  );
};
export default Comment;
