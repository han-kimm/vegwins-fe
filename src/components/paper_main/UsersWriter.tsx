import { timeDiff } from '@/utils/timeDiff';
import UsersWriterEditButton from '@/components/paper_main/UsersWriterEditButton';

interface Props {
  name: string;
  createdAt: string;
  paperId: string;
}

const UsersWriter = ({ name, createdAt, paperId }: Props) => {
  return (
    <article className="w-full border-b border-black-20 pb-24">
      <div className="mb-8 flex justify-between">
        <h2 className="text-18 font-bold">작성자</h2>
        <UsersWriterEditButton paperId={paperId} />
      </div>
      <div className="flex items-baseline gap-8">
        <h3 className="text-16 font-bold">{name}</h3>
        <span className="text-12 text-black-60">{timeDiff(createdAt)} 작성됨.</span>
      </div>
    </article>
  );
};
export default UsersWriter;
