import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || ""; // Ensure it's defined

const fetchClientProfile = async (userId: string) => {
  if (!userId) throw new Error("User ID is required");
  
  
  // Ensure URL is properly formed
  const url = `${BASE_URL}/client-profile/${userId}`;
   console.log(url);
  const { data } = await axios.get(url);
  return data;
};

export const useFetchClientProfile = (userId: string) => {
  return useQuery({
    queryKey: ["clientProfile", userId],
    queryFn: () => fetchClientProfile(userId),
    enabled: !!userId, // Ensures query runs only when userId is available
    staleTime: Infinity, // Cache it indefinitely until manually refetched
    refetchOnWindowFocus: false, // Prevents unnecessary refetching
  });
};
