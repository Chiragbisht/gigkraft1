import { useAuthStore } from "@/zustand/nameStore";
import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Automatically add the token to requests
axiosInstance.interceptors.request.use((config) => {
  const { token } = useAuthStore();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
