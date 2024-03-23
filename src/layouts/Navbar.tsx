import Button from "@/components/buttons/Button";
import React from "react";

export default function Navbar() {
  return (
    <section className="top-0 left-0 right-0 pt-2 z-50 bg-transparent absolute">
      <div className="c-container">
        <div className="h-12 backdrop-blur-sm font-mono items-center flex justify-between z-50">
          <div className="flex items-center gap-2">
            <img
              src="/android-chrome-192x192.png"
              alt="alegance"
              className="h-7 w-7 rounded-full"
            />
            <p className="font-semibold text-base sm:text-lg text-white">
              Alegance
            </p>
          </div>
          <div className="flex">
            <Button variant="outline">Contact</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// <section className="fixed top-0 left-0 right-0 mt-2 z-50">
// <div className="c-container-sm">
//         <div className="h-12 px-6 dark:bg-black/40 rounded-xl border border-black/5 backdrop-blur-sm bg-white/80 shadow-clg font-mono items-center  flex justify-between z-50">
//           <div className="flex items-center gap-2">
//             <img
//               src="/android-chrome-192x192.png"
//               alt="alegance"
//               className="h-6 w-6 rounded-full"
//             />
//             <p>Alegance</p>
//           </div>
//           <div className="flex">
//             <Bars3Icon className="w-4" />
//           </div>
//         </div>
//       </div>
