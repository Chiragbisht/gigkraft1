"use client";
;
import { useAuthStore } from "@/zustand/nameStore";
import { useEffect } from "react";

export default function FeaturesSection() {
  const { token } = useAuthStore();

  useEffect(() => {
    // console.log("Zustand token updated:", token);
  }, [token]);

  return (
    <section className="py-16 px-4 md:py-24">
      <p>Token: {token ? token : "No token found"}</p> 
    </section>
  );
}
