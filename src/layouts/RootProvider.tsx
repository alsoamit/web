"use client";

import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function RootProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: any) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
