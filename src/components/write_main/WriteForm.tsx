'use client';

import { DEFAULT_SUBMIT, WRITE_SAVE } from '@/constants/default';
import { getLocalStorage } from '@/utils/localStorage';
import { canRecall, canSave, required, saveSubmitData } from '@/utils/writeUtils';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import WriteCategory from '@/components/write_main/WriteCategory';
import WriteDescription from '@/components/write_main/WriteDescription';
import WriteHashtag from '@/components/write_main/WriteHashtag';
import WriteImage from '@/components/write_main/WriteImage';
import WriteSave from '@/components/write_main/WriteSave';
import WriteSubmit from '@/components/write_main/WriteSubmit';
import WriteTitle from '@/components/write_main/WriteTitle';

const WriteForm = () => {
  const [submitData, setSubmitData] = useState(DEFAULT_SUBMIT);
  const [reload, setReload] = useState(0);

  const handleSave = () => {
    saveSubmitData(submitData);
    setReload(reload + 1);
  };
  const handleRecall = () => {
    const prev = getLocalStorage(WRITE_SAVE);
    if (prev) {
      setSubmitData({ ...prev, hashtag: new Set(prev.hashtag) });
    }
  };

  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!required(submitData)) {
      return;
    }
    router.push('/');
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col [&>div:not(:first-child)]:mt-40">
      <WriteImage image={submitData.image} setImage={setSubmitData} />
      <WriteTitle title={submitData.title} setTitle={setSubmitData} />
      <WriteCategory category={submitData.category} setCategory={setSubmitData} />
      <WriteHashtag hashtag={submitData.hashtag} setHashtag={setSubmitData} />
      <WriteDescription description={submitData.description} setDescription={setSubmitData} />
      <WriteSave canSave={canSave(submitData)} canRecall={canRecall(submitData)} handleSave={handleSave} handleRecall={handleRecall} />
      <WriteSubmit required={required(submitData)} />
    </form>
  );
};
export default WriteForm;
