'use client';

import { DEFAULT_SUBMIT } from '@/constants/default';
import { WRITE_SAVE } from '@/constants/localStorage';
import { getLocalStorage, setLocalStorage } from '@/utils/localStorage';
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

  const handleSave = () => {
    setLocalStorage({ key: WRITE_SAVE, value: submitData });
  };
  const handleRecall = () => {
    const currentData = JSON.stringify(submitData);
    const previousData = localStorage.getItem(WRITE_SAVE);
    if (currentData === previousData) {
      return;
    }
    if (previousData) {
      setSubmitData(JSON.parse(previousData));
    }
  };

  const router = useRouter();

  const required = !!submitData.title && !!submitData.category.length && !!submitData.description;
  const canSave = !!submitData.image || !!submitData.title || !!submitData.category.length || !!submitData.hashtag.size || !!submitData.description;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!required) {
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
      <WriteSave required={canSave} handleSave={handleSave} handleRecall={handleRecall} />
      <WriteSubmit required={required} />
    </form>
  );
};
export default WriteForm;
