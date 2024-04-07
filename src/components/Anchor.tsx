import Link from 'next/link';
import { AnchorHTMLAttributes, ReactNode } from 'react';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href: string;
}

const Anchor = ({ children, href, className, ...params }: Props) => {
  return (
    <Link href={href} className={`flex-center rounded-xs gap-8 bg-black-80 px-12 py-4 ${className}`} {...params}>
      {children}
    </Link>
  );
};

export default Anchor;
