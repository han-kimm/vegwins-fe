'use client';

import { DEFAULT_SUBMIT, SubmitData, SubmitInitial, WRITE_SAVE } from '@/constants/default';
import { getLocalStorage } from '@/utils/browserStorage';
import { postData, putData } from '@/utils/fetching';
import { refreshTag } from '@/utils/revalidate';
import { canRecall, canSave, required, saveSubmitData } from '@/utils/writeUtils';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import toast from 'react-hot-toast';
import WriteCategory from '@/components/write_main/WriteCategory';
import WriteDescription from '@/components/write_main/WriteDescription';
import WriteHashtag from '@/components/write_main/WriteHashtag';
import WriteImage from '@/components/write_main/WriteImage';
import WriteSave from '@/components/write_main/WriteSave';
import WriteSubmit from '@/components/write_main/WriteSubmit';
import WriteTitle from '@/components/write_main/WriteTitle';

const toastPosition = {
  position: 'bottom-center',
} as const;

interface Props {
  initial?: SubmitData;
  paperId?: string;
}

const WriteForm = ({ initial, paperId }: Props) => {
  const [submitData, setSubmitData] = useState<SubmitData>(() => (initial ? initial : DEFAULT_SUBMIT));
  const [reload, setReload] = useState(0);
  const handleSave = () => {
    try {
      saveSubmitData(submitData);
      setReload(reload + 1);
      toast.success(
        <p>
          <strong>이미지를 제외</strong>한 정보가
          <br />
          <strong>10분</strong> 간 저장됩니다.
        </p>,
        toastPosition,
      );
    } catch {
      toast.error('다시 시도해 주세요.', toastPosition);
    }
  };
  const handleRecall = () => {
    const prev = getLocalStorage(WRITE_SAVE);
    if (prev) {
      setSubmitData(prev);
      toast.success('불러 오기 성공!', toastPosition);
      return;
    }
    toast.error('다시 시도해 주세요.', toastPosition);
  };

  const router = useRouter();
  const [pending, setPending] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (pending) {
      return;
    }

    try {
      setPending(true);
      const noImageData = { ...submitData, image: [] as boolean[] };

      const formData = new FormData();
      for (let index = 0; index < 2; index++) {
        const image = submitData.image[index];
        if (image === initial?.image[index]) {
          noImageData.image[index] = false;
          continue;
        }
        noImageData.image[index] = true;

        if (image) {
          formData.append('image', image);
        }
      }
      formData.append('data', JSON.stringify(noImageData));

      let res;
      if (!initial) {
        res = await postData({ path: '/paper', body: formData });
      } else {
        res = await putData({ path: `/paper/${paperId}`, body: formData });
      }
      if (!res || res.error) {
        throw new Error(res.error || '응답이 없습니다.');
      }

      refreshTag(['search', 'myPaper', paperId || '']);
      router.replace(`/paper/${res?.paperId}#top`);
    } catch (e: any) {
      toast.error('다시 시도해주십시오.');
      console.error(e);
      setPending(false);
    }
  };

  return (
    <form className="flex w-full flex-col [&>div:not(:first-child)]:mt-40" aria-label="문서 작성">
      <WriteImage image={submitData.image} setImage={setSubmitData} />
      <WriteTitle title={submitData.title} setTitle={setSubmitData} />
      <WriteCategory category={submitData.category} setCategory={setSubmitData} />
      <WriteHashtag hashtag={submitData.hashtag} setHashtag={setSubmitData} />
      <WriteDescription description={submitData.description} setDescription={setSubmitData} />
      <WriteSave canSave={canSave(submitData)} canRecall={canRecall(submitData)} handleSave={handleSave} handleRecall={handleRecall} />
      <WriteSubmit required={required(submitData)} handleSubmit={handleSubmit} pending={pending} />
    </form>
  );
};
export default WriteForm;
