'use client';

import { ChangeEvent, FormEvent, KeyboardEvent, useState } from 'react';
import AddCategory from '@/components/write_main/AddCategory';
import AddImage from '@/components/write_main/AddImage';

const AddForm = () => {
  const [title, setTitle] = useState('');
  const [hashtag, setHashtag] = useState<string[]>([]);
  const [category, setCategory] = useState<string[]>([]);

  const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setTitle(newValue);
  };

  const enterHashtag = (e: KeyboardEvent) => {
    if (e.code === 'Enter') {
      console.log(3);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  console.log(category);
  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col [&>div:not(:first-child)]:mb-40">
      <AddImage />
      <div className="flex h-52 gap-40 text-18">
        <div>
          <h2 className="w-68 shrink-0 font-medium">문서명</h2>
          {!title && <span className="align-top text-12 font-bold text-sky">*필수입력</span>}
        </div>
        <input
          value={title}
          onChange={changeTitle}
          placeholder="입력해 주세요."
          className="h-max w-full border-b border-black-60 bg-transparent font-bold focus:outline-none"
        />
      </div>

      <div className="flex gap-40 text-18">
        <div>
          <h2 className="w-68 shrink-0 font-medium">카테고리</h2>
          {!category.length && <span className="align-top text-12 font-bold text-sky">*필수입력</span>}
        </div>
        <AddCategory category={category} setCategory={setCategory} />
      </div>
      <div className="flex gap-40 text-18">
        <div>
          <h2 className="w-68 shrink-0 font-medium">해시태그</h2>
        </div>
        <input
          onKeyDown={enterHashtag}
          placeholder="'#특징' 추가해 주세요."
          className="h-max w-full border-b border-black-60 bg-transparent font-bold focus:outline-none"
        />
      </div>
    </form>
  );
};
export default AddForm;
