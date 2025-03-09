"use client"

import type { Conversation } from "@/types/chats"
import { formatDate, getInitials, truncateText } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ConversationItemProps {
  conversation: Conversation
  isSelected: boolean
  onClick: () => void
  authenticatedUserId: string
}

export default function ConversationItem({
  conversation,
  isSelected,
  onClick,
  authenticatedUserId,
}: ConversationItemProps) {
  // Find the other participant (not the authenticated user)
  const otherParticipant =
    conversation.participants.find((p) => p._id !== authenticatedUserId) || conversation.participants[0]

  const fullName = `${otherParticipant.firstName} ${otherParticipant.lastName}`
  const initials = getInitials(otherParticipant.firstName, otherParticipant.lastName)

  const lastMessage = conversation.lastMessage
  const lastMessagePreview = lastMessage ? truncateText(lastMessage.content, 30) : "No messages yet"
  const lastMessageTime = lastMessage ? formatDate(lastMessage.createdAt) : ""

  return (
    <li className={`p-4 hover:bg-gray-50 cursor-pointer ${isSelected ? "bg-blue-50" : ""}`} onClick={onClick}>
      <div className="flex items-center space-x-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src={otherParticipant.image} alt={fullName} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>

        <div className="flex-1 min-w-0">
          <div className="flex justify-between">
            <p className="text-sm font-medium text-gray-900 truncate">{fullName}</p>
            {lastMessageTime && <p className="text-xs text-gray-500">{lastMessageTime}</p>}
          </div>
          <p className="text-sm text-gray-500 truncate">{lastMessagePreview}</p>
        </div>
      </div>
    </li>
  )
}

