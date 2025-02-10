import { montserrat } from "@/app/fonts/font";
import { verificationItems } from "@/utils/constant";
import React from "react";

const Verfication = () => {
  return (
    <div
      className=" w-[390px] h-[auto] rounded-[10px] "
      style={{ boxShadow: "0px 4px 45px 0px #0000001F" }}
    >
      <div className=" flex items-center border-b-[1px] h-[55px] border-solid border-[#D9D9D9]">
        <h1 className="lg:text-[20px] text-[15px] font-[700] px-[21px]">
          Verification
        </h1>
      </div>
      <div className={`${montserrat.className} space-y-6 px-[21px] py-[13px] `}>
        {verificationItems.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-gray-500">
                <item.icon className="w-5 h-5" />
              </div>
              <span className="text-[#2A1E17] text-[15px] font-[500]">
                {item.label}
              </span>
            </div>
            <button className="text-blue-500 hover:text-blue-600 text-[15px] font-[500]">
              Verify
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Verfication;
