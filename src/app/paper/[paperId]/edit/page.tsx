import { SubmitData } from '@/constants/default';
import { Paper } from '@/types/data';
import ajax from '@/utils/fetching';
import { refreshPath } from '@/utils/revalidate';
import ButtonReturn from '@/components/common/ButtonReturn';
import ButtonDeletePaper from '@/components/edit/ButtonDeletePaper';
import WriteForm from '@/components/write_main/WriteForm';

interface Props {
  params: { paperId: string };
}
const EditPage = async ({ params }: Props) => {
  const { paperId } = params;
  const data: Paper = await ajax.get({ path: `/paper/${paperId}`, cache: 'no-store' });
  const initial: SubmitData = {
    title: data.title,
    category: data.category,
    description: data.description,
    hashtag: new Set(data.hashtag),
    image: data.imageUrl,
  };
  return (
    <div className="max-h-max min-h-dvh px-28 pb-28 pt-16">
      <header className="mb-12 flex justify-between">
        <ButtonDeletePaper title={data.title} paperId={paperId} />
        <ButtonReturn text="취소하기" icon="cancel" reverse />
      </header>
      <main className="h-full w-full">
        <WriteForm initial={initial} paperId={paperId} refreshPath={refreshPath} />
      </main>
    </div>
  );
};
export default EditPage;
