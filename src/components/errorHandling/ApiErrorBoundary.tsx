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
      <button onClick={() => reset()} className="flex-center gap-8 text-14 text-sky">
        새로 고침
        <Spinner />
      </button>
    </div>
  );
};

const Spinner = () => {
  return (
    <svg className="animate-[spin_1s]" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 24C15.0667 24 17.7389 22.9833 20.0167 20.95C22.2944 18.9167 23.6 16.3778 23.9333 13.3333H21.2C20.8889 15.6444 19.8611 17.5556 18.1167 19.0667C16.3722 20.5778 14.3333 21.3333 12 21.3333C9.4 21.3333 7.19445 20.4278 5.38333 18.6167C3.57222 16.8056 2.66667 14.6 2.66667 12C2.66667 9.4 3.57222 7.19444 5.38333 5.38333C7.19445 3.57222 9.4 2.66667 12 2.66667C13.5333 2.66667 14.9667 3.02222 16.3 3.73333C17.6333 4.44444 18.7556 5.42222 19.6667 6.66667H16V9.33333H24V1.33333H21.3333V4.46667C20.2 3.04444 18.8167 1.94444 17.1833 1.16667C15.55 0.388889 13.8222 0 12 0C10.3333 0 8.77222 0.316667 7.31667 0.95C5.86111 1.58333 4.59445 2.43889 3.51667 3.51667C2.43889 4.59444 1.58333 5.86111 0.95 7.31667C0.316667 8.77222 -4.76837e-07 10.3333 -4.76837e-07 12C-4.76837e-07 13.6667 0.316667 15.2278 0.95 16.6833C1.58333 18.1389 2.43889 19.4056 3.51667 20.4833C4.59445 21.5611 5.86111 22.4167 7.31667 23.05C8.77222 23.6833 10.3333 24 12 24Z"
        fill="currentColor"
      />
    </svg>
  );
};
