"use client";

import { montserrat } from "@/app/fonts/font";
import Image from "next/image";
import { motion } from "motion/react";
import React from "react";

const FindWorkHeading = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }} // Smooth fade-in effect
      className="flex flex-row-reverse items-center justify-center z-10 max-w-7xl mx-auto w-full"
    >
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.5 }} // Delayed slide-in
        className="flex flex-col items-start max-w-[525px] gap-y-4 gap-x-4"
      >
        <h1 className={`text-[#2A1E17] text-[24px] font-bold ${montserrat.className}`}>
          Find great works in your way
        </h1>
        <p className={`text-[#2A1E17] text-[14px] font-normal ${montserrat.className}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          exercitationem mollitia tempora aliquam eligendi?
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 1 }} // Button appears after content
          className={`flex flex-row items-start gap-x-4 ${montserrat.className}`}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-[#4260DA] text-white font-[600] border-white border text-[14px] px-4 py-2 rounded-full"
          >
            Find Opportunity
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2.2, ease: "easeOut", delay: 0.7 }} // Image slides in after text
      >
        <Image
          src="/images/vectors/laptop.png"
          alt="freelax logo"
          width={322}
          height={237}
          className="mt-[37px]"
        />
      </motion.div>
    </motion.div>
  );
};

export default FindWorkHeading;
