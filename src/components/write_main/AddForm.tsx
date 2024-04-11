'use client';

import { FormEvent, useState } from 'react';
import AddCategory from '@/components/write_main/AddCategory';
import AddDescription from '@/components/write_main/AddDescription';
import AddHashtag from '@/components/write_main/AddHashtag';
import AddImage from '@/components/write_main/AddImage';
import AddTitle from '@/components/write_main/AddTitle';

const AddForm = () => {
  const [title, setTitle] = useState('');
  const [hashtag, setHashTag] = useState<Set<string>>(new Set());
  const [category, setCategory] = useState<string[]>([]);
  const [description, setDescription] = useState('');

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
    </form>
  );
};
export default AddForm;
