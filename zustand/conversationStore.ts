import { create } from "zustand";
import type { Conversation } from "@/lib/types";

interface ConversationState {
  conversations: Conversation[];
  filteredConversations: Conversation[];
  activeConversationId: string | null;
  searchQuery: string;

  // Actions
  setActiveConversation: (conversationId: string) => void;
  getActiveConversation: () => Conversation | undefined;
  addConversation: (conversation: Conversation) => void;
  updateConversation: (conversationId: string, updates: Partial<Conversation>) => void;
  setSearchQuery: (query: string) => void;
  searchConversations: (query: string) => void;
}

export const useConversationStore = create<ConversationState>((set, get) => ({
  conversations: [],
  filteredConversations: [],
  activeConversationId: null,
  searchQuery: "",

  setActiveConversation: (conversationId: string) => {
    set({ activeConversationId: conversationId });
  },

  getActiveConversation: () => {
    const { conversations, activeConversationId } = get();
    return conversations.find((c) => c.id === activeConversationId);
  },

  addConversation: (conversation: Conversation) => {
    set((state) => ({
      conversations: [conversation, ...state.conversations],
    }));
  },

  updateConversation: (conversationId: string, updates: Partial<Conversation>) => {
    set((state) => ({
      conversations: state.conversations.map((c) =>
        c.id === conversationId ? { ...c, ...updates } : c
      ),
    }));
  },

  setSearchQuery: (query: string) => {
    set({ searchQuery: query });
    get().searchConversations(query);
  },

  searchConversations: (query: string) => {
    if (!query.trim()) {
      set({ filteredConversations: [] });
      return;
    }

    const { conversations } = get();
    const lowercaseQuery = query.toLowerCase();

    const filtered = conversations.filter((conversation) => {
      // Search in participant names
      const participantMatch = conversation.participants.some((participant) => {
        if (participant._id === conversation.ownerId) return false; // Skip the current user

        const fullName = `${participant.firstName} ${participant.lastName}`.toLowerCase();
        return fullName.includes(lowercaseQuery);
      });

      // Search in message content
      const messageMatch = conversation.messages.some(
        (message) => message.messageType === "text" && message.content.toLowerCase().includes(lowercaseQuery)
      );

      return participantMatch || messageMatch;
    });

    set({ filteredConversations: filtered });
  },
}));