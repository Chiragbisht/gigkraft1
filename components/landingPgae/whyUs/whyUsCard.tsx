import { montserrat } from "@/app/fonts/font";
import Image from "next/image";
import React from "react";
interface whyUsCardProps{
    image:string
    title:string
    description:string 
}

const WhyUsCard = ({image,title,description}:whyUsCardProps) => {
  return (
    <div className="w-full max-w-[360px] h-auto flex flex-col items-center justify-center gap-y-4 px-4">
      <div className="w-[87px] h-[113px]">
        <Image
          src={image}
          alt="GigKraft Logo"
          width={322}
          height={237}
          className="w-full h-auto"
          draggable={false}
        />
      </div>
      <div className={` text-center flex flex-col gap-y-2 ${montserrat.className}`}>
        <h1 className="text-[28px] md:text-3xl font-bold">{title}</h1>
        <p className="text-base text-[#a9a9a9] text-[16px] max-w-lg font-normal">
        {description}
        </p>
      </div>
    </div>
  );
};

export default WhyUsCard;
