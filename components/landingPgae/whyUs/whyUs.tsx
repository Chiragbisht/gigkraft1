"use client";

import React from "react";
import { motion } from "motion/react";
import WhyUsHeading from "./whyUsHeading";
import WhyUsCard from "./whyUsCard";

const WhyUs = () => {
  return (
    <div className="flex w-full bg-[#FFFBF3] py-12 h-auto lg:px-0 px-3">
      <div className="flex flex-col items-center justify-between gap-y-7 w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <WhyUsHeading />
        </motion.div>
        <div className="flex lg:flex-row flex-wrap gap-y-3 w-full justify-between">
          {[
            {
              image: "/images/vectors/quality.png",
              title: "Quality Work",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
            },
            {
              image: "/images/vectors/cost.png",
              title: "No cost until you hire",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
            },
            {
              image: "/images/vectors/secure.png",
              title: "Safe and secure",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.2, // Stagger effect
              }}
            >
              <WhyUsCard
                image={item.image}
                title={item.title}
                description={item.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
