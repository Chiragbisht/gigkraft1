import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const fetchJobs = async (page: number) => {
  const { data } = await axios.get(`${BASE_URL}/jobs`);

  console.log(data);
  return data;
};

export const useFetchJobs = (page: number) => {
  return useQuery({
    queryKey: ["jobs", page],
    queryFn: () => fetchJobs(page),
    refetchOnWindowFocus: false,
    staleTime: Infinity, // Data will never be considered stale
  });
};
