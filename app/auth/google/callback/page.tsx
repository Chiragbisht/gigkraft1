"use client";

import { Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";

const GoogleCallback = () => {
  return (
    <Suspense fallback={<div className="h-screen flex items-center justify-center">Processing Google login...</div>}>
      <GoogleCallbackContent />
    </Suspense>
  );
};

const GoogleCallbackContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  useEffect(() => {
    const exchangeCodeForToken = async () => {
      if (!code) return;

      console.log("Attempting to exchange code for token:", code);

      try {
        const response = await axios.get(
          `http://localhost:3000/auth/google/callback?code=${code}`,
          { withCredentials: true }
        );

        console.log("Full Response from Backend:", response);

        const { token } = response.data; // Ensure the backend actually sends this

        if (token) {
          console.log("Access token received:", token);
          localStorage.setItem("token", token);
          router.push("/home");
        } else {
          console.error("No token in response:", response.data);
        }
      } catch (error: any) {
        console.error(
          "Error exchanging code for token:",
          error.response?.data || error
        );
      }
    };

    exchangeCodeForToken();
  }, [code, router]);

  return (
    <div className="h-screen flex items-center justify-center">
      <p>Processing Google login...</p>
    </div>
  );
};

export default GoogleCallback;
