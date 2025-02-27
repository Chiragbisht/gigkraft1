"use client";

import { montserrat } from "@/app/fonts/font";
import { jobs, users } from "@/utils/constant";
import UserProfileCard from "./jobCards";
import Pagination from "@/components/pagination/pagination";
import { useState } from "react";

export default function UserList() {
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
    <div className="space-y-6 w-full mx-auto ">
      {/* Header */}

      {/* User Cards */}
      <div className={`${montserrat.className} space-y-4`}>
        {jobs
        .slice((currentPage - 1) * jobsPerPage, currentPage * jobsPerPage)
        .map((job) => (
          <UserProfileCard key={job.id} job={job} />
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
