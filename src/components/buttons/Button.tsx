import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import React from "react";
import { IconType } from "react-icons";

const variants = {
  solid: "c-btn",
  outline: "c-btn-outline",
  link: "c-btn-link",
};

export default function Button({
  children,
  onClick,
  icon: Icon,
  variant = "solid",
  ...props
}: {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "outline" | "solid" | "link";
  icon?: IconType | null;
}) {
  return (
    <button onClick={onClick} className={`${variants[variant]} `} {...props}>
      {children}
      {Icon ? <Icon /> : <ArrowUpRightIcon className="h-5 w-5" />}
    </button>
  );
}
