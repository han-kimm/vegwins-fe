import { MOCK_COMMENT } from '@/constants/mockComment';
import { Paper } from '@/types/data';
import { getCookie } from '@/utils/cookie';
import ajax from '@/utils/fetching';
import UsersComment from '@/components/paper_main/UsersComment';
import UsersWriter from '@/components/paper_main/UsersWriter';

interface Props {
  data: Paper;
  isWriter: boolean;
}

const Users = async ({ data, isWriter }: Props) => {
  const session = await getCookie('v_s');

  // comment fetching
  // const commentData = await ajax.get({path: `/paper/${data._id}/comment`})
  return (
    <section className="flex-center relative grow flex-col gap-20 rounded-md bg-white p-20 shadow-lg" aria-label="유저 의견">
      <UsersWriter name={data.writer.nickname} createdAt={data.createdAt} paperId={data._id} isWriter={isWriter} />
      <UsersComment data={MOCK_COMMENT} session={session} />
    </section>
  );
};
export default Users;
