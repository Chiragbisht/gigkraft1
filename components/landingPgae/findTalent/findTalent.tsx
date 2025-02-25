import React from "react";
import Image from "next/image";
import { montserrat } from "@/app/fonts/font";
import FindTalentHeading from "./findTalentHeading";

const FindTalent = () => {
  return (
    <div className=" w-full bg-[#DDE1F3] h-[272px] flex relative ">
      <div className=" w-[320px] h-[200px] absolute bottom-0 left-0 z-0 ">
        <Image
          src="/images/vectors/Vector-gray.png"
          alt="freelax logo"
          width={320}
          height={200}
          className="absolute bottom-0 left-0 z-0 -scale-x-100"
        />
      </div>
      <FindTalentHeading />
      <div className=" w-[320px] h-[200px] absolute bottom-0 right-0 z-0 ">
        <Image
          src="/images/vectors/Vector-gray.png"
          alt="freelax logo"
          width={320}
          height={200}
          className="absolute bottom-0 left-0 z-0 "
        />
      </div>
    </div>
  );
};

export default FindTalent;
