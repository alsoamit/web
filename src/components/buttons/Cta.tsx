import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import React from "react";
import { IconType } from "react-icons";

interface ICtaProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon?: IconType;
  onClick?: () => void;
}

export default function Cta({
  children,
  onClick,
  icon: Icon,
  ...props
}: ICtaProps) {
  return (
    <button onClick={onClick} type="submit" className="c-cta" {...props}>
      {children}
      {Icon ? <Icon /> : <ArrowUpRightIcon className="h-5 w-5" />}
    </button>
  );
}
