"use client";
import Image from "next/image";
import CHART from "@/public/chart.svg";
import { motion } from "motion/react";

const Landing = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center">
      <motion.div
        transition={{
          duration: 0.7,
          delay: 0.2,
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="absolute font-jost text-6xl font-bold md:text-9xl"
      >
        Welcome to Quant!
      </motion.div>
      <Image src={CHART} alt="Line chart" />
    </div>
  );
};

export default Landing;
