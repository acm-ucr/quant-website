"use client";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { motion } from "framer-motion";

type DescriptionProps = {
  title: string;
  description: string;
  image: StaticImageData;
};

const animationRight = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
  },
};
const animationUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
  },
};

const Description = ({ title, description, image }: DescriptionProps) => {
  return (
    <div className="relative mx-10 flex h-fit max-w-7xl flex-col px-5 sm:px-10 md:mb-10 md:px-20">
      <motion.div
        className="mb-5 text-center font-hanken text-3xl font-bold text-white md:mb-10 md:text-left md:text-4xl lg:pr-10"
        variants={animationRight}
        transition={{ duration: 0.7, delay: 0.2 }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {title}
      </motion.div>
      <motion.div
        className="mb-10 w-fit overflow-auto text-center font-roboto text-sm text-white md:mb-0 md:pr-12 md:text-left md:text-xl"
        variants={animationUp}
        transition={{ duration: 0.7, delay: 0.2 }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {description}
      </motion.div>
      <div className="flex w-full flex-row justify-end">
        <Image
          src={image}
          alt="description-image"
          className="hidden h-full max-h-28 w-full max-w-28 object-cover md:block"
        />
      </div>
      <div
        className="left-18 absolute bottom-4 hidden h-0.5 bg-white md:block"
        style={{
          width: "calc(100% - 280px)",
        }}
      />
      <div
        className="absolute right-24 top-0 hidden w-0.5 bg-white md:block"
        style={{
          height: "calc(100% - 120px)",
        }}
      />
    </div>
  );
};

export default Description;
