import { Badge } from "@/components/ui/badge"
import Image from "next/image"

type Contact = {
  id: string
  name: string
  avatar: string
  lastMessage: string
  time: string
  unread?: number
  isActive?: boolean
}

export default function ContactList() {
  const contacts: Contact[] = [
    {
      id: "1",
      name: "Manmohan Desia",
      avatar: "/placeholder.svg?height=50&width=50",
      lastMessage: "You: Lets connect",
      time: "13m ago",
      isActive: true,
    },
    {
      id: "2",
      name: "Adam Smit",
      avatar: "/placeholder.svg?height=50&width=50",
      lastMessage: "Lets connect now i am free...",
      time: "13m ago",
      unread: 10,
    },
    {
      id: "3",
      name: "Kiran Kher",
      avatar: "/placeholder.svg?height=50&width=50",
      lastMessage: "You: Lets connect",
      time: "13m ago",
    },
    {
      id: "4",
      name: "Kabir khan",
      avatar: "/placeholder.svg?height=50&width=50",
      lastMessage: "You: Lets connect",
      time: "13m ago",
    },
    {
      id: "5",
      name: "Manmohan Desia",
      avatar: "/placeholder.svg?height=50&width=50",
      lastMessage: "You: Lets connect",
      time: "13m ago",
    },
    {
      id: "6",
      name: "Kajol Sharma",
      avatar: "/placeholder.svg?height=50&width=50",
      lastMessage: "You: Lets connect",
      time: "13m ago",
    },
  ]

  return (
    <div className="flex-1 overflow-y-auto">
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
      <div className="flex justify-center p-4">
        <button className="px-6 py-2 text-red-500 border border-gray-200 rounded-full hover:bg-gray-50">
          Load more
        </button>
      </div>
    </div>
  )
}

function ContactItem({ contact }: { contact: Contact }) {
  return (
    <div className={`flex items-center p-4 hover:bg-gray-50 cursor-pointer ${contact.isActive ? "bg-red-50" : ""}`}>
      <div className="relative mr-3">
        <Image
          src={contact.avatar || "/placeholder.svg"}
          alt={contact.name}
          width={50}
          height={50}
          className="rounded-full"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-gray-900">{contact.name}</h4>
        <p className={`text-sm truncate ${contact.unread ? "text-red-500 font-medium" : "text-gray-500"}`}>
          {contact.lastMessage}
        </p>
      </div>
      <div className="flex flex-col items-end ml-2">
        <span className="text-xs text-gray-500">{contact.time}</span>
        {contact.unread && <Badge className="mt-1 bg-red-500 hover:bg-red-600">{contact.unread}</Badge>}
      </div>
    </div>
  )
}

