import { MOCK_COMMENT } from '@/constants/mockComment';
import { MockDoc } from '@/constants/mockDoc';
import { getCookie } from '@/utils/cookie';
import UsersComment from '@/components/doc_main/UsersComment';
import UsersWriter from '@/components/doc_main/UsersWriter';

interface Props {
  data: MockDoc;
  paperId: string;
}

const Users = async ({ data, paperId }: Props) => {
  const session = await getCookie('v_s');

  // Comment Fetching...
  return (
    <section className="flex-center relative grow flex-col gap-20 rounded-md bg-white p-20 shadow-lg" aria-label="유저 의견">
      <UsersWriter name={data.writer.nickname} createdAt={data.createdAt} paperId={paperId} isWriter={data.writer.nickname === session?.nickname} />
      <UsersComment data={MOCK_COMMENT} session={session} />
    </section>
  );
};
export default Users;
