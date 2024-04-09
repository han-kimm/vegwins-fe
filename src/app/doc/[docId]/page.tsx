import { MOCK_DOC } from '@/constants/mockDoc';
import HomeLink from '@/components/common/HomeLink';
import LiftingButton from '@/components/common/LiftingButton';
import ReturnLink from '@/components/common/ReturnLink';
import Information from '@/components/doc_main/Information';
import MyRating from '@/components/doc_main/MyRating';
import Share from '@/components/doc_main/Share';
import Users from '@/components/doc_main/Users';

const Doc = ({ params }: { params: { [key: string]: string } }) => {
  const { docId } = params;
  // Data fetching...
  return (
    <div className="max-h-max min-h-dvh px-16 pb-28 pt-16">
      <header className="mb-12 flex justify-between">
        <ReturnLink href="/search" text="검색 결과로 돌아가기" icon="arrow-left" />
        <HomeLink isDoc />
      </header>
      <main className="flex flex-grow animate-fadeIn flex-col gap-24">
        <Information data={MOCK_DOC} />
        <div className="flex gap-20">
          <MyRating data={MOCK_DOC} docId={docId} />
          <Share />
        </div>
        <Users data={MOCK_DOC} docId={docId} />
      </main>
      <LiftingButton />
    </div>
  );
};
export default Doc;
