import { Bars3Icon } from "@heroicons/react/16/solid";
import React from "react";

export default function Navbar() {
  return (
    <section className="fixed top-0 left-0 right-0 mt-2 z-50">
      <div className="c-container-sm">
        <div className="h-12 px-6 dark:bg-black/40 rounded-xl border border-black/5 backdrop-blur-sm bg-white/80 shadow-clg font-mono items-center  flex justify-between z-50">
          <p>Alegance</p>
          <div className="flex">
            <Bars3Icon className="w-4" />
          </div>
        </div>
      </div>
    </section>
  );
}
