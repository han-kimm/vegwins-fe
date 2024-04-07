import { ReactNode } from 'react';

const InformationTable = ({ children }: { children: ReactNode }) => {
  return <div className="flex-center animate-fadeIn flex-col rounded-md bg-white px-24 shadow-lg [&>div:nth-of-type(1)]:border-0">{children}</div>;
};
export default InformationTable;
