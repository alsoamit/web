"use client";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import React, { useRef } from "react";
import Button from "../buttons/Button";

export default function Work() {
  return (
    <div className="bg-black">
      <div className="c-container py-24 space-y-16">
        <h2 className="text-left text-5xl font-bold font-heading text-white">
          Work
        </h2>
        {Array.from(Array(3).keys()).map((i) => (
          <WorkCard key={i} />
        ))}
      </div>
    </div>
  );
}

function TechStackCard({
  children,
  rotate,
}: {
  children?: React.ReactNode;
  rotate: MotionValue;
}) {
  return (
    <motion.div
      style={{ rotate }}
      className="h-full w-full p-16 rounded-full border border-white/10 relative"
    >
      {/* <img
        src="/android-chrome-192x192.png"
        className="h-9 w-auto absolute top-0 left-1/2 translate-x-1/2 -translate-y-1/2"
        alt="aws"
      />
      <img
        src="/android-chrome-192x192.png"
        className="h-9 w-auto absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"
        alt="aws"
      />
      <img
        src="/android-chrome-192x192.png"
        className="h-9 w-auto absolute right-0 top-1/2 translate-x-1/2 translate-y-1/2"
        alt="aws"
      />
      <img
        src="/android-chrome-192x192.png"
        className="h-9 w-auto absolute bottom-0 left-1/2 translate-x-1/2 translate-y-1/2"
        alt="aws"
      /> */}
      {children}
    </motion.div>
  );
}

function WorkCard() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.4], [200, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.45], [0.65, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const rotaterev = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [220, 260]);
  const rotate2rev = useTransform(scrollYProgress, [0, 1], [120, 80]);
  const rotate3 = useTransform(scrollYProgress, [0, 1], [-80, -120]);
  const rotate3rev = useTransform(scrollYProgress, [0, 1], [180, 200]);
  const y3 = useTransform(scrollYProgress, [0, 0.45], [-80, 0]);

  return (
    <div
      ref={container}
      className="border sticky top-20 grid grid-cols-3 bg-[#0E161A] border-black/60 dark:border-white/20 rounded-xl overflow-hidden"
    >
      <div className="absolute inset-0 z-0 p-20">
        <motion.div
          style={{ rotate }}
          className="h-[800px] w-[800px] p-16 rounded-full border border-white/10 relative"
        >
          <TechStackCardIcons rotate={rotaterev} />
          <TechStackCard rotate={rotate2}>
            <TechStackCardIcons rotate={rotate2rev} />
            <TechStackCard rotate={rotate3}>
              <TechStackCardIcons rotate={rotate3rev} />
            </TechStackCard>
          </TechStackCard>
        </motion.div>
      </div>

      <div className="p-6 z-10 pt-16 space-y-5">
        <h2 className="text-3xl font-mono text-white font-semibold">
          Syneurgy
        </h2>
        <p className="max-w-xs">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae
          dolores incidunt perspiciatis animi porro accusantium quidem, beatae
          id, rem aperiam qui facilis vero aut temporibus reprehenderit omnis
          suscipit quos? Voluptate?
        </p>
        <div className="pt-4">
          <Button>View Project</Button>
        </div>
      </div>
      <div className="z-10 col-span-2">
        <motion.div className="pr-6 mt-16">
          <motion.div
            style={{ y }}
            className="bg-primary rounded-t-2xl duration-700 shadow-clg py-48"
          ></motion.div>
        </motion.div>
      </div>
    </div>
  );
}

function TechStackCardIcons({ rotate }: { rotate: MotionValue }) {
  return (
    <>
      <motion.img
        src="/android-chrome-192x192.png"
        className="h-9 w-auto absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
        alt="aws"
        style={{ rotate }}
      />
      <motion.img
        src="/android-chrome-192x192.png"
        className="h-9 w-auto absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"
        alt="aws"
        style={{ rotate }}
      />
      <motion.img
        src="/android-chrome-192x192.png"
        className="h-9 w-auto absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2"
        alt="aws"
        style={{ rotate }}
      />
      <motion.img
        src="/android-chrome-192x192.png"
        className="h-9 w-auto absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
        alt="aws"
        style={{ rotate }}
      />
    </>
  );
}
