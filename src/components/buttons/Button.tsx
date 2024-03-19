import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import React from "react";

export default function Button({
  children,
  icon,
  ...props
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <button className="c-btn" {...props}>
      {children}
      {icon ? icon : <ArrowUpRightIcon className="h-5 w-5" />}
    </button>
  );
}
