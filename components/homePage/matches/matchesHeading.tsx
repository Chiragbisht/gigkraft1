import { montserrat } from "@/app/fonts/font";
import { Button } from "@/components/ui/button";
import React from "react";
import { Filter } from "lucide-react";

const MatchHeading = () => {
  return (
    <div className="w-full mx-auto flex justify-between items-center ">
      {/* Heading */}
      <p className={`${montserrat.className} text-[20px] font-[400] text-black`}>
        <span className="font-[600]">Best Matches for you</span>
      </p>

      {/* Filter Button */}
      <Button className="bg-primary text-white flex items-center gap-2 rounded h-[35px] px-4 hover:bg-primary/90">
        <Filter className="h-4 w-4 text-white" />
        <span className={`${montserrat.className} text-[12px] font-[700]`}>
          Filter
        </span>
      </Button>
    </div>
  );
};

export default MatchHeading;
