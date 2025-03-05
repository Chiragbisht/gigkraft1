import { Search } from "lucide-react"
import ContactList from "@/components/chatPage/contact-list"

export default function Sidebar() {
  return (
    <div className="flex flex-col h-full">
      <div className="p-4 bg-gray-50">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full py-2 pl-10 pr-4 text-sm bg-gray-100 rounded-full focus:outline-none"
          />
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
        </div>
      </div>
      <ContactList />
    </div>
  )
}

