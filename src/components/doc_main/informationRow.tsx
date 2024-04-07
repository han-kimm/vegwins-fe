import { ReactNode } from 'react';

const InformationRow = ({ label, children }: { label?: string; children: ReactNode }) => {
  return (
    <div className="flex w-full items-start gap-48 border-t border-solid border-black-20 py-8">
      {!!label && <p className="w-60 shrink-0 text-16 text-black-80">{label}</p>}
      {children}
    </div>
  );
};
export default InformationRow;
