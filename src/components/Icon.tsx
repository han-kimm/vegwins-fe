import Image from 'next/image';

interface Props {
  obj: { [key: string]: string };
  objKey: string;
}

const Icon = ({ obj, objKey }: Props) => {
  const Svg = obj[objKey];
  return (
    <>
      <div className="flex-center h-40 w-40">
        <Svg />
      </div>
      <span className="text-16 font-bold" aria-hidden={true}>
        {objKey}
      </span>
    </>
  );
};
export default Icon;
