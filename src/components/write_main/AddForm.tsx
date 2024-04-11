'use client';

import { WRITE_SAVE } from '@/constants/sessionStorage';
import { getSessionStorage, setSessionStorage } from '@/utils/sessionStorage';
import { FormEvent, useEffect, useState } from 'react';
import AddCategory from '@/components/write_main/AddCategory';
import AddDescription from '@/components/write_main/AddDescription';
import AddHashtag from '@/components/write_main/AddHashtag';
import AddImage from '@/components/write_main/AddImage';
import AddSave from '@/components/write_main/AddSave';
import AddTitle from '@/components/write_main/AddTitle';

const AddForm = () => {
  const [title, setTitle] = useState('');
  const [hashtag, setHashTag] = useState<Set<string>>(new Set());
  const [category, setCategory] = useState<string[]>([]);
  const [description, setDescription] = useState('');

  const submitData = { title, hashtag: [...hashtag], category, description };

  const handleSave = () => {
    setSessionStorage({ key: WRITE_SAVE, value: submitData });
  };
  const handleRecall = () => {
    const previousValue: typeof submitData | null = getSessionStorage(WRITE_SAVE);
    if (previousValue) {
      setTitle(previousValue.title);
      setHashTag(new Set(previousValue.hashtag));
      setCategory(previousValue.category);
      setDescription(previousValue.description);
    }
  };
  useEffect(() => {
    handleRecall();
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col [&>div:not(:first-child)]:mt-40">
      <AddImage />
      <AddTitle title={title} setTitle={setTitle} />
      <AddCategory category={category} setCategory={setCategory} />
      <AddHashtag hashtag={hashtag} setHashtag={setHashTag} />
      <AddDescription description={description} setDescription={setDescription} />
      <AddSave handleSave={handleSave} handleRecall={handleRecall} />
    </form>
  );
};
export default AddForm;
