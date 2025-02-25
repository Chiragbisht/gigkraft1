import { montserrat } from "@/app/fonts/font";
import Image from "next/image";
import React from "react";

const FindTalentHeading = () => {
  return (
    <div className=" flex flex-row-reverse items-center justify-center z-10 max-w-7xl mx-auto w-full">
      <div className=" flex flex-col items-start max-w-[525px] gap-y-4 ">
        <h1
          className={` text-[#2A1E17] text-[24px] font-bold ${montserrat.className}`}
        >
          Find best Talents
        </h1>
        <p
          className={` text-[#2A1E17] text-[14px] font-normal ${montserrat.className}`}
        >
          Find the best Talent and best works based on your skills from around
          the world.
        </p>
        <div
          className={` flex flex-row items-start gap-x-4 ${montserrat.className}`}
        >
          <button className=" bg-[#4260DA] text-white font-[600] border-white border text-[14px]  px-4 py-2 rounded-full">
            Find Talent
          </button>
        </div>
      </div>
      <Image
        src="/images/vectors/talent.png"
        alt="freelax logo"
        width={322}
        height={237}
        className=" mt-[37px]"
      />
    </div>
  );
};

export default FindTalentHeading;
