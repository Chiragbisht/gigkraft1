import { Phone, Video } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"


export default function ChatHeader() {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200">
      <div className="flex items-center">
        <Image
          src="/placeholder.svg?height=50&width=50"
          alt="Manmohan Desia"
          width={40}
          height={40}
          className="rounded-full mr-3"
        />
        <div>
          <h3 className="font-medium">Manmohan Desia</h3>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Button className="p-2 text-gray-500 rounded-full hover:bg-gray-100">
          <Phone className="w-5 h-5" />
        </Button>
        <Button className="p-2 text-gray-500 rounded-full hover:bg-gray-100">
          <Video className="w-5 h-5" />
        </Button>
      </div>
    </div>
  )
}

