import { montserrat } from "@/app/fonts/font";
import { Button } from "@/components/ui/button";
import React from "react";

interface HeadingProps {
  userName: string;
  UserType: string;
}

const Heading = ({ userName, UserType }: HeadingProps) => {
  return (
    <div className="w-full justify-between items-center flex flex-row px-4 sm:px-6 lg:px-0">
      <p className={`${montserrat.className} text-[20px] font-[400] text-black`}>
        Welcome Back, <span className="font-[700]">{userName}</span>
      </p>

      {UserType !== "Freelancer" && (
        <Button className="bg-primary text-white hover:bg-primary/90 rounded-full h-[35px]">
          <span className={`${montserrat.className} text-[12px] font-[700] text-white`}>
            Post a New Job
          </span>
        </Button>
      )}
    </div>
  );
};

export default Heading;
