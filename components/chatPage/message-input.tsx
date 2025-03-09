"use client"

import type React from "react"

import { useState, useRef } from "react"
import { MessageType } from "@/types/chats"
import { Send, Paperclip, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MessageInputProps {
  onSendMessage: (content: string, messageType: string, files?: File[]) => void
}

export default function MessageInput({ onSendMessage }: MessageInputProps) {
  const [content, setContent] = useState("")
  const [messageType, setMessageType] = useState<string>(MessageType.TEXT)
  const [files, setFiles] = useState<File[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!content.trim() && files.length === 0) return

    // Determine message type based on files
    let finalMessageType = messageType
    if (files.length > 0) {
      const fileType = files[0].type
      if (fileType.startsWith("image/")) {
        finalMessageType = MessageType.IMAGE
      } else {
        finalMessageType = MessageType.FILE
      }
    }

    onSendMessage(content, finalMessageType, files)

    // Reset form
    setContent("")
    setMessageType(MessageType.TEXT)
    setFiles([])
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const fileArray = Array.from(e.target.files)
      setFiles((prev) => [...prev, ...fileArray])

      // Automatically set message type based on file type
      const fileType = e.target.files[0].type
      if (fileType.startsWith("image/")) {
        setMessageType(MessageType.IMAGE)
      } else {
        setMessageType(MessageType.FILE)
      }
    }
  }

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index))
    if (files.length <= 1) {
      setMessageType(MessageType.TEXT)
    }
  }

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  return (
    <div className="border-t border-gray-200 p-4 bg-white">
      {files.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-2">
          {files.map((file, index) => (
            <div key={index} className="flex items-center bg-gray-100 rounded-full px-3 py-1">
              <span className="text-sm truncate max-w-[150px]">{file.name}</span>
              <button onClick={() => removeFile(index)} className="ml-1 text-gray-500 hover:text-gray-700">
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex items-center space-x-2">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={triggerFileInput}
          className="text-gray-500 hover:text-gray-700"
        >
          <Paperclip className="h-5 w-5" />
          <span className="sr-only">Attach files</span>
        </Button>

        <input type="file" ref={fileInputRef} onChange={handleFileChange} multiple className="hidden" />

        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <Button type="submit" size="icon" disabled={!content.trim() && files.length === 0}>
          <Send className="h-5 w-5" />
          <span className="sr-only">Send message</span>
        </Button>
      </form>
    </div>
  )
}

