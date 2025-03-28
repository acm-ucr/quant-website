"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import leftLine from "/public/header/left-line.svg";
import rightLine from "/public/header/right-line.svg";
import { ChevronLeft, ChevronRight } from "lucide-react";

type HeaderProps = {
  children: React.ReactNode;
  variant?: "arrows" | "underline" | "arrowsTwo";
};

const Header = ({ children, variant = "arrows" }: HeaderProps) => {
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.div
      className="w-full py-5"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      {variant === "arrows" ? (
        <div className="hidden w-full py-5 md:flex">
          <div className="mx-auto flex w-11/12 items-center justify-between xl:w-3/4">
            <Image
              src={leftLine}
              alt="left-line"
              aria-hidden="true"
              className="flex w-1/3"
            />
            <div className="text-center font-hanken text-5xl font-bold text-white">
              {children}
            </div>
            <Image
              src={rightLine}
              alt="right-line"
              aria-hidden="true"
              className="flex w-1/3"
            />
          </div>
        </div>
      ) : variant === "underline" ? (
        <div className="hidden w-full py-5 md:flex">
          <div className="mx-auto flex w-3/4 flex-col items-center justify-center">
            <div className="relative inline-block text-center font-hanken text-5xl font-bold text-white">
              {children}
              <div className="mt-0 h-1 w-full bg-white"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="hidden w-full items-center justify-center gap-x-12 py-5 md:flex">
          <ChevronLeft
            aria-label="left-arrow"
            aria-hidden="true"
            className="flex h-full"
          />
          <div className="text-center font-hanken text-5xl font-bold text-white">
            {children}
          </div>
          <ChevronRight
            aria-label="right-arrow"
            aria-hidden="true"
            className="flex h-full"
          />
        </div>
      )}

      <div className="mx-auto flex w-full flex-col items-center justify-center gap-4 py-5 md:hidden">
        <div className="relative inline-block text-center font-hanken text-2xl font-bold text-white">
          {children}
          <div className="mt-0 h-1 w-full bg-white" />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
