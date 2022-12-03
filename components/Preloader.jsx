import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

//Variants
const container = {
  hidden: {
    opacity: 1,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      staggerDirection: 1,
      duration: 2,
    },
  },
  exit: {
    y: "-100%",
    transition: {
      duration: 1,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 400,
    rotateY: "90deg",
  },
  show: {
    opacity: 1,
    y: 0,
    rotateY: "0deg",
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const Loader = ({ setLoading }) => {
  const w1 = "REMY";
  const w2 = "MITCH";
  const w3 = "TEP";
  const name = [w1, w2, w3];
  const text = ["FRONT-END", "CREATIVE", "DEVELOPER"];
  return (
    <motion.div
      key="preloader"
      id="preloader"
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      className="flex flex-col 2xl:flex-row h-screen w-screen justify-center 2xl:justify-evenly items-center text-6xl lg:text-9xl font-SeawaveAlt"
      onAnimationComplete={() =>
        setTimeout(() => {
          setLoading(false);
        }, 1000)
      }
    >
      {name.map((word, index) => {
        return (
          <div key={word + index}>
            {word.split("").map((char, index) => (
              <motion.span
                className="inline-block"
                key={word + char + index}
                variants={item}
              >
                {char}
              </motion.span>
            ))}
          </div>
        );
      })}
    </motion.div>
  );
};

export default Loader;
