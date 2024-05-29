import { Paper } from '@/types/data';
import { getCookie } from '@/utils/cookie';
import { getData, getSSR } from '@/utils/fetching';
import ButtonReturn from '@/components/common/ButtonReturn';
import LiftingButton from '@/components/common/LiftingButton';
import LinkHome from '@/components/common/LinkHome';
import MetaTag from '@/components/common/MetaTag';
import Information from '@/components/paper_main/Information';
import MyRating from '@/components/paper_main/MyRating';
import Share from '@/components/paper_main/Share';
import Users from '@/components/paper_main/Users';

interface Props {
  params: { paperId: string };
}

const PaperPage = async ({ params }: Props) => {
  const { paperId } = params;
  const paperData: Paper = await getData({ path: `/paper/${paperId}`, queryKey: [paperId] });
  const session = await getCookie('v_s');
  let initialRating;
  if (session) {
    initialRating = await getSSR({ path: `/paper/${paperId}/rating`, queryKey: [`${paperId}/rating`] });
  }
  return (
    <>
      <MetaTag
        title={paperData.title}
        description={`${paperData.category?.reduce((acc, cur) => (acc ? acc + ', ' + cur : acc + cur), '') ?? '비긴즈'}에서 발견할 수 있는 ${paperData.title}`}
        imageUrl={paperData.imageUrl[0]}
      />
      <div className="max-h-max min-h-dvh px-16 pb-28 pt-16">
        <header className="mb-12 flex justify-between">
          <ButtonReturn recallPath text="검색 결과로 돌아가기" icon="arrow-left" />
          <LinkHome isPaper />
        </header>
        <main className="flex flex-grow animate-fadeIn flex-col gap-24">
          <Information data={paperData} />
          <div className="flex gap-20">
            <MyRating initialRating={initialRating?.rating} paperRating={paperData.rating} paperId={paperId} />
            <Share />
          </div>
          <Users data={paperData} />
        </main>
        <LiftingButton />
      </div>
    </>
  );
};
export default PaperPage;
