import { MOCK_COMMENT } from '@/constants/mockComment';
import { MockDoc } from '@/constants/mockDoc';
import { getCookie } from '@/utils/cookie';
import UsersComment from '@/components/doc_main/UsersComment';
import UsersWriter from '@/components/doc_main/UsersWriter';

interface Props {
  data: MockDoc;
  docId: string;
}

const Users = async ({ data, docId }: Props) => {
  const session = await getCookie('session');

  // Comment Fetching...
  return (
    <section className="flex-center relative grow flex-col gap-20 rounded-md bg-white p-20 shadow-lg" aria-label="유저 의견">
      <UsersWriter name={data.writer.nickname} createdAt={data.createdAt} docId={docId} isWriter={data.writer.id === session?.id} />
      <UsersComment data={MOCK_COMMENT} session={session} />
    </section>
  );
};
export default Users;
