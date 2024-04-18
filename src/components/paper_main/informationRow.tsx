import { ReactNode } from 'react';

const InformationRow = ({ label, children }: { label?: string; children: ReactNode }) => {
  return (
    <div className="flex w-full items-start gap-48 border-t border-solid border-black-20 py-12">
      {!!label && <h2 className="w-60 shrink-0 text-16 text-black-80">{label}</h2>}
      {children}
    </div>
  );
};
export default InformationRow;
