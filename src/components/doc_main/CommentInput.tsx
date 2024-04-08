'use client';

import { getSessionStorage, setSessionStorage } from '@/utils/sessionStorage';
import { ChangeEvent, useEffect, useState } from 'react';
import AuthButton from '@/components/home_header/AuthCheckerButton';

interface Props {
  sessionName?: string;
}
const CommentInput = ({ sessionName }: Props) => {
  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    setSessionStorage({ key: 'comment', value: e.target.value });
  };

  useEffect(() => {
    const initial = getSessionStorage('comment');
    setValue(initial);
  }, []);

  return (
    <div className="relative w-full animate-fadeIn">
      <div className="mb-8 flex justify-between">
        <p className="relative z-0 w-max px-12 text-center text-14 font-medium">
          {sessionName ?? '로그인이 필요합니다.'}
          <line className="absolute bottom-12 left-0 -z-10 h-[0.6rem] w-full bg-orange" />
        </p>
        <button
          disabled={!value}
          className={`${value ? 'bg-black-80 text-white' : 'border-black-40 text-black-40'} rounded-[0.8rem] border px-8 py-4 text-14`}
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
export default CommentInput;
