'use client';

import { MockComment } from '@/constants/mockComment';
import { useState } from 'react';
import CommentInput from '@/components/doc_main/CommentInput';
import CommentListItem from '@/components/doc_main/CommentListItem';

interface Props {
  data: MockComment;
  session: {
    id: string;
    name: string;
  } | null;
}

const CommentList = ({ data, session }: Props) => {
  const [recommentId, setRecommentId] = useState('');
  return (
    <article className="flex w-full flex-col gap-16 pb-12" role="group" aria-label="댓글 목록">
      <div className="flex items-baseline gap-8">
        <h1 className="text-18 font-bold">댓글</h1>
        <span>닉네임을 눌러 대댓글을 달 수 있습니다.</span>
        <button onClick={() => setRecommentId('')} className="font-bold text-sky">
          초기화
        </button>
      </div>
      <div className="border-b">
        {data.map((comment) => (
          <CommentListItem key={comment.id} comment={comment} session={session} recommentId={recommentId} setRecommentId={setRecommentId} />
        ))}
      </div>
      {!recommentId && <CommentInput sessionName={session?.name} />}{' '}
    </article>
  );
};
export default CommentList;
