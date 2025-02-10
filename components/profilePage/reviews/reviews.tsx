import { montserrat } from "@/app/fonts/font";
import React from "react";
import { Button } from "../../ui/button";
import Image from "next/image";
import ReviewCarousel from "./reviewCarousel";

const Reviews = () => {
  return (
    <div
      className=" flex flex-col gap-y-2 w-[804px] h-auto rounded-[10px] "
      style={{ boxShadow: "0px 4px 45px 0px #0000001F" }}
    >
      <div className=" flex px-[25px] flex-row items-center justify-between border-b-[1px] h-[55px] border-solid border-[#D9D9D9] py-3  w-full">
        <h1
          className={`${montserrat.className} lg:text-[20px] text-[15px] font-[700] `}
        >
          Reviews
        </h1>
       
      </div>
      <div className=" w-full px-[25px] pb-3 ">
        <ReviewCarousel/>
      </div>
    </div>
  );
};

export default Reviews;
