"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useFetchClientProfile } from "@/utils/apiHandlers/client";

dayjs.extend(relativeTime); // Extend dayjs for relative time formatting

interface JobProps {
  id: number;
  _id: string;
  jobTitle: string;
  description: string;
  expertiseLevel: string;
  price: number;
  rating: number;
  createdAt: string;
  reviews: number;
  userId: string;
}

export default function UserProfileCard({ job }: { job: JobProps }) {
  const timeAgo = dayjs(job.createdAt).fromNow(); // Convert timestamp to "X days ago"
  const { data: user, isLoading } = useFetchClientProfile(job.userId);

  return (
    <Card
      key={job.id}
      className="relative bg-white rounded-[10px]"
      style={{ boxShadow: "0px 4px 45px 0px #0000001F" }}
    >
      <CardContent className="py-4 bg-white rounded-[10px]">
        <div className="flex lg:flex-row flex-col lg:items-start items-start gap-y-2 justify-between">
          {/* Left side with user info */}
          <div className="flex gap-4">
            {/* Job details */}
            <div className="space-y-2">
              <h3 className="text-lg font-medium">{job.jobTitle}</h3>
              <div className="flex flex-wrap gap-2">
                <p className="text-sm text-muted-foreground">Est. ${job.price}</p>
                <p className="text-sm text-muted-foreground">{job.expertiseLevel}</p>
                <p className="text-sm text-muted-foreground">{timeAgo}</p> {/* Updated */}
              </div>
              <p className="text-[14px] font-[500] text-[#000000B2]/70">{job.description}</p>

              {/* Rating and Location */}
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                  <Star className="w-4 h-4 fill-muted text-muted-foreground" />
                </div>
                <span className="text-sm text-muted-foreground">
                  4/5 ({job.reviews} Reviews)
                </span>
                <span className="text-sm text-muted-foreground">
                  • {!isLoading && user ? `${user.city}, ${user.country}` : "Fetching location..."}
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
