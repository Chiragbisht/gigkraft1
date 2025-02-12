import { Star, X, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { montserrat } from "@/app/fonts/font";
import { users } from "@/utils/constant";
import UserProfileCard from "./freelancersCard";

export default function UserList() {
  return (
    <div className="space-y-6 w-full mx-auto ">
      {/* Header */}

      {/* User Cards */}
      <div className={`${montserrat.className} space-y-4`}>
        {users.map((user) => (
          <UserProfileCard key={user.id} user={user} />
        ))}
      </div>

      {/* Pagination */}
      <div className={`${montserrat.className} flex justify-center gap-1`}>
        {[1, 2, 3, 4, 5].map((page) => (
          <Button
            key={page}
            variant={page === 1 ? "default" : "outline"}
            className="w-10 h-10"
          >
            {page}
          </Button>
        ))}
      </div>
    </div>
  );
}
