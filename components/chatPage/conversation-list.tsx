"use client"

import ConversationItem from "./conversation-item"
import { Search } from "lucide-react"
import type { Conversation } from "@/types/chats"

interface ConversationListProps {
  conversations: Conversation[]
  selectedConversationId: string | null
  isLoadingConversations: boolean
  onSelectConversation: (conversationId: string) => void
  authenticatedUserId: string
}

export default function ConversationList({
  conversations,
  selectedConversationId,
  isLoadingConversations,
  onSelectConversation,
  authenticatedUserId,
}: ConversationListProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold mb-4">Conversations</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search conversations..."
            className="w-full p-2 pl-8 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {isLoadingConversations ? (
          <div className="p-4 text-center text-gray-500">Loading conversations...</div>
        ) : conversations.length === 0 ? (
          <div className="p-4 text-center text-gray-500">No conversations yet</div>
        ) : (
          <ul className="divide-y divide-gray-200">
            {conversations.map((conversation) => (
              <ConversationItem
                key={conversation._id}
                conversation={conversation}
                isSelected={selectedConversationId === conversation._id}
                onClick={() => onSelectConversation(conversation._id)}
                authenticatedUserId={authenticatedUserId}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

