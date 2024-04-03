import Link from 'next/link';
import { AnchorHTMLAttributes, ReactNode } from 'react';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href: string;
}

const Anchor = ({ children, href, className, ...params }: Props) => {
  return (
    <Link href={href} className={`flex-center gap-12 rounded-sm bg-black-80 px-16 py-8 ${className}`} {...params}>
      {children}
    </Link>
  );
};

export default Anchor;
