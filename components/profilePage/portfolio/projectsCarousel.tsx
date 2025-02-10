"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";

const images = [
 "/images/pictures/ben.jpg",
 "/images/pictures/ben.jpg",
 "/images/pictures/ben.jpg",
 "/images/pictures/ben.jpg",
];

export default function PortfolioCarousel() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <Carousel>
        <CarouselContent className="-ml-2">
          {images.map((src, index) => (
            <CarouselItem 
              key={index} 
              className="pl-2 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-2">
                <Image 
                  src={src} 
                  alt={`Image ${index + 1}`} 
                  width={243} 
                  height={174} 
                  className="rounded-md object-cover w-[243px] h-[174px]" 
                />
              </div>
            </CarouselItem>
          ))}
          
        </CarouselContent>
      
      </Carousel>
    </div>
  );
}
