import React from "react";
import Image from "next/image";
import { montserrat } from "@/app/fonts/font";
import WelcomeHeading from "./welcomeHeading/welcomeHeading";
import { motion } from "motion/react";

const Welcome = () => {
  return (
    <div className=" w-full bg-[#FF4C4A] lg:h-[272px] h-auto py-5 flex relative lg:px-0 px-3  ">
      <Image
        src="/images/vectors/Vector-landingPage.png"
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
