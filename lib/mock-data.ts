import { type Conversation, type Message, MessageType, type User } from "@/types/chats"

// Mock authenticated user
export const AUTHENTICATED_USER_ID = "user123"

// Mock users
export const MOCK_USERS: User[] = [
  {
    _id: "user456",
    firstName: "John",
    lastName: "Doe",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    _id: "user789",
    firstName: "Jane",
    lastName: "Smith",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    _id: "user101",
    firstName: "Alex",
    lastName: "Johnson",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    _id: "user102",
    firstName: "Sarah",
    lastName: "Williams",
    image: "/placeholder.svg?height=40&width=40",
  },
]

// Mock messages
export const MOCK_MESSAGES: Record<string, Message[]> = {
  conv123: [
    {
      _id: "msg1",
      conversationId: "conv123",
      sender: "user456",
      content: "Hey, how are you doing?",
      messageType: MessageType.TEXT,
      createdAt: "2025-03-09T10:30:00.000Z",
    },
    {
      _id: "msg2",
      conversationId: "conv123",
      sender: AUTHENTICATED_USER_ID,
      content: "I'm good, thanks! How about you?",
      messageType: MessageType.TEXT,
      createdAt: "2025-03-09T10:32:00.000Z",
    },
    {
      _id: "msg3",
      conversationId: "conv123",
      sender: "user456",
      content: "Doing well! Check out this photo from my vacation.",
      messageType: MessageType.IMAGE,
      files: ["/placeholder.svg?height=200&width=300"],
      createdAt: "2025-03-09T10:35:00.000Z",
    },
  ],
  conv456: [
    {
      _id: "msg4",
      conversationId: "conv456",
      sender: "user789",
      content: "Did you get a chance to review the document I sent?",
      messageType: MessageType.TEXT,
      createdAt: "2025-03-08T15:20:00.000Z",
    },
    {
      _id: "msg5",
      conversationId: "conv456",
      sender: AUTHENTICATED_USER_ID,
      content: "Yes, I've reviewed it. Here are my comments.",
      messageType: MessageType.FILE,
      files: ["/placeholder.svg?height=50&width=50"],
      createdAt: "2025-03-08T16:45:00.000Z",
    },
  ],
  conv789: [
    {
      _id: "msg6",
      conversationId: "conv789",
      sender: "user101",
      content: "Meeting at 3pm tomorrow?",
      messageType: MessageType.TEXT,
      createdAt: "2025-03-07T09:15:00.000Z",
    },
    {
      _id: "msg7",
      conversationId: "conv789",
      sender: AUTHENTICATED_USER_ID,
      content: "That works for me. I'll be there.",
      messageType: MessageType.TEXT,
      createdAt: "2025-03-07T09:20:00.000Z",
    },
  ],
  conv101: [
    {
      _id: "msg8",
      conversationId: "conv101",
      sender: "user102",
      content: "Have you seen the latest project requirements?",
      messageType: MessageType.TEXT,
      createdAt: "2025-03-06T14:10:00.000Z",
    },
    {
      _id: "msg9",
      conversationId: "conv101",
      sender: AUTHENTICATED_USER_ID,
      content: "Not yet, can you share them with me?",
      messageType: MessageType.TEXT,
      createdAt: "2025-03-06T14:15:00.000Z",
    },
    {
      _id: "msg10",
      conversationId: "conv101",
      sender: "user102",
      content: "Sure, here they are.",
      messageType: MessageType.FILE,
      files: ["/placeholder.svg?height=50&width=50"],
      createdAt: "2025-03-06T14:20:00.000Z",
    },
  ],
}

// Mock conversations
export const MOCK_CONVERSATIONS: Conversation[] = [
  {
    _id: "conv123",
    participants: [
      {
        _id: AUTHENTICATED_USER_ID,
        firstName: "You",
        lastName: "User",
        image: "/placeholder.svg?height=40&width=40",
      },
      MOCK_USERS[0],
    ],
    lastMessage: MOCK_MESSAGES["conv123"][MOCK_MESSAGES["conv123"].length - 1],
  },
  {
    _id: "conv456",
    participants: [
      {
        _id: AUTHENTICATED_USER_ID,
        firstName: "You",
        lastName: "User",
        image: "/placeholder.svg?height=40&width=40",
      },
      MOCK_USERS[1],
    ],
    lastMessage: MOCK_MESSAGES["conv456"][MOCK_MESSAGES["conv456"].length - 1],
  },
  {
    _id: "conv789",
    participants: [
      {
        _id: AUTHENTICATED_USER_ID,
        firstName: "You",
        lastName: "User",
        image: "/placeholder.svg?height=40&width=40",
      },
      MOCK_USERS[2],
    ],
    lastMessage: MOCK_MESSAGES["conv789"][MOCK_MESSAGES["conv789"].length - 1],
  },
  {
    _id: "conv101",
    participants: [
      {
        _id: AUTHENTICATED_USER_ID,
        firstName: "You",
        lastName: "User",
        image: "/placeholder.svg?height=40&width=40",
      },
      MOCK_USERS[3],
    ],
    lastMessage: MOCK_MESSAGES["conv101"][MOCK_MESSAGES["conv101"].length - 1],
  },
]

