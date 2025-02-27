"use client";

import { useState } from "react";
import { montserrat } from "@/app/fonts/font";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Filter } from "lucide-react";
import { ProjectTypeFilter } from "../projectType";
import { PriceRangeFilter } from "../priceRange";
import { LocationFilter } from "../location";
import { SkillsFilter } from "../skillsFilter";
import { LanguagesFilter } from "../language";

export function FiltersDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div className={`lg:hidden ${montserrat.className}`}>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
        <Button className="bg-primary text-white flex items-center gap-2 rounded h-[35px] px-4 hover:bg-primary/90">
        <Filter className="h-4 w-4 text-white" />
        <span className={`${montserrat.className} text-[12px] font-[700]`}>
          Filter
        </span>
      </Button>
        </DrawerTrigger>
        <DrawerContent className="h-[80vh] p-6 bg-white rounded-t-lg flex flex-col">
          <h2 className={`${montserrat.className} text-xl font-semibold mb-3`}>
            Filters
          </h2>
          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto space-y-3 pr-2">
            <ProjectTypeFilter />
            <PriceRangeFilter />
            <SkillsFilter />
            <LocationFilter />
            <LanguagesFilter />
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
