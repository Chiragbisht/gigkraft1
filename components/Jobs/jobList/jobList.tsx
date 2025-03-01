"use client";

import { montserrat } from "@/app/fonts/font";
import UserProfileCard from "./jobCards";
import Pagination from "@/components/pagination/pagination";
import { useState } from "react";
import { useFetchJobs } from "@/utils/apiHandlers/jobs";

export default function UserList() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, isError } = useFetchJobs(currentPage);

  const jobs = data?.jobs || []; // Default to empty array if no data

  // Sort jobs by createdAt (latest first)
  const sortedJobs = [...jobs].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  const jobsPerPage = 5;
  const totalPages = Math.ceil(sortedJobs.length / jobsPerPage);

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
      {/* Loading & Error Handling */}
      {isLoading && <p className="text-center">Loading jobs...</p>}
      {isError && <p className="text-center text-red-500">Failed to load jobs. Try again later.</p>}

      {/* User Cards */}
      {!isLoading && !isError && (
        <>
          <div className={`${montserrat.className} space-y-4`}>
            {sortedJobs
              .slice((currentPage - 1) * jobsPerPage, currentPage * jobsPerPage)
              .map((job: any) => (
                <UserProfileCard key={job.id} job={job} />
              ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              handleNextPage={handleNextPage}
              handlePrevPage={handlePrevPage}
            />
          )}
        </>
      )}
    </div>
  );
}
