"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { montserrat } from "@/app/fonts/font";
import { jobs } from "@/utils/constant";
import JobCards from "./jobCards";
import { SortDropdown } from "./sort";
import { useState } from "react";
import Pagination from "@/components/pagination/pagination";

export default function SearchedJobs() {
  const jobsPerPage = 5;
  const totalPages = Math.ceil(jobs.length / jobsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="space-y-6 w-full mx-auto">
      {/* Header */}
      <div className="w-full justify-between items-center flex flex-row">
        <p className={`${montserrat.className} text-[16px] font-[700]`}>
          Top Results
          <span className="font-[500]">
            {" "}
            Showing {(currentPage - 1) * jobsPerPage + 1} -{" "}
            {Math.min(currentPage * jobsPerPage, jobs.length)} of {jobs.length}
          </span>
        </p>
        <SortDropdown />
      </div>

      {/* Job Cards */}
      <div className={`${montserrat.className} space-y-4`}>
        {jobs
          .slice((currentPage - 1) * jobsPerPage, currentPage * jobsPerPage)
          .map((job) => (
            <JobCards key={job.id} job={job} />
          ))}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />
    </div>
  );
}
