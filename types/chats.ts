export interface User {
    _id: string
    firstName: string
    lastName: string
    image?: string
  }
  
  export interface Message {
    _id: string
    conversationId: string
    sender: string
    content: string
    messageType: string
    files?: string[]
    createdAt: string
  }
  
  export interface Conversation {
    _id: string
    participants: User[]
    lastMessage?: Message | null
  }
  
  export interface Pagination {
    page: number
    limit: number
    totalPages: number
    totalMessages: number
  }
  
  export enum MessageType {
    TEXT = "TEXT",
    IMAGE = "IMAGE",
    FILE = "FILE",
    AUDIO = "AUDIO",
    VIDEO = "VIDEO",
  }
  
  