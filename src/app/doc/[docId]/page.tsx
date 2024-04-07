import HomeButton from '@/components/HomeButton';
import ReturnButton from '@/components/doc_header/ReturnButton';

const Doc = () => {
  return (
    <div className="h-dvh px-16 pb-28 pt-16">
      <header className="flex justify-between">
        <ReturnButton />
        <HomeButton isDoc />
      </header>
    </div>
  );
};
export default Doc;
