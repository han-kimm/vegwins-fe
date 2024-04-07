import HomeButton from '@/components/common/HomeButton';
import ReturnButton from '@/components/doc_header/ReturnButton';

const Doc = () => {
  return (
    <div className="h-dvh px-16 pb-28 pt-16">
      <header className="mb-12 flex justify-between">
        <ReturnButton />
        <HomeButton isDoc />
      </header>
      <main className="flex flex-grow flex-col gap-24"></main>
    </div>
  );
};
export default Doc;
