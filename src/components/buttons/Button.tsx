import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

const variants = {
  solid: "c-btn",
  outline: "c-btn-outline",
  link: "c-btn-link",
};

export default function Button({
  link,
  children,
  onClick,
  icon: Icon,
  variant = "solid",
  ...props
}: {
  children: React.ReactNode;
  link?: string;
  onClick?: () => void;
  variant?: "outline" | "solid" | "link";
  icon?: IconType | null;
}) {
  if (link) {
    return (
      <Link href={link} className={`${variants[variant]} `} {...props}>
        {children}
        {Icon ? <Icon /> : <ArrowUpRightIcon className="h-5 w-5" />}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${variants[variant]} `} {...props}>
      {children}
      {Icon ? <Icon /> : <ArrowUpRightIcon className="h-5 w-5" />}
    </button>
  );
}
