import React from "react";

export default function Button({ children }: { children: React.ReactNode }) {
  return <button className="c-btn">{children}</button>;
}
