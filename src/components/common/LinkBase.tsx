import Link from 'next/link';
import { AnchorHTMLAttributes, ReactNode } from 'react';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href: string;
}

const LinkBase = ({ children, href, className, ...params }: Props) => {
  return (
    <Link href={href} className={`flex-center gap-8 rounded-xs bg-black-80 px-12 py-4 ${className}`} {...params}>
      {children}
    </Link>
  );
};

export default LinkBase;
