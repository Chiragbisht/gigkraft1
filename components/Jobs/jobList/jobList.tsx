import { Star, X, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { montserrat } from "@/app/fonts/font";
import { jobs, users } from "@/utils/constant";
import UserProfileCard from "./jobCards";

export default function UserList() {
  return (
    <div className="space-y-6 w-full mx-auto ">
      {/* Header */}

      {/* User Cards */}
      <div className={`${montserrat.className} space-y-4`}>
        {jobs.map((job) => (
          <UserProfileCard key={job.id} job={job} />
        ))}
      </div>

      {/* Pagination */}
      <div className={`${montserrat.className} flex justify-center gap-1`}>
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
