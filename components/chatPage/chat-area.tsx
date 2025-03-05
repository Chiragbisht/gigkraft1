import ChatHeader from "@/components/chatPage/chat-header"
import MessageList from "@/components/chatPage/message-list"
import MessageInput from "@/components/chatPage/message-input"

export default function ChatArea() {
  return (
    <div className="flex flex-col h-full">
      <ChatHeader />
      <MessageList />
      <MessageInput />
    </div>
  )
}