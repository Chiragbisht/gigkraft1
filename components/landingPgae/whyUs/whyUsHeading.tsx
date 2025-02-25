import { montserrat } from "@/app/fonts/font";
import React from "react";

const WhyUsHeading = () => {
  return (
    <div className="  flex flex-col items-center justify-start gap-y-4">
      <h1 className={`text-[32px] font-bold ${montserrat.className}`}>
        Why GigKraft?
      </h1>
      <p
        className={`text-[18px] max-w-lg text-center font-normal ${montserrat.className}`}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
};

export default WhyUsHeading;
