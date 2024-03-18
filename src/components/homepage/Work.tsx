"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";

export default function Work() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.5], [200, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.45], [0.65, 1]);
  const y3 = useTransform(scrollYProgress, [0, 0.45], [-80, 0]);

  return (
    <>
      <div className="c-container py-24" ref={container}>
        <div className="grid grid-cols-4 border border-black/60 dark:border-white/20 rounded-xl overflow-hidden">
          <div className="p-6">
            <h2 className="text-3xl">Syneurgy</h2>
            <p className="max-w-xs">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. In.
            </p>
            <Link href={"#"}>View Project</Link>
          </div>
          <div className="col-span-3">
            <motion.div className="py-8" style={{ y }}>
              <motion.div className="bg-primary hover:-translate-y-0 duration-700 shadow-clg translate-y-20 hover:-translate-x-40 translate-x-20 rounded-xl py-60"></motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
