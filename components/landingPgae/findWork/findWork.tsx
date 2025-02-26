import React from "react";
import Image from "next/image";
import { montserrat } from "@/app/fonts/font";
import FindTalentHeading from "./findWorkHeading";

const Findwork = () => {
  return (
    <div className=" w-full bg-[#FFE4E3] lg:h-[372px] h-auto py-5 flex relative px-4 lg:px-0">
      <div className=" w-[215px] lg:w-[252px] lg:h-[153px]  h-[100px] absolute top-0 left-0 z-0 ">
        <Image
          src="/images/vectors/Vector-pink.png"
          alt="freelax logo"
          width={215}
          height={165}
          className="absolute top-0 left-0 z-0 -scale-x-100"
        />
      </div>
      <FindTalentHeading />
      <div className=" lg:w-[252px] lg:h-[153px] w-[152px] h-[100px] absolute bottom-0 right-0 z-0 ">
        <Image
          src="/images/vectors/Vector-pink.png"
          alt="freelax logo"
          width={252}
          height={153}
          className="absolute bottom-0 left-0 z-0 "
        />
      </div>
    </div>
  );
};

export default Findwork;
