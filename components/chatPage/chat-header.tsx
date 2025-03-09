"use client"

import type { Conversation } from "@/types/chats"
import { getInitials } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MoreVertical, Phone, Video } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ChatHeaderProps {
  conversation: Conversation
  authenticatedUserId: string
}

export default function ChatHeader({ conversation, authenticatedUserId }: ChatHeaderProps) {
  // Find the other participant (not the authenticated user)
  const otherParticipant =
    conversation.participants.find((p) => p._id !== authenticatedUserId) || conversation.participants[0]

  const fullName = `${otherParticipant.firstName} ${otherParticipant.lastName}`
  const initials = getInitials(otherParticipant.firstName, otherParticipant.lastName)

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
      <div className="flex items-center space-x-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src={otherParticipant.image} alt={fullName} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>

        <div>
          <h2 className="text-lg font-semibold">{fullName}</h2>
          <p className="text-sm text-gray-500">Online</p>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon">
          <Phone className="h-5 w-5" />
          <span className="sr-only">Call</span>
        </Button>

        <Button variant="ghost" size="icon">
          <Video className="h-5 w-5" />
          <span className="sr-only">Video call</span>
        </Button>

        <Button variant="ghost" size="icon">
          <MoreVertical className="h-5 w-5" />
          <span className="sr-only">More options</span>
        </Button>
      </div>
    </div>
  )
}

