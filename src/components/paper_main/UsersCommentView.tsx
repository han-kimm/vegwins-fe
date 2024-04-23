'use client';

import { MockComment } from '@/constants/mockComment';
import { Session } from '@/types/session';
import { useState } from 'react';
import UsersCommentInput from '@/components/paper_main/UsersCommentInput';
import UsersCommentItem from '@/components/paper_main/UsersCommentItem';

interface Props {
  data: MockComment;
  session: Session;
}

const UsersCommentView = ({ data, session }: Props) => {
  const [recomment, setRecomment] = useState<MockComment[number] | null>(null);

  return (
    <>
      {data.map((comment) => (
        <UsersCommentItem key={comment.id} comment={comment} session={session} recommentId={recomment?.id} setRecomment={setRecomment} />
      ))}
      <UsersCommentInput sessionName={session?.nickname} recomment={data.find((v) => v.id === recomment?.id) ?? null} />
    </>
  );
};
export default UsersCommentView;
