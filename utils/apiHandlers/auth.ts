import { useMutation } from "@tanstack/react-query";
import axios from "axios";
const Base_Url = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
console.log(Base_Url);

async function signUpWithGoogle(): Promise<void> {
  // Redirect user to the Google OAuth URL
  window.location.href = `http://localhost:3000/auth/google`;
}

export function useGoogleSignUp() {
  return useMutation({
    mutationFn: signUpWithGoogle,
  });
}


export const fetchJobs = async () => {
  try {
    const { data } = await axios.get(`http://localhost:3000/jobs`, {
      withCredentials: true,
    });
    return data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Jobs Fetch Failed");
  }
};
