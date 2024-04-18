import { MOCK_DOC } from '@/constants/mockDoc';
import ajax from '@/utils/fetching';
import HomeLink from '@/components/common/HomeLink';
import LiftingButton from '@/components/common/LiftingButton';
import ReturnLink from '@/components/common/ReturnLink';
import Information from '@/components/paper_main/Information';
import MyRating from '@/components/paper_main/MyRating';
import Share from '@/components/paper_main/Share';
import Users from '@/components/paper_main/Users';

const Paper = async ({ params }: { params: { paperId: string } }) => {
  const { paperId } = params;
  const data = await ajax.get({ path: `/paper/${paperId}` });
  return (
    <div className="max-h-max min-h-dvh px-16 pb-28 pt-16">
      <header className="mb-12 flex justify-between">
        <ReturnLink href="/search" text="검색 결과로 돌아가기" icon="arrow-left" />
        <HomeLink isPaper />
      </header>
      <main className="flex flex-grow animate-fadeIn flex-col gap-24">
        <Information data={data} />
        <div className="flex gap-20">
          <MyRating data={data} paperId={paperId} />
          <Share />
        </div>
        <Users data={data} paperId={paperId} />
      </main>
      <LiftingButton />
    </div>
  );
};
export default Paper;
