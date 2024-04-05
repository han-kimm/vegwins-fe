import Image from 'next/image';

interface Props {
  obj: { [key: string]: string };
  objKey: string;
  fontSize?: number;
}

const Icon = ({ obj, objKey, fontSize = 16 }: Props) => {
  const Svg = obj[objKey];
  return (
    <>
      <div className="flex-center h-40 w-40">
        <Svg />
      </div>
      <span className={`text-${fontSize} font-bold`} aria-hidden={true}>
        {objKey}
      </span>
    </>
  );
};
export default Icon;
