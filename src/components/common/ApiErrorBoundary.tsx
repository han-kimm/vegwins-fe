'use client';

import { ErrorBoundary, ErrorComponent } from 'next/dist/client/components/error-boundary';
import { ReactNode, useEffect } from 'react';

interface Props {
  children: ReactNode;
}

const ApiErrorBoundary = ({ children }: Props) => {
  return <ErrorBoundary errorComponent={NetworkFallback}>{children}</ErrorBoundary>;
};
export default ApiErrorBoundary;

const NetworkFallback: ErrorComponent = ({ error, reset }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex-center grow flex-col gap-12 text-20 font-bold">
      <div>네트워크 오류: 인터넷 연결을 확인해 주세요.</div>
      <button onClick={() => reset()} className="text-14 text-sky">
        새로 고침
      </button>
    </div>
  );
};
