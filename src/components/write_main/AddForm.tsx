'use client';

import Image from 'next/image';
import { ChangeEvent, FormEvent, KeyboardEvent, useState } from 'react';
import AddCategory from '@/components/write_main/AddCategory';
import AddImage from '@/components/write_main/AddImage';

const REG = /#[a-z0-9_가-힣]+/;

const AddForm = () => {
  const [title, setTitle] = useState('');
  const [hashtag, setHashTag] = useState<Set<string>>(new Set());
  const [category, setCategory] = useState<string[]>([]);

  const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setTitle(newValue);
  };

  const addHashtag = (e: KeyboardEvent) => {
    const input = e.target as HTMLInputElement;
    const newValue = input.value;

    if (e.code !== 'Enter' || !newValue) {
      return;
    }

    if (!REG.test(newValue)) {
      input.value = '';
      input.placeholder = '"#태그명"으로 입력해 주세요.';

      return;
    }
    if (hashtag.has(newValue)) {
      input.value = '';
      input.placeholder = '이미 추가된 태그입니다.';
      return;
    }
    input.value = '';
    setHashTag((prev) => (prev.add(newValue), new Set(prev)));
  };

  const deleteHashtag = (tag: string) => () => {
    setHashTag((prev) => (prev.delete(tag), new Set(prev)));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  console.log(hashtag);

  return (
    <div onSubmit={handleSubmit} className="flex w-full flex-col [&>div:not(:first-child)]:mt-40">
      <AddImage />
      <div className="flex min-h-56 gap-40 text-18">
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
        <div className="flex grow flex-col gap-8">
          <input
            onKeyUp={addHashtag}
            placeholder="'#특징' 추가해 주세요."
            className="border-b border-black-60 bg-transparent font-bold focus:outline-none"
          />
          <div className="flex flex-wrap gap-8">
            {[...hashtag].map((tag) => (
              <button
                onClick={deleteHashtag(tag)}
                className="flex-center animate-fadeIn gap-8 rounded-full border border-black-40 px-8 active:bg-black-80"
                key={tag}
              >
                {tag}
                <Image width={10} height={10} src="/icon/cancel.svg" alt="해시태그 삭제" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddForm;
