import { create } from "zustand";
import type { Message, SendMessageRequest } from "@/lib/types";
import { useConversationStore } from "./conversationStore";

interface MessageState {
  messages: Message[];

  // Actions
  addMessage: (message: Message) => void;
  sendMessage: (messageData: SendMessageRequest) => void;
}

export const useMessageStore = create<MessageState>((set, get) => ({
  messages: [],

  addMessage: (message: Message) => {
    set((state) => ({
      messages: [...state.messages, message],
    }));
  },

  sendMessage: (messageData: SendMessageRequest) => {
    // Generate a temporary ID and timestamp for optimistic updates
    const tempId = `temp-${Date.now()}`;
    const timestamp = new Date().toISOString();

    // Create a temporary message for optimistic UI update
    const tempMessage: Message = {
      id: tempId,
      senderId: "current-user-id", // In a real app, get this from auth context
      receiverId: messageData.receiverId,
      content: messageData.content,
      messageType: messageData.messageType,
      timestamp,
    };

    // Add the message optimistically
    get().addMessage(tempMessage);

    // Update the conversation in the conversation store
    const conversationStore = useConversationStore.getState();
    const conversation = conversationStore.getActiveConversation();

    if (conversation) {
      conversationStore.updateConversation(conversation.id, {
        updatedAt: timestamp,
        // In a real implementation, you would update lastMessages here
      });
    }
  },
}));
