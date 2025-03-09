// src/hooks/chat.ts
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/message",
});

export default api;
// Function to fetch conversations
const fetchConversations = async (token: string) => {
  const { data } = await api.get("conversations", {
    headers: { Authorization: `Bearer ${token}` },
  });
  // console.log("Conversations:", data);
  return data.conversations;
};

// Function to fetch messages for a conversation
const fetchMessages = async (token: string, receiverId: string) => {
  const { data } = await api.get(`/conversation/${receiverId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  console.log("messages", data.messages);
  return data.messages;
};

// Function to send a message
const sendMessage = async ({
  token,
  receiverId,
  content,
  messageType,
}: {
  token: string;
  receiverId: string;
  content: string;
  messageType: string;
}) => {
  try {
    const { data } = await api.post(
      "/send",
      { receiverId, content, messageType },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return data;
  } catch (error: any) {
    console.error(
      "Error sending message:",
      error?.response?.data || error.message
    );
    throw new Error(error?.response?.data?.message || "Failed to send message");
  }
};

// React Query hooks

// Get Conversations
export const useConversations = (token: string) =>
  useQuery({
    queryKey: ["conversations"],
    queryFn: () => fetchConversations(token),
    enabled: !!token, // Only fetch if token exists
  });

// Get Messages
export const useMessages = (token: string, conversationId: string) =>
  useQuery({
    queryKey: ["messages", conversationId],
    queryFn: () => fetchMessages(token, conversationId),
    enabled: !!token && !!conversationId, // Only fetch if token & conversationId exist
  });

// Send Message Mutation
export const useSendMessage = () =>
  useMutation({
    mutationFn: sendMessage,
  });
