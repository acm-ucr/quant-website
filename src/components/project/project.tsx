"use client";
import { ExternalLink } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectProps {
  image_src: StaticImageData;
  image_alt: string;
  name: string;
  description: string;
  delay?: number;
  link: string;
}

const Project = (props: ProjectProps) => {
  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay },
    }),
  };

  return (
    <motion.div
      custom={props.delay || 0}
      variants={projectVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="max-w-3/4 min-h-fit rounded-lg text-sm max-lg:border-[1px] max-lg:border-quant-gray max-lg:bg-quant-gray-100 lg:flex lg:h-2/6 lg:w-fit lg:flex-col lg:text-lg"
    >
      <div className="flex flex-col items-center justify-center p-4 text-white lg:flex-row lg:items-center lg:justify-center lg:gap-24 lg:p-8 lg:text-white">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-quant-blue-200 lg:flex lg:min-h-44 lg:min-w-48 lg:items-center lg:justify-center lg:rounded-full">
          <Image
            className="w-20 max-lg:w-10"
            src={props.image_src}
            alt={props.image_alt}
          />
        </div>
        <div className="flex flex-col justify-center max-lg:items-center">
          <div className="flex flex-row items-center gap-2 p-3 font-questrial text-lg font-bold lg:gap-3 lg:text-4xl lg:font-bold">
            {props.name}
            <Link
              href={props.link}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-125"
            >
              <ExternalLink className="w-4 sm:w-4 lg:w-6" />
            </Link>
          </div>
          <div className="text-center font-roboto text-sm lg:max-w-5xl lg:p-3 lg:text-left lg:font-roboto lg:text-lg">
            {props.description}
          </div>
        </div>
      </div>
      <div className="lg:w-7/8 lg:border-2"></div>
    </motion.div>
  );
};

export default Project;
