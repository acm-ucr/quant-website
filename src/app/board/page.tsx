"use client";

import Header from "../../components/header";
import Boards from "@/components/board/boards";
import { motion } from "framer-motion";

const BoardPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center justify-center gap-2 sm:gap-10"
    >
      <Header>OUR BOARD</Header>

      <motion.div
        className="mb-20 flex w-full justify-center"
        initial={{ opacity: 0.6, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.1,
          scale: { damping: 10, stiffness: 100 },
        }}
      >
        <Boards />
      </motion.div>
    </motion.div>
  );
};

export default BoardPage;
