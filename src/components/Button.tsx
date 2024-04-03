import { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, className, ...params }: Props) => {
  return (
    <button className={`flex-center gap-12 px-16 py-8 bg-black-80 rounded-sm ${className}`} {...params}>
      {children}
    </button>
  );
};

export default Button;
