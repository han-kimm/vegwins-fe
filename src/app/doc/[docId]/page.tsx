import { MOCK_DOC } from '@/constants/mockDoc';
import HomeButton from '@/components/common/HomeButton';
import LiftingButton from '@/components/common/LiftingButton';
import ReturnButton from '@/components/doc_header/ReturnButton';
import Comment from '@/components/doc_main/Comment';
import Information from '@/components/doc_main/Information';
import MyRating from '@/components/doc_main/MyRating';
import Share from '@/components/doc_main/Share';

const Doc = ({ params }: { params: { [key: string]: string } }) => {
  const { docId } = params;
  // Data fetching...
  return (
    <div className="max-h-max min-h-dvh px-16 pb-28 pt-16">
      <header className="mb-12 flex justify-between">
        <ReturnButton />
        <HomeButton isDoc />
      </header>
      <main className="flex flex-grow animate-fadeIn flex-col gap-24">
        <Information data={MOCK_DOC} />
        <div className="flex gap-20">
          <MyRating data={MOCK_DOC} docId={docId} />
          <Share />
        </div>
        <Comment data={MOCK_DOC} />
      </main>
      <LiftingButton />
    </div>
  );
};
export default Doc;
