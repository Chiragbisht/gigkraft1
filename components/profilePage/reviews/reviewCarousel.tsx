"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { montserrat } from "@/app/fonts/font";
import Image from "next/image";

const reviews = [
  {
    name: "John Doe",
    rating: 5,
    review: "Amazing experience! Highly recommended. did his work for me.",
  },
  {
    name: "Jane Smith",
    rating: 4,
    review: "Great work! Will hire again.",
  },
  {
    name: "David Lee",
    rating: 5,
    review: "Very professional and quick delivery!",
  },
  {
    name: "Emily Johnson",
    rating: 4.5,
    review: "The work was outstanding and delivered on time!",
  },
];

export default function ReviewCarousel() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <Carousel>
        <CarouselContent className="-ml-2">
          {reviews.map((review, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:basis-1/1 lg:basis-1/2"
            >
              <ReviewCard {...review} />
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </div>
  );
}

function ReviewCard({
  name,
  rating,
  review,
}: {
  name: string;
  rating: number;
  review: string;
}) {
  return (
    <Card className="w-full max-w-[380px] bg-[#F3F3F3] h-auto border border-[#000000]/20 py-5 px-4 rounded-md shadow-sm">
      <CardContent className={`${montserrat.className} flex flex-col  w-full`}>
        <div className="flex items-start gap-x-3">
          <div className="w-10 h-10 rounded-full ">
            <Image
              src={"/images/pictures/ben.jpg"}
              alt="user"
              height={10}
              width={10}
              className="rounded-full h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-y-1 flex-1">
            <p className="text-sm text-[#333333]">{review}</p>
            <div className="mt-3">
              <p className="text-base font-semibold text-black">{name}</p>
              <p className="text-xs text-black opacity-80">
                Independent Web Developer
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
