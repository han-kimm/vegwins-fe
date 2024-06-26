import { SubmitData } from '@/constants/default';
import { Paper } from '@/types/data';
import { getData } from '@/utils/fetching';
import ButtonReturn from '@/components/common/ButtonReturn';
import ButtonDeletePaper from '@/components/edit/ButtonDeletePaper';
import WriteForm from '@/components/write_main/WriteForm';

export const dynamic = 'force-static';
interface Props {
  params: { paperId: string };
}
const EditPage = async ({ params }: Props) => {
  const { paperId } = params;
  const data: Paper = await getData({ path: `/paper/${paperId}`, queryKey: [paperId] });
  const initial: SubmitData = {
    title: data.title,
    category: data.category,
    description: data.description,
    hashtag: data.hashtag ?? [],
    image: data.imageUrl ?? [],
  };
  return (
    <div className="max-h-max min-h-dvh px-28 pb-28 pt-16">
      <header className="mb-12 flex justify-between">
        <ButtonDeletePaper title={data.title} paperId={paperId} />
        <ButtonReturn text="취소하기" icon="cancel" reverse />
      </header>
      <main className="h-full w-full">
        <WriteForm initial={initial} paperId={paperId} />
      </main>
    </div>
  );
};
export default EditPage;
