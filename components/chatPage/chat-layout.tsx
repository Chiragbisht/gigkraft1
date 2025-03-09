"use client"

import { useState, useEffect } from "react"
import ConversationList from "./conversation-list"
import MessageView from "./message-view"
import EmptyState from "./empty-state"
import type { Conversation, Message, Pagination } from "@/types/chats"
import { fetchConversations, fetchMessages, setupWebSocket } from "@/lib/api"

interface ChatLayoutProps {
  authenticatedUserId: string
}

export default function ChatLayout({ authenticatedUserId }: ChatLayoutProps) {
  // State for conversations
  const [conversations, setConversations] = useState<Conversation[]>([])
  const [selectedConversationId, setSelectedConversationId] = useState<string | null>(null)
  const [isLoadingConversations, setIsLoadingConversations] = useState(true)

  // State for messages
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoadingMessages, setIsLoadingMessages] = useState(false)
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    limit: 20,
    totalPages: 0,
    totalMessages: 0,
  })

  // Fetch conversations on mount
  useEffect(() => {
    const loadConversations = async () => {
      setIsLoadingConversations(true)
      try {
        const data = await fetchConversations()
        setConversations(data)
        // Select first conversation by default if available
        if (data.length > 0 && !selectedConversationId) {
          setSelectedConversationId(data[0]._id)
        }
      } catch (error) {
        console.error("Failed to fetch conversations:", error)
      } finally {
        setIsLoadingConversations(false)
      }
    }

    loadConversations()
  }, [])

  // Fetch messages when selected conversation changes
  useEffect(() => {
    if (!selectedConversationId) return

    const loadMessages = async () => {
      setIsLoadingMessages(true)
      try {
        const { messages: newMessages, pagination: newPagination } = await fetchMessages(
          selectedConversationId,
          1,
          pagination.limit,
        )

        setMessages(newMessages)
        setPagination(newPagination)
      } catch (error) {
        console.error("Failed to fetch messages:", error)
      } finally {
        setIsLoadingMessages(false)
      }
    }

    loadMessages()
    setPagination((prev) => ({ ...prev, page: 1 }))
  }, [selectedConversationId])

  // Setup WebSocket connection
  useEffect(() => {
    const cleanup = setupWebSocket()
    return cleanup
  }, [])

  // Function to select a conversation
  const selectConversation = (conversationId: string) => {
    setSelectedConversationId(conversationId)
  }

  // Function to load more messages
  const loadMoreMessages = async () => {
    if (isLoadingMessages || pagination.page >= pagination.totalPages || !selectedConversationId) return

    setIsLoadingMessages(true)
    try {
      const nextPage = pagination.page + 1
      const { messages: newMessages, pagination: newPagination } = await fetchMessages(
        selectedConversationId,
        nextPage,
        pagination.limit,
      )

      setMessages((prev) => [...prev, ...newMessages])
      setPagination(newPagination)
    } catch (error) {
      console.error("Failed to load more messages:", error)
    } finally {
      setIsLoadingMessages(false)
    }
  }

  // Function to send a message
  const sendMessage = async (content: string, messageType: string, files?: File[]) => {
    if (!selectedConversationId || !content.trim()) return

    try {
      // This would be replaced with actual API call
      // For now, we'll just update the UI optimistically
      const tempId = `temp-${Date.now()}`
      const newMessage: Message = {
        _id: tempId,
        conversationId: selectedConversationId,
        sender: authenticatedUserId,
        content,
        messageType,
        files: files ? files.map((f) => URL.createObjectURL(f)) : undefined,
        createdAt: new Date().toISOString(),
      }

      // Update messages state optimistically
      setMessages((prev) => [newMessage, ...prev])

      // Update conversation list with new last message
      setConversations((prev) =>
        prev.map((conv) => (conv._id === selectedConversationId ? { ...conv, lastMessage: newMessage } : conv)),
      )

      // In a real app, you would call the API here
      // const response = await sendMessage({ receiverId, content, messageType, files });
      // Then update the message with the real ID from the response
    } catch (error) {
      console.error("Failed to send message:", error)
      // Handle error, maybe remove the optimistic update
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Conversation List (Left Sidebar) */}
      <div className="w-80 border-r border-gray-200 bg-white flex-shrink-0">
        <ConversationList
          conversations={conversations}
          selectedConversationId={selectedConversationId}
          isLoadingConversations={isLoadingConversations}
          onSelectConversation={selectConversation}
          authenticatedUserId={authenticatedUserId}
        />
      </div>

      {/* Message View (Main Area) */}
      <div className="flex-1 flex flex-col">
        {selectedConversationId ? (
          <MessageView
            selectedConversationId={selectedConversationId}
            conversations={conversations}
            messages={messages}
            isLoadingMessages={isLoadingMessages}
            pagination={pagination}
            authenticatedUserId={authenticatedUserId}
            onLoadMoreMessages={loadMoreMessages}
            onSendMessage={sendMessage}
          />
        ) : (
          <EmptyState message="Select a conversation to start chatting" />
        )}
      </div>
    </div>
  )
}

