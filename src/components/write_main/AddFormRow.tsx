import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  label?: string;
  required?: boolean;
}

const AddFormRow = ({ children, label, required }: Props) => {
  return (
    <div className="flex min-h-56 gap-40 text-18 font-medium">
      <div className="w-68 shrink-0 ">
        {!!label && <h2>{label}</h2>}
        {required && <span className="align-top text-12 font-bold text-sky">*필수입력</span>}
      </div>
      {children}
    </div>
  );
};
export default AddFormRow;
