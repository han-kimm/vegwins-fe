import { Paper } from '@/types/data';
import UsersComment from '@/components/paper_main/UsersComment';
import UsersWriter from '@/components/paper_main/UsersWriter';

interface Props {
  data: Paper;
}

const Users = ({ data }: Props) => {
  return (
    <section className="flex-center relative grow flex-col gap-20 rounded-md bg-white p-20 shadow-lg" aria-label="유저 의견">
      <UsersWriter name={data.writer?.nickname} createdAt={data.createdAt} paperId={data._id} />
      <UsersComment paperId={data._id} />
    </section>
  );
};
export default Users;
