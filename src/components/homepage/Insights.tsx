"use client";
import { ArrowLongRightIcon } from "@heroicons/react/16/solid";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";
import Button from "../buttons/Button";

export default function Insights({ posts }: { posts: any }) {
  const gallery = useRef(null);

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.3], [200, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.45], [200, 0]);
  const y3 = useTransform(scrollYProgress, [0.3, 0.55], [200, 0]);

  return (
    <>
      <div className="c-container space-y-8 pt-8 pb-8 md:pb-24" ref={gallery}>
        <h2 className="text-left text-4xl sm:text-5xl font-bold font-heading text-white">
          Insights
        </h2>
        <p className="max-w-2xl">
          Explore our curated collection of three insightful and up-to-date tech
          articles. Delve into recent trends, analyses, and facts that can
          inform and inspire.
        </p>
        <div className="gap-12 py-8 flex flex-col md:flex-row">
          <InsightsCard data={posts[0]} y={y} large />
          <div className="flex md:flex-1 flex-col sm:flex-row md:flex-col gap-12 md:gap-8">
            <InsightsCard data={posts[1]} y={y2} />
            <InsightsCard data={posts[1]} y={y3} />
          </div>
        </div>
      </div>
      {/* <motion.div
        className="relative mt-[100px] overflow-x-clip"
        style={{ height }}
      >
        <motion.div className="circle absolute z-10 h-[1550%] w-[120%] bg-white dark:bg-[#121316] left-[-10%]"></motion.div>
      </motion.div> */}
    </>
  );
}

function InsightsCard({
  y,
  large = false,
  data,
}: {
  y: MotionValue;
  data: any;
  large?: boolean;
}) {
  return (
    <motion.div
      style={{ y }}
      className={`space-y-4 ${large ? "md:col-span-2 md:flex-[2]" : "md:space-y-2"}`}
    >
      <motion.img
        src={
          data?.coverImage.url ||
          "https://images.unsplash.com/photo-1680536555364-9dd4a1ab313e?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt=""
        className={`w-full object-cover h-60 ${large ? "sm:h-96" : "md:h-52"}`}
      />
      <h3
        className={`text-white font-semibold font-mono ${large ? "text-lg md:text-3xl md:pb-6 md:pt-3" : "text-lg"}`}
      >
        {data?.title}
      </h3>
      <p className={large ? "" : "md:hidden"}>{data?.brief}</p>
      {/* <div className={`hidden space-y-4 ${large ? "md:block" : ""}`}>
        {data?.brief}
      </div> */}
      {large ? (
        <>
          <div className="pt-8 md:flex gap-3 hidden">
            <Button link={`/insights/${data?.slug}`}>Read More</Button>
            {/* <Button>View All</Button> */}
          </div>
          <Link
            href={`/insights/${data?.slug}`}
            className="flex md:hidden items-center gap-2 text-base pt-5"
          >
            Read More
            <ArrowLongRightIcon className="h-5" />
          </Link>
        </>
      ) : (
        <Link
          href={`/insights/${data?.slug}`}
          className="flex items-center gap-2 text-base pt-5"
        >
          Read More
          <ArrowLongRightIcon className="h-5" />
        </Link>
      )}
    </motion.div>
  );
}
