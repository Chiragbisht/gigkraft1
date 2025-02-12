import { montserrat } from "@/app/fonts/font";
import { LanguagesFilter } from "./language";
import { LocationFilter } from "./location";
import { PriceRangeFilter } from "./priceRange";
import { ProjectTypeFilter } from "./projectType";
import { SkillsFilter } from "./skillsFilter";

export function FiltersSidebar() {
  return (
    <div
      className={`${montserrat.className} w-full max-w-[292px] lg:block hidden bg-white rounded-lg border `}
      style={{ boxShadow: "0px 4px 45px 0px #0000001F" }}
    >
      <div className=" border-b py-3 px-6">
        <h2 className="text-xl font-semibold ">Filters</h2>
      </div>
      <div className=" flex flex-col pb-5 pt-2 px-6 gap-y-3">
        <ProjectTypeFilter />
        <PriceRangeFilter />
        <SkillsFilter />
        <LocationFilter />
        <LanguagesFilter />
      </div>
    </div>
  );
}
