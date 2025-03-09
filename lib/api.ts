import type { Conversation, Message, Pagination } from "@/types/chats"
import { MOCK_CONVERSATIONS, MOCK_MESSAGES } from "./mock-data"

// Placeholder function to fetch conversations
export async function fetchConversations(): Promise<Conversation[]> {
  // In a real app, this would make an API call to GET /message/conversations
  console.log("Fetching conversations...")

  // Return mock data
  return Promise.resolve(MOCK_CONVERSATIONS)
}

// Placeholder function to fetch messages for a conversation
export async function fetchMessages(
  conversationId: string,
  page: number,
  limit: number,
): Promise<{ messages: Message[]; pagination: Pagination }> {
  // In a real app, this would make an API call to GET /message/conversation/:receiverId
  console.log(`Fetching messages for conversation ${conversationId}, page ${page}, limit ${limit}`)

  // Get mock messages for the conversation
  const messages = MOCK_MESSAGES[conversationId] || []

  // Simulate pagination
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  const paginatedMessages = messages.slice(startIndex, endIndex)

  return Promise.resolve({
    messages: paginatedMessages,
    pagination: {
      page,
      limit,
      totalPages: Math.ceil(messages.length / limit),
      totalMessages: messages.length,
    },
  })
}

// Placeholder function to send a message
export async function sendMessage(message: {
  conversationId: string
  content: string
  messageType: string
  files?: string[]
}): Promise<Message> {
  // In a real app, this would make an API call to POST /message/send
  console.log("Sending message:", message)

  // Return mock data
  return Promise.resolve({
    _id: `msg-${Date.now()}`,
    conversationId: message.conversationId,
    sender: "user123", // Authenticated user
    content: message.content,
    messageType: message.messageType,
    files: message.files,
    createdAt: new Date().toISOString(),
  })
}

// Placeholder function to set up WebSocket connection
export function setupWebSocket(): () => void {
  // In a real app, this would set up a WebSocket connection
  console.log("Setting up WebSocket connection...")

  // Return cleanup function
  return () => {
    console.log("Cleaning up WebSocket connection...")
  }
}

