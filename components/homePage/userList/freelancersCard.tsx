"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, MapPin, Star, StarHalf, Building, DollarSign, X } from "lucide-react"
import Image from "next/image"
interface UserProps {
  id: number;
  name: string;
  role: string;
  hourlyRate: number;
  totalEarnings: number;
  isOnline: boolean;
  rating: number;
  reviews: number;
  location: string;
  tags: string[];
  badge: string;
}

export default function UserProfileCard({user}:{user:UserProps}) {
  return (
    <Card key={user.id} className="relative bg-white rounded-[10px]"
    style={{ boxShadow: "0px 4px 45px 0px #0000001F" }}>
    <CardContent className="p-6 bg-white">
      <div className="flex lg:flex-row flex-col lg:items-start items-center gap-y-2 justify-between">
        {/* Left side with user info */}
        <div className="flex gap-4">
          {/* Avatar with online status */}
          <div className="relative">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image src="/images/pictures/ben.jpg" alt={user.name} width={48} height={48} className="object-cover" />
            </div>
            {user.isOnline && (
              <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
            )}
          </div>

          {/* User details */}
          <div className="space-y-2">
            <div>
              <h3 className="font-semibold">{user.name}</h3>
              <p className="text-sm text-muted-foreground">{user.role}</p>
            </div>

            <div>
              <div className="font-semibold">${user.hourlyRate}.00/hr</div>
              <div className="text-sm text-muted-foreground">
                Total earnings ${user.totalEarnings}k on web and mobile design
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {user.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-600 hover:bg-gray-200">
                  {tag}
                  <X className="ml-1 h-3 w-3" />
                </Badge>
              ))}
              <button className="text-red-500 text-sm">more</button>
            </div>

            {/* Rating and Location */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
                <Star className="w-4 h-4 fill-muted text-muted-foreground" />
              </div>
              <span className="text-sm text-muted-foreground">4/5 ({user.reviews} Reviews)</span>
              <span className="text-sm text-muted-foreground">• {user.location}</span>
            </div>
          </div>
        </div>

        {/* Invite button */}
        <Button className="lg:text-red-500 lg:bg-white lg:hover:bg-white font-[600] bg-primary w-full lg:w-[200px] text-white">
          Invite
        </Button>
      </div>
    </CardContent>
  </Card>
  )
}

