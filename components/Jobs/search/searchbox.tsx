import { montserrat } from "@/app/fonts/font";
import React from "react";

const Searchbox = () => {
  return (
    <div
      className={`${montserrat.className} flex flex-row  w-full mx-auto h-[53px] rounded-[10px] `}
      style={{ boxShadow: "0px 4px 45px 0px #0000001F" }}
    >
      <input
        type="text"
        placeholder="Search Jobs"
        className="w-[85%] h-full pl-10 rounded focus:outline-none focus:ring-0 focus:border-transparent "
      />
      <button className="bg-primary w-[15%] text-white hover:bg-primary/90 rounded h-full ">
        <span
          className={`${montserrat.className} text-[12px] font-[700] text-white`}
        >
          Search 
        </span>
      </button>
    </div>
  );
};

export default Searchbox;
