"use client";
import axios from "axios";
import { Target, DollarSign, Rocket, Maximize2, Key } from "lucide-react";

export default function FeaturesSection() {
  const fetchJobs = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3000/jobs`, {
        withCredentials: true,
      });
      console.log(data);
      return data;
      
    } catch (error: any) {
      throw new Error(error.response?.data?.message || "Jobs Fetch Failed");
    }
  };
  return (
    <section className="py-16 px-4 md:py-24">
      <button onClick={fetchJobs}>Get Started</button>
    </section>
  );
}
