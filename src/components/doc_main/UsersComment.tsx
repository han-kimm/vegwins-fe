'use client';

import { MockComment } from '@/constants/mockComment';
import { useState } from 'react';
import UsersCommentInput from '@/components/doc_main/UsersCommentInput';
import UsersCommentItem from '@/components/doc_main/UsersCommentItem';

interface Props {
  data: MockComment;
  session: {
    id: string;
    name: string;
  } | null;
}

const UsersComment = ({ data, session }: Props) => {
  const [recomment, setRecomment] = useState<MockComment[number] | null>(null);
  return (
    <article className="flex w-full flex-col gap-12 pb-12" role="group" aria-label="댓글 목록">
      <h1 className="text-18 font-bold">댓글</h1>
      {data.map((comment) => (
        <UsersCommentItem key={comment.id} comment={comment} session={session} recommentId={recomment?.id} setRecomment={setRecomment} />
      ))}
      <UsersCommentInput sessionName={session?.name} recomment={data.find((v) => v.id === recomment?.id) ?? null} />
    </article>
  );
};
export default UsersComment;
