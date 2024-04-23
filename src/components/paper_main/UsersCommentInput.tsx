'use client';

import { MockComment } from '@/constants/mockComment';
import { ChangeEvent, useState } from 'react';
import AuthButton from '@/components/common/AuthButton';
import AuthSign from '@/components/common/AuthSign';

interface Props {
  sessionName?: string;
  recomment: MockComment[number] | null;
}
const UsersCommentInput = ({ sessionName, recomment }: Props) => {
  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <form className="relative w-full">
      <div className="mb-8 flex items-baseline justify-between">
        <h2 className="flex flex-wrap items-baseline gap-4 text-14 font-bold">
          {sessionName ?? <AuthSign />}
          {sessionName && recomment && <span className="rounded-full bg-black-20 px-12">{recomment?.nickname}님께 답글</span>}
        </h2>
        <button
          disabled={!value}
          className={`${value ? 'bg-black-80 text-white' : 'border-black-60 text-black-80'} shrink-0 rounded-[0.8rem] border px-8 py-4 text-12`}
          aria-label="댓글 제출하기"
        >
          작성 완료
        </button>
      </div>
      <textarea value={value} disabled={!sessionName} onChange={handleChange} className="h-80 w-full rounded-sm border border-black-80 p-8 text-14" />
      {!sessionName && (
        <div className="absolute left-1/2 top-2/3 -translate-x-1/2 -translate-y-1/2">
          <AuthButton />
        </div>
      )}
    </form>
  );
};
export default UsersCommentInput;
