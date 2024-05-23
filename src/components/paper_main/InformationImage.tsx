import { DEFAULT_IMAGE } from '@/constants/default';
import Image from 'next/image';

interface Props {
  value: string | string[];
}

const InformationImage = ({ value }: Props) => {
  if (typeof value === 'string') {
    return (
      <Image
        width={300}
        height={300}
        priority
        sizes="600px"
        src={value || DEFAULT_IMAGE}
        alt=""
        className="mx-auto rounded-md object-cover"
        aria-hidden={true}
      />
    );
  }
  return value.map((image) => (
    <Image
      key={image}
      width={300}
      height={300}
      priority
      sizes="600px"
      src={image || DEFAULT_IMAGE}
      alt=""
      className="mx-auto rounded-md object-cover"
      aria-hidden={true}
    />
  ));
};
export default InformationImage;
