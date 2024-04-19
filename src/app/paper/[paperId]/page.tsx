import { PaperUser } from '@/types/data';
import { getCookie } from '@/utils/cookie';
import ajax from '@/utils/fetching';
import HomeLink from '@/components/common/HomeLink';
import LiftingButton from '@/components/common/LiftingButton';
import ReturnLink from '@/components/common/ReturnLink';
import Information from '@/components/paper_main/Information';
import MyRating from '@/components/paper_main/MyRating';
import Share from '@/components/paper_main/Share';
import Users from '@/components/paper_main/Users';

interface Props {
  params: { paperId: string };
}

const Paper = async ({ params }: Props) => {
  const { paperId } = params;
  const paperData = await ajax.get({ path: `/paper/${paperId}` });

  const session = await getCookie('v_s');
  let userData: PaperUser = { isWriter: false, rating: -1 };
  if (session) {
    userData = await ajax.get({ path: `/paper/${paperId}/user` });
  }
  return (
    <div className="max-h-max min-h-dvh px-16 pb-28 pt-16">
      <header className="mb-12 flex justify-between">
        <ReturnLink href="/search" text="검색 결과로 돌아가기" icon="arrow-left" />
        <HomeLink isPaper />
      </header>
      <main className="flex flex-grow animate-fadeIn flex-col gap-24">
        <Information data={paperData} />
        <div className="flex gap-20">
          <MyRating data={paperData} rating={userData.rating} paperId={paperId} />
          <Share />
        </div>
        <Users data={paperData} isWriter={userData.isWriter} />
      </main>
      <LiftingButton />
    </div>
  );
};
export default Paper;
