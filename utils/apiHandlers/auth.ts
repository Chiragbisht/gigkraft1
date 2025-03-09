import { useMutation } from "@tanstack/react-query";
import axios from "axios";
const Base_Url = "http://localhost:3000";
// console.log(Base_Url);

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

interface SignUpData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  userType: "freelancer" | "client";
  country: string;
  image?: string;
  termsandconditions: boolean;
}

const localSignUp = async (userData: SignUpData) => {
  try {
    const { data } = await axios.post(`${Base_Url}/auth/signup`, userData, {
      withCredentials: true,
    });
    return data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Signup Failed");
  }
};
export function useLocalSignUp() {
  return useMutation({
    mutationFn: localSignUp,
  });
}

interface LoginData {
  email: string;
  password: string;
}

const localLogin = async (userData: LoginData) => {
  try {
    const { data } = await axios.post(`${Base_Url}/auth/login`, userData, {
      withCredentials: true,
    });
    return data; // Expecting { token: "your_token_here", user: { ...userData } }
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Login Failed");
  }
};

// React Query Mutation
export function useLocalLogin() {
  return useMutation({
    mutationFn: localLogin,
  });
}
