import { ImageIcon, Mic, Paperclip, Send } from "lucide-react"
import { Button } from "@/components/ui/button"



export default function MessageInput() {
  return (
    <div className="p-4 border-t border-gray-200">
      <div className="flex items-center">
        <Button className="p-2 mr-1 text-gray-500 rounded-full hover:bg-gray-100">
          <ImageIcon className="w-5 h-5" />
        </Button>
        <Button className="p-2 mr-1 text-gray-500 rounded-full hover:bg-gray-100">
          <Paperclip className="w-5 h-5" />
        </Button>
        <div className="flex-1 mx-2">
          <input
            type="text"
            placeholder="Type here..."
            className="w-full p-2 bg-transparent border-none focus:outline-none"
          />
        </div>
        <Button className="p-2 mr-1 text-gray-500 rounded-full hover:bg-gray-100">
          <Mic className="w-5 h-5" />
        </Button>
        <Button className="p-2 text-white bg-red-500 rounded-full hover:bg-red-600">
          <Send className="w-5 h-5" />
        </Button>
      </div>
    </div>
  )
}
