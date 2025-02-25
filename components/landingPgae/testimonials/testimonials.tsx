"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { montserrat } from "@/app/fonts/font";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "The freelance talent we work with are more productive than we ever thought possible.",
    name: "Sam Crockett",
    role: "Independent Web Developer",
    image: "/images/vectors/donald.svg",
  },
  {
    quote:
      "The freelance talent we work with are more productive than we ever thought possible.",
    name: "Sam Crockett",
    role: "Independent Web Developer",
    image: "/images/vectors/donald.svg",
  },
  {
    quote:
      "GigKraft made it easy for me to find clients and work on my own terms.",
    name: "Lisa Brown",
    role: "Freelance Graphic Designer",
    image: "/images/pictures/ben.jpg",
  },
  {
    quote:
      "I've been using GigKraft for over a year, and it's been an amazing experience!",
    name: "John Doe",
    role: "Software Engineer",
    image: "/images/pictures/ben.jpg",
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: false,
  });

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-24 px-4 w-full max-w-7xl mx-auto">
      <div className="container mx-auto max-w-7xl">
        <div className={`${montserrat.className} text-center mb-16`}>
          <h2 className="text-4xl font-bold mb-4">People talk about us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear what our amazing freelancers and clients say about GigKraft.
          </p>
        </div>

        <div className="relative">
          {/* Added padding-top to create space for avatars */}
          <div className="overflow-hidden pt-20" ref={emblaRef}>
            <div className="flex gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_80%] md:flex-[0_0_40%]"
                >
                  <Card className="bg-white shadow-lg relative">
                    {/* Avatar positioned with adequate space */}
                    <div className="absolute left-1/2 -translate-x-1/2 -top-12 z-[10000]">
                      <Avatar className="h-20 w-20 border-4 border-white shadow-md bg-gray-200">
                        <AvatarImage
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="object-cover"
                        />
                        <AvatarFallback className="text-xl font-bold">
                          {testimonial.name[0]}
                        </AvatarFallback>
                      </Avatar>
                    </div>

                    <CardContent className="p-8 pt-16 relative">
                      <blockquote className="text-gray-700 mb-6 text-center">
                        "{testimonial.quote}"
                      </blockquote>
                      <footer className="text-center">
                        <cite className="not-italic">
                          <div className="font-semibold text-gray-900">{testimonial.name}</div>
                          <div className="text-gray-600">{testimonial.role}</div>
                        </cite>
                      </footer>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="secondary"
              size="icon"
              onClick={scrollPrev}
              className="rounded-full bg-[#F3D228] hover:bg-[#D4B100]"
            >
              <ChevronLeft className="h-4 w-4 text-[#4C4C4C]" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              onClick={scrollNext}
              className="rounded-full bg-[#F3D228] hover:bg-[#D4B100]"
            >
              <ChevronRight className="h-4 w-4 text-[#4C4C4C]" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
