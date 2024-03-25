"use client";

import React, { useRef, useState } from "react";
import Cta from "@/components/buttons/Cta";
import { MotionValue, useScroll, useTransform, motion } from "framer-motion";
import {
  CloudIcon,
  ComputerDesktopIcon,
  CpuChipIcon,
} from "@heroicons/react/16/solid";
import CalendlyModal from "../models/CalendlyModal";
import { CiClock1 } from "react-icons/ci";
import {
  TbBrandGraphql,
  TbBrandNextjs,
  TbBrandTailwind,
  TbBrandThreejs,
  TbBrandTypescript,
} from "react-icons/tb";
import { FaAws, FaDocker, FaPython } from "react-icons/fa";
import { BiLogoKubernetes } from "react-icons/bi";
import { SiOpencv, SiPytorch } from "react-icons/si";
import { HiCloud, HiOutlineCloud, HiOutlineCpuChip } from "react-icons/hi2";
import { CgWebsite } from "react-icons/cg";

export default function Services() {
  const [isOpen, setIsOpen] = useState(false);
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.45], [0.65, 1]);

  return (
    <div className="relative bg-gradient-to-tl from-primary/5 to-black/0 group">
      <CalendlyModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <section className="c-container md:py-32 md:pb-48" ref={container}>
        <div className="scale-150 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.025)_0%,rgba(255,255,255,0)_60%)]"></div>
        <div className="flex flex-col md:flex-row gap-y-20 items-center">
          <div className="flex-1">
            <div className="relative">
              <img
                src="/assets/pattern-triangle.png"
                alt="pattern-triangle"
                className="absolute top-10 -left-8 w-auto h-28 opacity-40 shadow-cmd group-hover:translate-x-5 duration-700"
              />
              <div className="space-y-4 max-w-xl">
                <p className="font-mono text-xs text-primary pb-8">
                  JOIN THE AI REVOLUTION
                </p>
                <motion.h2 className="text-4xl sm:text-5xl font-bold font-heading text-white">
                  Utilize AI leverage before it&apos;s too late.
                </motion.h2>
                <p className="pt-3">
                  Our combined expertise of Web, Cloud and AI has the potential
                  to propel your business to new heights. Stay ahead of the
                  curve by strategically integrating innovation and adaptation
                  into your business strategy, securing your place in the future
                  of industry.
                </p>
                <p className="pt-3">
                  Our combined expertise of Web, Cloud and AI has the potential
                  to propel your business to new heights. Stay ahead of the
                  curve by strategically integrating innovation and adaptation
                </p>
                <div className="pt-7 md:pt-6">
                  <Cta onClick={() => setIsOpen(true)} icon={CiClock1}>
                    Schedule a Meeting
                  </Cta>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 pb-28 sm:pb-0 justify-center md:justify-end">
            <div className="flex flex-col gap-8 relative">
              <motion.div className="absolute z-0 inset-6 p-8">
                <div className="border border-l-0 border-dashed border-black/20 dark:border-white/30 h-full p-1 rounded"></div>
              </motion.div>
              <ServiceCard title="Web" scale={scale} Icon={CgWebsite}>
                <TbBrandNextjs className="h-9 w-auto absolute top-0 right-0 translate-x-1/2 -translate-y-1/2" />
                <TbBrandGraphql className="h-6 text-pink-400 w-auto absolute top-6 left-8 -translate-x-1/2 -translate-y-1/2" />
                <TbBrandThreejs className="h-7 w-auto absolute bottom-0 -translate-x-1/2 translate-y-1/2" />
              </ServiceCard>
              <div className="flex gap-8">
                <span className="block h-32 md:h-40 w-32 md:w-40" />
                <ServiceCard title="AI" Icon={HiOutlineCpuChip} scale={scale}>
                  <SiOpencv className="h-6 w-auto absolute top-0 right-0 translate-x-1/2 -translate-y-1/2" />
                  <SiPytorch className="h-9 text-pink-600 w-auto absolute top-6 left-8 -translate-x-1/2 -translate-y-1/2" />
                  <FaPython className="h-7 w-auto absolute bottom-0 -translate-x-1/2 translate-y-1/2" />
                </ServiceCard>
              </div>
              <ServiceCard title="Cloud" Icon={HiCloud} scale={scale}>
                <FaDocker className="h-8 text-blue-400 w-auto absolute top-16 right-0 translate-x-1/2 -translate-y-1/2" />
                <FaAws className="h-10 w-auto text-orange-400 absolute -top-1 left-8 -translate-x-1/2 -translate-y-1/2" />
                <BiLogoKubernetes className="h-7 w-auto absolute bottom-0 -translate-x-1/2 translate-y-1/2" />
              </ServiceCard>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({
  scale,
  Icon,
  title,
  children,
}: {
  title: string;
  Icon: any;
  scale: MotionValue;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      style={{ scale }}
      className="h-32 md:h-40 z-30 w-32 md:w-40 rounded-xl bg-white/30 dark:bg-[#121316]/60 dark:backdrop-blur-sm backdrop-blur-sm shadow-clg dark:shadow-none border border-black/30 dark:border-white/10 flex justify-center items-center flex-col gap-2 md:gap-4 relative"
    >
      {children}
      <Icon className="text-5xl" />
      <h4 className="font-mono text-xs">{title}</h4>
    </motion.div>
  );
}
