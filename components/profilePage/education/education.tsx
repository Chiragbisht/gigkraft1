"use client";

import { montserrat } from "@/app/fonts/font";
import React, { useState } from "react";
import { Button } from "../../ui/button";
import Image from "next/image";
import InstitutionDetails from "./institutionDetails";
import { educationData } from "@/utils/constant";

const Education = () => {
  const [showAll, setShowAll] = useState(false); // State to toggle view
  const visibleExperiences = showAll
    ? educationData
    : educationData.slice(0, 2); // Show only 2 initially

  return (
    <div
      className="flex flex-col gap-y-2 lg:w-[804px] w-[340px] md:w-[580px] sm:w-[480px]  h-auto rounded-[10px]"
      style={{ boxShadow: "0px 4px 45px 0px #0000001F" }}
    >
      {/* Header */}
      <div className="flex px-[25px] flex-row items-center justify-between border-b-[1px] h-[55px] border-solid border-[#D9D9D9] py-3 w-full">
        <h1
          className={`${montserrat.className} lg:text-[20px] text-[15px] font-[700]`}
        >
          Education
        </h1>
        <div className="flex flex-row lg:gap-x-5 gap-x-1">
          <Button variant={"ghost"}>
            <Image
              src={"/images/icons/delete.svg"}
              alt="delete"
              width={30}
              height={30}
            />
          </Button>
          <Button
            className="border-primary text-primary rounded-full"
            variant={"outline"}
          >
            <span
              className={`${montserrat.className} lg:text-[12px] text-[10px] font-[700] text-primary`}
            >
              Edit Education
            </span>
          </Button>
        </div>
      </div>

      {/* Work Experience List */}
      <div className="w-full px-[25px] gap-y-4">
        {visibleExperiences.map((exp) => (
          <InstitutionDetails
            key={exp.id}
            degree={exp.degree}
            institute={exp.institute}
            dateOfStudy={exp.dateOfStudy}
            description={exp.description}
          />
        ))}
      </div>

      {/* View More Button */}
      {educationData.length > 2 && (
        <div className="w-full pb-3 flex items-center justify-center">
          <Button
            variant="link"
            className="text-[#4285F4]"
            onClick={() => setShowAll(!showAll)}
          >
            <span className={`${montserrat.className} text-[16px] font-[600]`}>
              {showAll ? "View Less" : "View More"}
            </span>
          </Button>
        </div>
      )}
    </div>
  );
};

export default Education;
