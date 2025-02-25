"use client";

import { montserrat } from "@/app/fonts/font";
import Image from "next/image";
import { motion } from "motion/react";
import React from "react";

const WelcomeHeading = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="flex flex-row items-center justify-between z-10 max-w-7xl mx-auto w-full"
    >
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 2, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        className="flex flex-col items-start max-w-2xl gap-y-4"
      >
        <h1 className={`text-white text-[32px] font-bold ${montserrat.className}`}>
          Join the world&apos;s largest freelancer community
        </h1>
        <p className={`text-white text-[14px] font-normal ${montserrat.className}`}>
          Find the best talent and best work based on your skills from around the world.
        </p>
        <div className={`flex flex-row items-start gap-x-4 ${montserrat.className}`}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent text-white border-white border text-[12px] font-[600] px-4 py-2 rounded-full"
          >
            Join Now
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white text-[12px] font-[600] px-4 py-2 rounded-full"
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      >
        <Image src="/images/vectors/welcome.png" alt="freelax logo" width={322} height={237} />
      </motion.div>
    </motion.div>
  );
};

export default WelcomeHeading;
