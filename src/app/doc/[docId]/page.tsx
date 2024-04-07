import HomeButton from '@/components/common/HomeButton';
import ReturnButton from '@/components/doc_header/ReturnButton';
import Information from '@/components/doc_main/Information';

const Doc = ({ params }: { params: { [key: string]: string } }) => {
  const { docId } = params;
  return (
    <div className="max-h-max min-h-dvh px-16 pb-28 pt-16">
      <header className="mb-12 flex justify-between">
        <ReturnButton />
        <HomeButton isDoc />
      </header>
      <main className="flex flex-grow flex-col gap-24">
        <Information docId={docId} />
      </main>
    </div>
  );
};
export default Doc;
