import { ReactNode } from 'react';

const InformationTable = ({ children }: { children: ReactNode }) => {
  return (
    <section className="flex-center flex-col rounded-md bg-white px-24 py-8 shadow-lg [&>div:nth-of-type(1)]:border-0" aria-label="문서 정보">
      {children}
    </section>
  );
};
export default InformationTable;
