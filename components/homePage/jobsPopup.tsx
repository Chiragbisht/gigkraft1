"use client"

import { montserrat } from "@/app/fonts/font"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function NoJobsAlert() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div
      className="relative w-full  mx-auto bg-white rounded-lg shadow-lg p-6 sm:p-8"
      style={{ boxShadow: "0px 4px 45px 0px #0000001F" }}
    >
      {/* Close Button */}
      <div className="absolute right-4 top-4">
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6 rounded-full hover:bg-gray-100"
          onClick={() => setIsVisible(false)}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Content */}
      <div className={`flex flex-col-reverse md:flex-row items-center gap-6 md:gap-8 relative ${montserrat.className}`}>
        {/* Left Section */}
        <div className="space-y-3 flex-1 text-center md:text-left max-w-xs">
          <h2 className="text-xl sm:text-2xl font-bold">No job post</h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            You have not posted any job. Post your job and find the world's best talent here.
          </p>
          <Button className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white px-6 sm:px-8 rounded-full">
            Post now
          </Button>
        </div>

        {/* Image Section */}
        <div className="relative w-[200px] sm:w-[250px] md:w-[303px] aspect-[4/3]">
          <Image
            src="/images/pictures/find.png"
            alt="People searching illustration"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  )
}
