import React from "react";
import Image from "next/image";
import { montserrat } from "@/app/fonts/font";
import WelcomeHeading from "./welcomeHeading/welcomeHeading";
import { motion } from "motion/react";

const Welcome = () => {
  return (
    <div className=" w-full bg-[#FF4C4A] h-[272px] flex relative ">
      <Image
        src="/images/vectors/vector-landingPage.png"
        alt="freelax logo"
        width={342}
        height={249}
        className=" absolute bottom-1 left-0 z-0"
      />
      
      <WelcomeHeading/>
    </div>
  );
};

export default Welcome;
