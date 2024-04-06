import { ReactNode } from 'react';

interface Props {
  render: () => ReactNode;
  name: string;
  fontSize?: number;
}

const Icon = ({ render, name, fontSize = 16 }: Props) => {
  return (
    <>
      <div className="flex-center h-40 w-40">{render()}</div>
      <span className={`text-${fontSize} font-bold`} aria-hidden={true}>
        {name}
      </span>
    </>
  );
};
export default Icon;
