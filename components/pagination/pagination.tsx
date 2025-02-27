import { montserrat } from "@/app/fonts/font";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  handleNextPage: () => void;
  handlePrevPage: () => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  handleNextPage,
  handlePrevPage,
}: PaginationProps) => {
  return (
    <div
      className={`${montserrat.className} flex justify-center items-center gap-3`}
    >
      <Button
        variant="outline"
        className="w-10 h-10 flex items-center justify-center"
        style={{ boxShadow: "0px 4px 45px 0px #0000001F" }}
        disabled={currentPage === 1}
        onClick={handlePrevPage}
      >
        <ChevronLeft size={18} />
      </Button>

      <span className="text-[16px] font-medium">
        {currentPage} / {totalPages}
      </span>

      <Button
        variant="outline"
        className="w-10 h-10 flex items-center justify-center"
        style={{ boxShadow: "0px 4px 45px 0px #0000001F" }}
        disabled={currentPage === totalPages}
        onClick={handleNextPage}
      >
        <ChevronRight size={18} />
      </Button>
    </div>
  );
};

export default Pagination;
