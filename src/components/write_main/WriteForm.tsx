'use client';

import { WRITE_SAVE } from '@/constants/sessionStorage';
import { getSessionStorage, setSessionStorage } from '@/utils/sessionStorage';
import { useRouter } from 'next/navigation';
import { FormEvent, useMemo, useState } from 'react';
import WriteCategory from '@/components/write_main/WriteCategory';
import WriteDescription from '@/components/write_main/WriteDescription';
import WriteHashtag from '@/components/write_main/WriteHashtag';
import WriteImage from '@/components/write_main/WriteImage';
import WriteSave from '@/components/write_main/WriteSave';
import WriteSubmit from '@/components/write_main/WriteSubmit';
import WriteTitle from '@/components/write_main/WriteTitle';

const WriteForm = () => {
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [hashtag, setHashTag] = useState<Set<string>>(new Set());
  const [category, setCategory] = useState<string[]>([]);
  const [description, setDescription] = useState('');

  const submitData = { image, title, hashtag: [...hashtag], category, description };

  const handleSave = () => {
    setSessionStorage({ key: WRITE_SAVE, value: submitData });
  };
  const handleRecall = () => {
    const previousValue: typeof submitData | null = getSessionStorage(WRITE_SAVE);
    if (previousValue) {
      setImage(previousValue.image);
      setTitle(previousValue.title);
      setHashTag(new Set(previousValue.hashtag));
      setCategory(previousValue.category);
      setDescription(previousValue.description);
    }
  };

  const router = useRouter();

  const required = useMemo(() => !!title && !!category.length && !!description, [title, category, description]);
  const canSave = !!image || !!title || !!category.length || !!hashtag.size || !!description;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!required) {
      return;
    }
    router.push('/');
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col [&>div:not(:first-child)]:mt-40">
      <WriteImage image={image} setImage={setImage} />
      <WriteTitle title={title} setTitle={setTitle} />
      <WriteCategory category={category} setCategory={setCategory} />
      <WriteHashtag hashtag={hashtag} setHashtag={setHashTag} />
      <WriteDescription description={description} setDescription={setDescription} />
      <WriteSave required={canSave} handleSave={handleSave} handleRecall={handleRecall} />
      <WriteSubmit required={required} />
    </form>
  );
};
export default WriteForm;
