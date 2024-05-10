"use client";
import React from "react";
import { delay, motion, stagger } from "framer-motion";
import { Opacity } from "@mui/icons-material";

interface AnimatedProp {
  className?: string;
  text: string;
}

const AnimatedH1 = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.3,
      staggerChildren: 0.1,
    },
  },
};

const AnimatedSpan = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText: React.FC<AnimatedProp> = ({ className, text }) => {
  return (
    <div className="w-full mx-auto py-2 flex item-center justify-between text-center overflow-hidden ">
      <motion.h1
        className={`inline-block w-full text-dark font-bold capitalize dark:text-light ${className} `}
        variants={AnimatedH1}
        initial="initial"
        animate="animate"
        // initial={{
        //   opacity: 1,
        // }}
        // animate={{
        //   opacity: 1,
        //   transition: {
        //     delay: 0.5,
        //     staggerChildren: 0.1,
        //   },
        // }}
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={word + "-" + index}
            className="inline-block"
            variants={AnimatedSpan}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
