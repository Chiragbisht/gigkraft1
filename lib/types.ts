// 🔹 User Type
export interface User {
    _id: string
    firstName: string
    lastName: string
    profileImage: string
  }
  
  // 🔹 Message Type
  export interface Message {
    id: string
    senderId: string
    receiverId: string
    content: string
    messageType: "text" | "image"
    createdAt:string
  }
  
  // 🔹 LastMessage Type
  export interface LastMessage {
    userId: string // The participant's user ID
    messageId: string // Reference to last message
  }
  
  // 🔹 Conversation Type
  export interface Conversation {
    id: string
    ownerId: string // User who owns the conversation
    participants: User[] // Populated list of user details
    messages: Message[] // List of messages
    lastMessages: LastMessage[] // Last messages per participant
    updatedAt: string
  }
  
  // 🔹 API Response Types
  export interface ApiResponse<T> {
    success: boolean
    error?: string
    data?: T
  }
  
  export interface ConversationsResponse extends ApiResponse<Conversation[]> {}
  
  export interface MessagesResponse extends ApiResponse<Message[]> {}
  
  export interface SendMessageResponse extends ApiResponse<{ message: string }> {}
  
  // Additional types for our application
  export interface SendMessageRequest {
    conversationId: string
    content: string
    messageType: "text" | "image"
    receiverId: string
  }
  
  