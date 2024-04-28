'use client';

import { Comment } from '@/types/data';
import { Session } from '@/types/session';
import { Fragment, useState } from 'react';
import UsersCommentInput from '@/components/paper_main/UsersCommentInput';
import UsersCommentItem from '@/components/paper_main/UsersCommentItem';
import UsersRecomment from '@/components/paper_main/UsersRecomment';

interface Props {
  data: Comment[];
  session: Session;
}

const UsersCommentView = ({ data, session }: Props) => {
  const [recommentId, setRecommentId] = useState('');

  return (
    <>
      {data?.map((comment) => (
        <div key={comment._id}>
          <UsersCommentItem session={session} comment={comment} />
          <UsersRecomment
            session={session}
            originId={comment._id}
            recommentData={comment.recomment}
            recommentId={recommentId}
            setRecomment={setRecommentId}
          />
        </div>
      ))}
      <UsersCommentInput sessionName={session?.nickname} recomment={data?.find((v) => v._id === recommentId) ?? null} />
    </>
  );
};
export default UsersCommentView;
