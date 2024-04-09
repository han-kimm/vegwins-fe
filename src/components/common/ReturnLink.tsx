import Image from 'next/image';
import Link from 'next/link';

interface Props {
  href: string;
  text?: string;
  icon?: string;
  reverse?: boolean;
}
const ReturnLink = ({ href, text, icon, reverse }: Props) => {
  return (
    <Link href={href} className={`${reverse && 'flex-row-reverse'} flex-center gap-12 text-16 font-medium`}>
      <div className="relative mt-4 h-24 w-12">
        <Image fill src={`/icon/${icon}.svg`} alt="" aria-hidden={true} />
      </div>
      {text}
    </Link>
  );
};
export default ReturnLink;
