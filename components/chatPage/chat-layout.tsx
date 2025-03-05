import Sidebar from "@/components/chatPage/sidebar"
import ChatArea from "@/components/chatPage/chat-area"

export default function ChatLayout() {
  return (
    <div className="flex h-screen bg-white">
      <div className="w-full max-w-md border-r border-gray-200">
        <Sidebar />
      </div>
      <div className="flex-1">
        <ChatArea />
      </div>
    </div>
  )
}

