"use client";

import type { Message } from "@/types/chats";
import { formatDate } from "@/lib/utils";
import { MessageType } from "@/types/chats";
import { File, Image } from "lucide-react";

interface MessageBubbleProps {
  message: Message;
  authenticatedUserId: string;
}

export default function MessageBubble({
  message,
  authenticatedUserId,
}: MessageBubbleProps) {
  const isSentByMe = message.sender === authenticatedUserId;

  const formattedTime = formatDate(message.createdAt);

  // Determine message content based on type
  const renderMessageContent = () => {
    switch (message.messageType) {
      case MessageType.IMAGE:
        return (
          <div className="mt-2">
            {message.files?.map((file, index) => (
              <div
                key={index}
                className="relative rounded-md overflow-hidden mb-2"
              >
                {/* Replace this with an actual icon if needed */}
                <img
                  src="/icon.svg"
                  alt="Attachment icon"
                  className="h-4 w-4 absolute top-2 left-2 text-white"
                />
                <img
                  src={file || "/placeholder.svg"}
                  alt="Image attachment"
                  className="max-w-xs rounded-md"
                />
              </div>
            ))}
            <p>{message.content}</p>
          </div>
        );
      case MessageType.FILE:
        return (
          <div className="mt-2">
            {message.files?.map((file, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-100 p-2 rounded-md mb-2"
              >
                <File className="h-4 w-4 mr-2" />
                <a
                  href={file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  Attachment {index + 1}
                </a>
              </div>
            ))}
            <p>{message.content}</p>
          </div>
        );
      default:
        return <p>{message.content}</p>;
    }
  };

  return (
    <div className={`flex ${isSentByMe ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[70%] rounded-lg p-3 ${
          isSentByMe
            ? "bg-blue-500 text-white rounded-br-none"
            : "bg-gray-200 text-gray-800 rounded-bl-none"
        }`}
      >
        {renderMessageContent()}
        <div
          className={`text-xs mt-1 ${
            isSentByMe ? "text-blue-100" : "text-gray-500"
          }`}
        >
          {formattedTime}
        </div>
      </div>
    </div>
  );
}
