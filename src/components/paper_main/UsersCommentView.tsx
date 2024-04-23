'use client';

import { MockComment } from '@/constants/mockComment';
import { Comment } from '@/types/data';
import { Session } from '@/types/session';
import { useState } from 'react';
import UsersCommentInput from '@/components/paper_main/UsersCommentInput';
import UsersCommentItem from '@/components/paper_main/UsersCommentItem';

interface Props {
  data: Comment[];
  session: Session;
}

const UsersCommentView = ({ data, session }: Props) => {
  const [recomment, setRecomment] = useState<Omit<Comment, 'recomment'> | null>(null);

  return (
    <>
      {data.map((comment) => (
        <UsersCommentItem key={comment._id} comment={comment} session={session} recommentId={recomment?._id} setRecomment={setRecomment} />
      ))}
      <UsersCommentInput sessionName={session?.nickname} recomment={data.find((v) => v._id === recomment?._id) ?? null} />
    </>
  );
};
export default UsersCommentView;
