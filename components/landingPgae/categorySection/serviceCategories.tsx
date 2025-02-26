"use client";

import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { montserrat } from "@/app/fonts/font";
import { motion } from "motion/react";

interface ServiceCategory {
  title: string;
  rating: number;
  skills: number;
  gradient: string;
}

const categories: ServiceCategory[] = [
  {
    title: "Development & IT",
    rating: 4.85,
    skills: 1853,
    gradient:
      "bg-gradient-to-br from-blue-50 to-indigo-100 hover:from-blue-100 hover:to-indigo-200",
  },
  {
    title: "AI Services",
    rating: 4.8,
    skills: 294,
    gradient:
      "bg-gradient-to-br from-purple-50 to-pink-100 hover:from-purple-100 hover:to-pink-200",
  },
  {
    title: "Design & Creative",
    rating: 4.91,
    skills: 968,
    gradient:
      "bg-gradient-to-br from-rose-50 to-orange-100 hover:from-rose-100 hover:to-orange-200",
  },
  {
    title: "Sales & Marketing",
    rating: 4.77,
    skills: 392,
    gradient:
      "bg-gradient-to-br from-green-50 to-emerald-100 hover:from-green-100 hover:to-emerald-200",
  },
  {
    title: "Writing & Translation",
    rating: 4.92,
    skills: 505,
    gradient:
      "bg-gradient-to-br from-cyan-50 to-sky-100 hover:from-cyan-100 hover:to-sky-200",
  },
  {
    title: "Admin & Customer Support",
    rating: 4.77,
    skills: 508,
    gradient:
      "bg-gradient-to-br from-amber-50 to-yellow-100 hover:from-amber-100 hover:to-yellow-200",
  },
  {
    title: "Finance & Accounting",
    rating: 4.79,
    skills: 214,
    gradient:
      "bg-gradient-to-br from-teal-50 to-emerald-100 hover:from-teal-100 hover:to-emerald-200",
  },
  {
    title: "Engineering & Architecture",
    rating: 4.85,
    skills: 650,
    gradient:
      "bg-gradient-to-br from-violet-50 to-purple-100 hover:from-violet-100 hover:to-purple-200",
  },
];

export default function ServiceCards() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:p-6 px-3  md:grid-cols-2 lg:grid-cols-4">
      {categories.map((category, index) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: index * 0.34567, // Stagger effect for appearing one by one
          }}
        >
          <Card
            className={`border-none shadow-lg transition-all duration-300 hover:shadow-xl ${category.gradient} ${montserrat.className}`}
          >
            <CardContent className="p-6">
              <h2 className="text-2xl font-medium mb-4 text-gray-800">
                {category.title}
              </h2>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-green-500 text-green-500" />
                  <span className="font-medium text-gray-800">
                    {category.rating}/5
                  </span>
                </div>
                <span className="text-gray-600">
                  {category.skills.toLocaleString()} skills
                </span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
