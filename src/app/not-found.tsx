'use client';

import { useRouter } from 'next/navigation';

const NotFound = () => {
  const router = useRouter();
  return (
    <div className="flex-center h-dvh text-18">
      <button onClick={() => router.back()}>뒤로가기</button>
    </div>
  );
};
export default NotFound;
