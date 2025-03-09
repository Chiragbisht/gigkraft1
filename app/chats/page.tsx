"use client";

import ChatLayout from "@/components/chatPage/chat-layout";
import { useAuthStore } from "@/zustand/nameStore";

export default function Home() {
  // In a real app, this would come from authentication
  const { token } = useAuthStore();
  if (!token) return <div>Please login</div>;
  const authenticatedUserId = token;

  return <ChatLayout authenticatedUserId={authenticatedUserId} />;
}
