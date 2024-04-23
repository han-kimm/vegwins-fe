'use client';

import { MockComment } from '@/constants/mockComment';
import { Comment } from '@/types/data';
import ajax from '@/utils/fetching';
import { useParams, useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from 'react';
import AuthButton from '@/components/common/AuthButton';
import AuthSign from '@/components/common/AuthSign';

interface Props {
  sessionName?: string;
  recomment: Comment | null;
}
const UsersCommentInput = ({ sessionName, recomment }: Props) => {
  const params = useParams();
  const [content, setContent] = useState('');
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!content) {
      return;
    }
    const { paperId } = params;
    const recommentId = recomment?._id;
    const res = await ajax.post({ path: `/paper/${paperId}/comment`, body: { content, recommentId } });
    if (!res.error) {
      setContent('');
      router.refresh();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full">
      <div className="mb-8 flex items-baseline justify-between">
        <label htmlFor="comment" className="flex flex-wrap items-baseline gap-4 text-14 font-bold">
          {sessionName ?? <AuthSign />}
          {sessionName && recomment && <span className="rounded-full bg-black-20 px-12">{recomment.commenter.nickname}님께 답글</span>}
        </label>
        <button
          disabled={!content}
          className={`${content ? 'bg-black-80 text-white' : 'border-black-60 text-black-80'} shrink-0 rounded-[0.8rem] border px-8 py-4 text-12`}
          aria-label="댓글 제출하기"
        >
          작성 완료
        </button>
      </div>
      <textarea
        id="comment"
        value={content}
        disabled={!sessionName}
        onChange={handleChange}
        className="h-80 w-full rounded-sm border border-black-80 p-8 text-14"
      />
      {!sessionName && (
        <div className="absolute left-1/2 top-2/3 -translate-x-1/2 -translate-y-1/2">
          <AuthButton />
        </div>
      )}
    </form>
  );
};
export default UsersCommentInput;
