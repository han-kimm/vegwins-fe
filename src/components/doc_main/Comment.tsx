import { MockDoc } from '@/constants/mockDoc';
import CommentCommiter from '@/components/doc_main/CommentCommiter';

interface Props {
  data: MockDoc;
}

const Comment = ({ data }: Props) => {
  return (
    <section className="flex-center relative grow flex-col rounded-md bg-white p-20 shadow-lg" aria-label="유저 의견">
      <CommentCommiter />
    </section>
  );
};
export default Comment;
