"use client"

import { useRef, useEffect } from "react"
import MessageBubble from "./message-bubble"
import MessageInput from "./message-input"
import ChatHeader from "./chat-header"
import type { Conversation, Message, Pagination } from "@/types/chats"

interface MessageViewProps {
  selectedConversationId: string
  conversations: Conversation[]
  messages: Message[]
  isLoadingMessages: boolean
  pagination: Pagination
  authenticatedUserId: string
  onLoadMoreMessages: () => void
  onSendMessage: (content: string, messageType: string, files?: File[]) => void
}

export default function MessageView({
  selectedConversationId,
  conversations,
  messages,
  isLoadingMessages,
  pagination,
  authenticatedUserId,
  onLoadMoreMessages,
  onSendMessage,
}: MessageViewProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement>(null)

  const selectedConversation = conversations.find((c) => c._id === selectedConversationId)

  // Scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  // Handle scroll to load more messages
  const handleScroll = () => {
    const container = messagesContainerRef.current
    if (!container) return

    // If scrolled near the top and not already loading and there are more pages
    if (container.scrollTop < 100 && !isLoadingMessages && pagination.page < pagination.totalPages) {
      onLoadMoreMessages()
    }
  }

  if (!selectedConversation) return null

  return (
    <div className="flex flex-col h-full">
      <ChatHeader conversation={selectedConversation} authenticatedUserId={authenticatedUserId} />

      <div ref={messagesContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4" onScroll={handleScroll}>
        {isLoadingMessages && pagination.page > 1 && (
          <div className="text-center py-2 text-gray-500">Loading more messages...</div>
        )}

        {messages.length === 0 && !isLoadingMessages ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500">No messages yet. Start the conversation!</p>
          </div>
        ) : (
          messages.map((message) => (
            <MessageBubble key={message._id} message={message} authenticatedUserId={authenticatedUserId} />
          ))
        )}

        <div ref={messagesEndRef} />
      </div>

      <MessageInput onSendMessage={onSendMessage} />
    </div>
  )
}

