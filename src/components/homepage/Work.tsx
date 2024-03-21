"use client";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import React, { useRef } from "react";
import Button from "../buttons/Button";
import { IWorkItem, work } from "@/config/work.config";

export default function Work() {
  return (
    <div className="bg-black">
      <div className="c-container py-24 space-y-16">
        <h2 className="text-left text-4xl sm:text-5xl font-bold font-heading text-white">
          Work
        </h2>
        {work.map((i) => (
          <WorkCard key={i.id} data={i} />
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

function WorkCard({ data }: { data: IWorkItem }) {
  const { title, description, thumbnail, cta } = data;

  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.4], [200, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const rotaterev = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [220, 260]);
  const rotate2rev = useTransform(scrollYProgress, [0, 1], [120, 80]);
  const rotate3 = useTransform(scrollYProgress, [0, 1], [-80, -120]);
  const rotate3rev = useTransform(scrollYProgress, [0, 1], [180, 200]);

  return (
    <div
      ref={container}
      className="border sticky top-0 md:top-20 grid grid-cols-1 md:grid-cols-3 bg-[#121316]/60 border-black/60 dark:border-white/20 md:rounded-xl overflow-hidden backdrop-blur-xl"
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

      <div className="p-6 z-10 pt-12 md:pt-16 space-y-5">
        <h2 className="text-3xl font-mono text-white font-semibold">{title}</h2>
        <p className="max-w-xs">{description}</p>
        <div className="pt-4">
          <Button icon={cta.icon}>{cta.content}</Button>
        </div>
      </div>
      <div className="z-10 md:col-span-2">
        <motion.div className="md:pr-6 mt-4 md:mt-16">
          <motion.div
            style={{ y }}
            className="bg-black md:rounded-t-2xl overflow-hidden duration-700 shadow-clg h-64 md:h-96"
          >
            <img
              src={thumbnail}
              alt={title}
              className="object-cover h-full w-full block"
            />
          </motion.div>
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
