import Link from "next/link";
import { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from "react";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href: string;
}

const Anchor = ({ children, href, className, ...params }: Props) => {
  return (
    <Link href={href} className={`flex-center gap-12 px-16 py-8 bg-black-80 rounded-sm ${className}`} {...params}>
      {children}
    </Link>
  );
};

export default Anchor;
