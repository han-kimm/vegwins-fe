import { ReactNode } from 'react';

const InformationTable = ({ children }: { children: ReactNode }) => {
  return <div className="flex-center flex-col rounded-md bg-white px-24 py-8 shadow-lg [&>div:nth-of-type(1)]:border-0">{children}</div>;
};
export default InformationTable;
