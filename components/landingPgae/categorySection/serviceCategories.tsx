"use client"
import { montserrat } from "@/app/fonts/font";
import type { LucideIcon } from "lucide-react";
import {motion} from "motion/react"

interface FeatureCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  className?: string;
}

export function FeatureCard({
  title,
  description,
  Icon,
  className = "",
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`bg-white rounded-xl shadow-lg px-6 py-6 border border-gray-200 ${className} ${montserrat.className}`}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, ease: "backOut" }}
        className="w-14 h-14 rounded-full bg-[#FF4C4A] flex items-center justify-center mb-5 shadow-md"
      >
        <Icon className="w-7 h-7 text-white" />
      </motion.div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed tracking-wide">
        {description}
      </p>
    </motion.div>
  );
}
