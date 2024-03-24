"use client";

import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function Testimonials() {
  const gallery = useRef(null);

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-1200, 0]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-800, 0]);
  const y3 = useTransform(scrollYProgress, [0, 1], [-400, 0]);

  return (
    <div
      className="gallery dark:bg-[#121316] border-t border-b border-black/30"
      ref={gallery}
    >
      <div className="relative top-[-10vh] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 c-container overflow-hidden">
        <TestimonialColumn y={y} />
        <TestimonialColumn y={y2} />
        <TestimonialColumn y={y3} />
      </div>
    </div>
  );
}

function TestimonialColumn({ y }: { y: MotionValue }) {
  return (
    <motion.div
      className="space-y-6 relative h-full min-w-[250px] flex flex-col overflow-hidden"
      style={{ y }}
    >
      {Array.from(Array(8).keys()).map((i) => (
        <div
          key={i}
          className="bg-white dark:bg-primary border flex flex-col justify-center items-center dark:border-white/20 border-black/30 h-80 rounded-xl shadow-clg p-6 gap-6"
        >
          <img
            src="/android-chrome-192x192.png"
            alt="alegance"
            className="h-16 w-16 rounded-full"
          />
          <h2 className="text-center text-white font-bold">Viraj Deshwal</h2>
          <p className="text-center text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem
            ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
          <p className="text-xs font-mono font-semibold text-white">
            Founder, Alegance
          </p>
        </div>
      ))}
    </motion.div>
  );
}
