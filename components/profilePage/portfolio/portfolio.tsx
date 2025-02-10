import { montserrat } from "@/app/fonts/font";
import React from "react";
import { Button } from "../../ui/button";
import Image from "next/image";
import PortfolioCarousel from "./projectsCarousel";

const Portfolio = () => {
  return (
    <div
      className=" flex flex-col gap-y-2 w-[804px] h-auto rounded-[10px] "
      style={{ boxShadow: "0px 4px 45px 0px #0000001F" }}
    >
      <div className=" flex px-[25px] flex-row items-center justify-between border-b-[1px] h-[55px] border-solid border-[#D9D9D9] py-3  w-full">
        <h1
          className={`${montserrat.className} lg:text-[20px] text-[15px] font-[700] `}
        >
          My Portfolio
        </h1>
        <div className=" flex flex-row gap-x-5">
          <Button variant={"ghost"}>
            <Image
              src={"/images/icons/delete.svg"}
              alt="search"
              width={30}
              height={30}
            />
          </Button>
          <Button
            className=" border-primary text-primary rounded-full"
            variant={"outline"}
          >
            <span
              className={`${montserrat.className} text-[12px] font-[700] text-primary`}
            >
              Edit Portfolio
            </span>
          </Button>
        </div>
      </div>
      <div className=" w-full px-[25px] pb-3 ">
        <PortfolioCarousel />
      </div>
    </div>
  );
};

export default Portfolio;
