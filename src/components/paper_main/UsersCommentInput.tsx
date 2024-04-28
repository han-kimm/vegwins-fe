'use client';

import { TargetComment } from '@/types/data';
import ajax from '@/utils/fetching';
import { useParams, useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import AuthButton from '@/components/common/AuthButton';
import AuthSign from '@/components/common/AuthSign';

interface Props {
  sessionName?: string;
  targetComment?: TargetComment;
  resetTarget: () => void;
}
const UsersCommentInput = ({ sessionName, targetComment, resetTarget }: Props) => {
  const params = useParams();
  const router = useRouter();

  const isRecomment = targetComment?.status === 'recomment';
  const isEdit = targetComment?.status === 'edit';
  const [content, setContent] = useState('');

  useEffect(() => {
    if (isEdit) {
      setContent(targetComment.comment.content);
    }
  }, [isEdit, targetComment?.comment.content]);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!content) {
      return;
    }
    try {
      const { paperId } = params;
      let res;
      if (isRecomment) {
        const recommentId = targetComment?.comment._id;
        res = await ajax.post({ path: `/paper/${paperId}/comment`, body: { content, recommentId } });
      } else if (isEdit) {
        const editId = targetComment?.comment._id;
        res = await ajax.put({ path: `/paper/${paperId}/comment`, body: { content, editId } });
      } else {
        res = await ajax.post({ path: `/paper/${paperId}/comment`, body: { content } });
      }

      if (res.error) {
        throw Error(res.error);
      }

      setContent('');
      resetTarget();
      router.refresh();
    } catch (e) {
      console.error(e);
      toast.error('다시 시도해 주십시오.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full">
      <div className="mb-8 flex items-baseline justify-between">
        <label htmlFor="comment" className="flex flex-wrap items-baseline gap-4 text-14 font-bold">
          {sessionName ?? <AuthSign />}
          {sessionName && isRecomment && <span className="rounded-full bg-black-20 px-12">{targetComment.comment.commenter.nickname}님께 답글</span>}
          {sessionName && isEdit && <span className="rounded-full bg-black-20 px-12">수정 중</span>}
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
