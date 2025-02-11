"use client";

import { useState } from "react";
import { montserrat } from "@/app/fonts/font";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import StatsSection from "./reviewSection";

export default function FreelancerProfileCard() {
  const [isExpanded, setIsExpanded] = useState(false);

  const description = `I am a talented and experienced Graphic Design Designer looking to be hired. 
    In my work experience, I have versatility as a Website Design Developer working on many different projects. 
    I will try to put in my best foot and help you in accomplishing your goals to reach your targeted task. 
    I will involve myself sincerely in your team and can handle as an autonomous person too. 
    You can trust me for any of your assignments, and I will deliver the result in a prompt manner. 
    I am looking forward to being outsourced by you.`;

  const truncatedDescription = description.slice(0, 150) + "..."; // Show only the first 150 characters

  return (
    <div
      className="flex flex-row justify-normal gap-x-[20px] py-[30px] px-5 lg:w-[804px] w-[340px] md:w-[580px] sm:w-[480px] h-auto rounded-[10px] bg-white" 
      style={{ boxShadow: "0px 4px 45px 0px #0000001F" }}
    >
      <div className="flex flex-col gap-y-3">
        <div className="lg:w-[218px] lg:h-[219px] w-[100px] h-[100px] rounded-[9px] overflow-hidden">
          <Image
            src={"/images/pictures/ben.jpg"}
            alt="user"
            height={219}
            width={218}
            className="rounded-[9px] object-cover h-full w-full"
          />
        </div>
        <div className="flex flex-col items-start gap-y-2 text-[#2A1E17]/90">
          <p className={`${montserrat.className} text-[12px]`}>Location</p>
          <p className={`${montserrat.className} text-[12px]`}>Location Time</p>
          <p className={`${montserrat.className} text-[12px]`}>Joined Date</p>
        </div>
      </div>
      <div className="flex flex-col w-full gap-y-1">
        <div className="w-full justify-between lg:items-center justify-start flex flex-row">
          <div className="flex flex-col">
            <h2 className={`${montserrat.className} text-[24px] font-[700]`}>
              User Name
            </h2>
            <p className={`${montserrat.className} text-[14px] text-[#2A1E17]/50`}>
              User Experience Designer, Graphic Designer
            </p>
          </div>
          <Button
            variant="outline"
            className="text-red-500 border-red-500 hover:bg-red-50 rounded-full"
          >
            <span className={`${montserrat.className} lg:text-[12px] text-[10px] font-[700] text-red-500`}> 
              Edit Profile
            </span>
          </Button>
        </div>
        <StatsSection />
        <div className="w-full flex flex-col gap-y-2">
          <p className={`${montserrat.className} text-[12px] text-[#2A1E17]/50`}>
            {isExpanded ? description : truncatedDescription}
          </p>
          <Button
            variant="ghost"
            className={`${montserrat.className} text-[12px] font-[700] text-red-500 hover:text-red-500/90 w-16`}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "See Less" : "See More"}
          </Button>
        </div>
      </div>
    </div>
  );
}
