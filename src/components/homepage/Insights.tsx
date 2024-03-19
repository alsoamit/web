"use client";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";
import Button from "../buttons/Button";

export default function Insights() {
  const gallery = useRef(null);

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0.2, 0.8], [50, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3], [200, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.45], [200, 0]);
  const y3 = useTransform(scrollYProgress, [0.3, 0.55], [200, 0]);

  return (
    <>
      <div className="c-container space-y-8  py-24" ref={gallery}>
        <h2 className="text-left text-5xl font-bold font-heading text-white">
          Insights
        </h2>
        <p className="max-w-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          voluptatum libero sequi debitis inventore cumque aspernatur quaerat
          obcaecati culpa ratione voluptate, unde vitae suscipit autem, odio id.
          Inventore, ipsa dolorem.
        </p>
        <div className="grid grid-cols-3 gap-12 py-8">
          <InsightsCard y={y} />
          <InsightsCard y={y2} />
          <InsightsCard y={y3} />
        </div>
      </div>
      <div className="flex justify-center">
        <Button>Read More</Button>
      </div>
      <motion.div className="relative mt-[100px]" style={{ height }}>
        <motion.div className="circle absolute z-10 h-[1550%] w-[120%] bg-white dark:bg-[#0E161A] left-[-10%]"></motion.div>
      </motion.div>
    </>
  );
}

function InsightsCard({ y }: { y: MotionValue }) {
  return (
    <motion.div style={{ y }} className="space-y-4">
      <motion.img
        src="https://images.unsplash.com/photo-1680536555364-9dd4a1ab313e?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="w-full h-60 object-cover"
      />
      <h3 className="text-white font-semibold text-lg font-mono">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus?
      </h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
        repellendus deleniti labore, quae optio ducimus a magnam autem corrupti
        aliquam illo, animi expedita sit ipsa!
      </p>
      <Link href={"#"} className="flex items-center gap-2 text-base pt-5">
        Read More
        <ArrowRightIcon className="h-4" />
      </Link>
    </motion.div>
  );
}
