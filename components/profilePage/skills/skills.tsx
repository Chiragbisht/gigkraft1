import { montserrat } from "@/app/fonts/font";
import { skillsData, verificationItems } from "@/utils/constant";
import React from "react";

const Skills = () => {
  return (
    <div
      className=" w-[390px] h-[auto] rounded-[10px] "
      style={{ boxShadow: "0px 4px 45px 0px #0000001F" }}
    >
      <div className=" flex items-center border-b-[1px] h-[55px] border-solid border-[#D9D9D9]">
        <h1 className="lg:text-[20px] text-[15px] font-[700] px-[21px]">
         Top Skills
        </h1>
      </div>
      <div className={`${montserrat.className} space-y-3 px-[21px] py-[13px] `}>
        {skillsData.map((item, index) => (
          <div key={index} className="flex items-start ">
            <p
              className={`${montserrat.className} text-[14px] font-[500] `}
            >
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
