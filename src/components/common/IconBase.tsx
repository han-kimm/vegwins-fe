import { ReactNode } from 'react';

interface Props {
  render: () => ReactNode;
  name: string;
  fontSize?: number;
}

const IconBase = ({ render, name, fontSize = 16 }: Props) => {
  return (
    <div className="flex-center flex-col">
      <div className="flex-center h-40 w-40" aria-hidden={true}>
        {render()}
      </div>
      <span className={`text-${fontSize} font-bold`}>{name}</span>
    </div>
  );
};
export default IconBase;
