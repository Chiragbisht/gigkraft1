import React from "react";
import Image from "next/image";
import { montserrat } from "@/app/fonts/font";
import FindTalentHeading from "./findWorkHeading";

const Findwork = () => {
  return (
    <div className=" w-full bg-[#FFE4E3] h-[372px] flex relative ">
      <div className=" w-[215px] h-[165px] absolute top-0 left-0 z-0 ">
        <Image
          src="/images/vectors/vector-pink.png"
          alt="freelax logo"
          width={215}
          height={165}
          className="absolute top-0 left-0 z-0 -scale-x-100"
        />
      </div>
      <FindTalentHeading />
      <div className=" w-[252px] h-[153px] absolute bottom-0 right-0 z-0 ">
        <Image
          src="/images/vectors/vector-pink.png"
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
