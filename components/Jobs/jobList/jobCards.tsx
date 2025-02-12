"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Clock,
  MapPin,
  Star,
  StarHalf,
  Building,
  DollarSign,
  X,
} from "lucide-react";
import Image from "next/image";
interface jobProps {
  id: number;
  jobName: string;
  description: string;
  jobLevel: string;
  budget: number;
  rating: number;
  postTime: string;
  reviews: number;
  location: string;
  badge: string;
}

export default function UserProfileCard({ job }: { job: jobProps }) {
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
            {/* Avatar with online status */}

            {/* User details */}
            <div className="space-y-2">
              <h3 className="text-lg font-medium">{job.jobName}</h3>
              <div className="flex flex-wrap gap-2">
                <p className="text-sm text-muted-foreground">
                  Est. {job.budget}
                </p>
                <p className="text-sm text-muted-foreground">{job.jobLevel}</p>
                <p className="text-sm text-muted-foreground">{job.postTime}</p>
              </div>
              <p className="text-[14px] font-[500] text-[#000000B2]/70">{job.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
              {/* {job..map((tag, index) => (
                <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-600 hover:bg-gray-200">
                  {tag}
                  <X className="ml-1 h-3 w-3" />
                </Badge>
              ))} */}
              <button className="text-red-500 text-sm">more</button>
            </div>

              {/* Rating and Location */}
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(4)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                  <Star className="w-4 h-4 fill-muted text-muted-foreground" />
                </div>
                <span className="text-sm text-muted-foreground">
                  4/5 ({job.reviews} Reviews)
                </span>
                <span className="text-sm text-muted-foreground">
                  • {job.location}
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
