'use client';

import { MockComment } from '@/constants/mockComment';
import { ChangeEvent, useState } from 'react';
import AuthButton from '@/components/common/AuthButton';

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
    <div className="relative w-full animate-fadeIn">
      <div className="mb-8 flex items-baseline justify-between">
        <h2 className="relative z-0 flex flex-wrap items-baseline gap-4 px-12 text-14 font-bold">
          {sessionName ?? (
            <>
              <span>로그인이 필요합니다.</span>
              <div className="absolute bottom-0 left-0 -z-10 h-[0.6rem] w-full bg-orange" />
            </>
          )}
          {sessionName && recomment && <span className="rounded-full bg-black-20 px-12">{recomment?.nickname}님께 답글</span>}
        </h2>
        <button
          disabled={!value}
          className={`${value ? 'bg-black-80 text-white' : 'border-black-40 text-black-40'} shrink-0 rounded-[0.8rem] border px-8 py-4 text-12`}
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
    </div>
  );
};
export default UsersCommentInput;
