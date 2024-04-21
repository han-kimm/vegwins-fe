import { timeDiff } from '@/utils/timeDiff';
import LinkBase from '@/components/common/LinkBase';

interface Props {
  name: string;
  createdAt: string;
  paperId: string;
  isWriter: boolean;
}

const UsersWriter = ({ name, createdAt, paperId, isWriter }: Props) => {
  return (
    <article className="w-full border-b border-black-20 pb-12">
      <div className="mb-8 flex justify-between">
        <h2 className="text-18 font-bold">작성자</h2>
        {isWriter && (
          <LinkBase href={`/paper/${paperId}/edit`} className="transform-active text-14 text-white">
            편집하기
          </LinkBase>
        )}
      </div>
      <div className="flex items-baseline gap-8">
        <h3 className="text-16 font-medium">{name}</h3>
        <span className="text-black-60">{timeDiff(createdAt)} 작성됨.</span>
      </div>
    </article>
  );
};
export default UsersWriter;
