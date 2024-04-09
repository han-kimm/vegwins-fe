import { timeDiff } from '@/utils/timeDiff';
import BaseLink from '@/components/common/BaseLink';

interface Props {
  name: string;
  createdAt: string;
  docId: string;
  isCommiter: boolean;
}

const UsersCreator = ({ name, createdAt, docId, isCommiter }: Props) => {
  return (
    <article className="w-full border-b border-black-20 pb-12">
      <div className="mb-8 flex justify-between">
        <h1 className="text-18 font-bold">작성자</h1>
        {isCommiter && (
          <BaseLink href={`/doc/${docId}/edit`} className="text-14 text-white">
            편집하기
          </BaseLink>
        )}
      </div>
      <div className="flex items-baseline gap-8">
        <h2 className="text-16 font-medium">{name}</h2>
        <span className="text-black-60">{timeDiff(createdAt)} 작성됨.</span>
      </div>
    </article>
  );
};
export default UsersCreator;
