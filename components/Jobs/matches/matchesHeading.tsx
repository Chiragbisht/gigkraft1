import { montserrat } from "@/app/fonts/font";
import { Button } from "@/components/ui/button";
import React from "react";
import { Filter } from "lucide-react";
import { FiltersDrawer } from "@/components/searchPage/filters/filtersDrawer/filtersDrawer";


const MatchHeading = () => {
  return (
    <div className="w-full mx-auto flex justify-between items-center ">
      {/* Heading */}
      <p className={`${montserrat.className} text-[20px] font-[400] text-black`}>
        <span className="font-[600]">Best Matches for you</span>
      </p>

      {/* Filter Button
      <FiltersDrawer/> */}
    </div>
  );
};

export default MatchHeading;
