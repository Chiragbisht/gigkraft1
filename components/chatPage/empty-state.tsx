"use client"

import { MessageSquare } from "lucide-react"

interface EmptyStateProps {
  message: string
}

export default function EmptyState({ message }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full p-4 text-center">
      <div className="bg-gray-100 p-6 rounded-full mb-4">
        <MessageSquare className="h-12 w-12 text-gray-400" />
      </div>
      <h3 className="text-xl font-medium text-gray-700 mb-2">No conversation selected</h3>
      <p className="text-gray-500 max-w-md">{message}</p>
    </div>
  )
}

