import React from "react";
import { FaGit, FaJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { RiTailwindCssLine } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { easeIn, motion } from "framer-motion";

const iconVariant = (duration) => ({
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-500">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        animate={{ opacity: 0, y: -100 }}
        transition={{ duration: 2 }}
        className="my-10 text-4xl font-thin"
      >
        {" "}
        Technologies
      </motion.h1>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 2 }}
        className="flex flex-wrap items-center justify-center gap-4 mb-5"
      >
        <motion.div
          whileHover={{ scale: 2.1 }}
          variants={iconVariant(1.5)}
          initial="inital"
          animate="animate"
          className="rounded-2xl  border-neutral-800 my-1 "
        >
          <FaJs className="text-5xl  text-yellow-500" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 2.1 }}
          variants={iconVariant(2.5)}
          initial="inital"
          animate="animate"
          className="rounded-2xl  border-neutral-800 my-1 "
        >
          <RiReactjsLine className="text-5xl  text-cyan-500" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 2.1 }}
          variants={iconVariant(1.5)}
          initial="inital"
          animate="animate"
          className="rounded-2xl  border-neutral-800 my-1 "
        >
          <FaHtml5 className="text-5xl  text-orange-500" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 2.1 }}
          variants={iconVariant(2.5)}
          initial="inital"
          animate="animate"
          className="rounded-2xl  border-neutral-800 my-1 "
        >
          <FaCss3 className="text-5xl  text-cyan-500" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 2.1 }}
          variants={iconVariant(1.5)}
          initial="inital"
          animate="animate"
          className="rounded-2xl  border-neutral-800 my-1 "
        >
          <FaLaravel className="text-5xl  text-red-500" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 2.1 }}
          variants={iconVariant(2.5)}
          initial="inital"
          animate="animate"
          className="rounded-2xl  border-neutral-800 my-1 "
        >
          <RiTailwindCssLine className="text-5xl  text-cyan-500" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 2.1 }}
          variants={iconVariant(1.5)}
          initial="inital"
          animate="animate"
          className="rounded-2xl  border-neutral-800 my-1 "
        >
          <SiMysql className="text-5xl  text-white-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
