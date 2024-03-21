"use client";

import React, { useRef } from "react";
import Cta from "@/components/buttons/Cta";
import { MotionValue, useScroll, useTransform, motion } from "framer-motion";
import {
  CloudIcon,
  ComputerDesktopIcon,
  CpuChipIcon,
} from "@heroicons/react/16/solid";

export default function Services() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.45], [0.65, 1]);
  const y3 = useTransform(scrollYProgress, [0, 0.45], [-80, 0]);

  return (
    <div className="relative bg-gradient-to-t from-white/5 to-black/0 group">
      <section className="c-container md:py-32" ref={container}>
        <div className="scale-150 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.025)_0%,rgba(255,255,255,0)_60%)]"></div>
        {/* <motion.div className="absolute bottom-40 opacity-15" style={{ y }}>
        <ComputerDesktopIcon className="h-9" />
      </motion.div> */}
        <div className="flex flex-col md:flex-row gap-y-20 items-center">
          <div className="flex-1">
            <div className="relative">
              <img
                src="/assets/pattern-triangle.png"
                alt="pattern-triangle"
                className="absolute top-10 -left-8 w-auto h-40 opacity-40 shadow-cmd group-hover:translate-x-5 duration-700"
              />
              <div className="space-y-4 max-w-xl">
                <p className="font-mono text-xs text-primary pb-8">
                  JOIN THE AI REVOLUTION
                </p>
                <motion.h2 className="text-4xl sm:text-5xl font-bold font-heading text-white">
                  Future-proof your company, or perish away
                  {/* Gateway to an ai centric future */}
                </motion.h2>
                <p className="pt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                  voluptatum id eligendi ab distinctio amet. Lorem ipsum dolor
                  sit, amet consectetur adipisicing elit. Lorem, ipsum dolor.
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
                <div className="pt-7">
                  <Cta>Get in touch</Cta>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 justify-end pb-28">
            <div className="flex flex-col gap-8 relative">
              <motion.div
                className="absolute z-0 inset-6 p-8"
                // style={{ scale }}
              >
                <div className=" border-l-0 border-black/20 dark:border-white/30 h-full p-1 rounded relative">
                  <div className="border border-l-0 border-dashed border-black/20 dark:border-white/30 h-full p-1 rounded">
                    <div className="border border-l-0 border-dashed border-black/20 dark:border-white/30 h-full p-1 rounded">
                      {" "}
                      <div className="border border-l-0 border-dashed border-black/20 dark:border-white/30 h-full p-1 rounded">
                        {" "}
                        <div className="border border-l-0 border-dashed border-black/20 dark:border-white/30 h-full p-1 rounded">
                          {" "}
                          <div className="border border-l-0 border-dashed border-black/20 dark:border-white/30 h-full p-1 rounded">
                            {" "}
                            <div className="border border-l-0 border-dashed border-black/20 dark:border-white/30 h-full p-1 rounded">
                              {" "}
                              {/* <div className="border border-dashed border-black/20 dark:border-white/30 h-full p-1 rounded">
                              {" "} */}
                              <div className=" border-l-0 border-black/20 dark:border-white/30 h-full p-1 rounded">
                                <img
                                  src="/android-chrome-192x192.png"
                                  className="h-6 w-auto absolute top-2 right-2"
                                  alt="aws"
                                />
                              </div>
                              {/* </div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              <ServiceCard
                title="Web"
                scale={scale}
                Icon={ComputerDesktopIcon}
              />
              <div className="flex gap-8">
                <span className="block h-40 w-40" />
                <ServiceCard title="AI" Icon={CpuChipIcon} scale={scale} />
              </div>
              <ServiceCard title="Cloud" Icon={CloudIcon} scale={scale} />
            </div>
          </div>
        </div>
        {/* <div className="col-span-2 flex justify-center pt-32">
          <Cta>Get in touch</Cta>
        </div> */}
      </section>
    </div>
  );
}

function ServiceCard({
  scale,
  Icon,
  title,
}: {
  title: string;
  Icon: any;
  scale: MotionValue;
}) {
  return (
    <motion.div
      style={{ scale }}
      className="h-40 z-30 w-40 rounded-xl bg-white/30 dark:bg-white/10 dark:backdrop-blur-sm backdrop-blur-md shadow-clg dark:shadow-none border border-black/30 dark:border-white/10 flex justify-center items-center flex-col gap-4 relative"
    >
      <img
        src="/android-chrome-192x192.png"
        className="h-9 w-auto absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"
        alt="aws"
      />
      <img
        src="/android-chrome-192x192.png"
        className="h-6 w-auto absolute top-6 left-8 -translate-x-1/2 -translate-y-1/2"
        alt="aws"
      />
      <img
        src="/android-chrome-192x192.png"
        className="h-7 w-auto absolute bottom-0 -translate-x-1/2 translate-y-1/2"
        alt="aws"
      />
      <Icon className="h-14" />
      <h4 className="font-mono text-xs">{title}</h4>
    </motion.div>
  );
}
