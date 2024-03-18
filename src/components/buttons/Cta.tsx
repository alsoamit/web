import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import React from "react";

interface ICtaProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
}

export default function Cta({ children, icon, ...props }: ICtaProps) {
  return (
    <button className="c-cta" {...props}>
      {children}
      <ArrowUpRightIcon className="h-5 w-5" />
    </button>
  );
}
