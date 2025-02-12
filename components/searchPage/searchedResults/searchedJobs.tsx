import { Star, X, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { montserrat } from "@/app/fonts/font";
import { jobs, users } from "@/utils/constant";
import JobCards from "./jobCards";
import { SortDropdown } from "./sort";


export default function SearchedJobs() {
  return (
    <div className="space-y-6 w-full mx-auto ">
      {/* Header */}
        <div className=" w-full justify-between items-center flex flex-row">
            <p className={` ${montserrat.className} text-[16px] font-[700]`}> Top Results
                <span className=" font-[500]"> Showing 1 - 10 of {jobs.length}</span>
            </p>
            <SortDropdown/>
        </div>
      {/* User Cards */}
      <div className={`${montserrat.className} space-y-4`}>
        {jobs.map((job) => (
          <JobCards key={job.id} job={job} />
        ))}
      </div>

      {/* Pagination */}
      <div className={`${montserrat.className} flex justify-center gap-1`}
     
      >
        {[1, 2, 3, 4, 5].map((page) => (
          <Button
            key={page}
            variant={page === 1 ? "default" : "outline"}
            className="w-10 h-10"
            style={{ boxShadow: "0px 4px 45px 0px #0000001F" }}
          >
            {page}
          </Button>
        ))}
      </div>
    </div>
  );
}
