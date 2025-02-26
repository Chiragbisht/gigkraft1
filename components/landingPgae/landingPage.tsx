"use client";

import React from "react";
import { motion } from "motion/react";
import Welcome from "./welcome/welcome";
import FindTalent from "./findTalent/findTalent";
import {CategorySection} from "./categorySection/category";
import Findwork from "./findWork/findWork";
import Testimonials from "./testimonials/testimonials";
import WhyUs from "./whyUs/whyUs";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 }, // Increased y movement for smoother effect
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, ease: "easeOut", delay: i * 0.4 }, // Increased duration and delay
  }),
};

const LandingPage = () => {
  return (
    <div className="w-full h-full">
      {[Welcome, FindTalent, CategorySection, Findwork, WhyUs, Testimonials].map(
        (Component, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
          >
            <Component />
          </motion.div>
        )
      )}
    </div>
  );
};

export default LandingPage;
