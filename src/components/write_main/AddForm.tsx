'use client';

import Image from 'next/image';
import { FormEvent } from 'react';
import AddImage from '@/components/write_main/AddImage';

const AddForm = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="[&>div:not(:first-child)]:mt-40">
      <AddImage />
      <div className="relative flex gap-40 text-18">
        <h2 className="shrink-0">문서명</h2>
        <span className="absolute -bottom-12 text-12 font-bold text-sky">*필수입력</span>
        <input placeholder="입력해 주세요." className="w-full border-b border-black-60 bg-transparent focus:outline-none" />
      </div>
      <div className="relative flex gap-40 text-18">
        <h2 className="shrink-0">주의점</h2>
        <span className="absolute -bottom-12 text-12 font-bold text-sky">*필수입력</span>
        <button className="border-b border-black-60 px-20">추가하기</button>
        <Image width={31} height={31} src="/icon/fold.svg" alt="주의점 추가" />
      </div>
    </form>
  );
};
export default AddForm;
