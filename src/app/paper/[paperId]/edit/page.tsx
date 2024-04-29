import ajax from '@/utils/fetching';
import ButtonReturn from '@/components/common/ButtonReturn';
import WriteForm from '@/components/write_main/WriteForm';

interface Props {
  params: { paperId: string };
}
const EditPage = async ({ params }: Props) => {
  const { paperId } = params;
  const data = await ajax.get({ path: `/paper/${paperId}` });
  return (
    <div className="max-h-max min-h-dvh px-28 pb-28 pt-16">
      <header className="mb-12 flex justify-end">
        <ButtonReturn text="취소하기" icon="cancel" reverse />
      </header>
      <main className="h-full w-full">
        <WriteForm />
      </main>
    </div>
  );
};
export default EditPage;
