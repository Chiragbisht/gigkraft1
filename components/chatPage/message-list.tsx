import Image from "next/image"

type Message = {
  id: string
  text: string
  sender: "user" | "contact"
  time: string
}

export default function MessageList() {
  const messages: Message[] = [
    {
      id: "1",
      text: "Ok going for dinner, bat karta hu 10 min. Mein",
      sender: "contact",
      time: "12/28/21, 10:59 AM",
    },
    {
      id: "2",
      text: "Ok sir take your time",
      sender: "user",
      time: "",
    },
    {
      id: "3",
      text: "Ok going for dinner, bat karta hu 10 min. Mein",
      sender: "contact",
      time: "12/28/21, 10:59 AM",
    },
    {
      id: "4",
      text: "Ok sir take your time Ok sir take your timeOk sir take your time",
      sender: "user",
      time: "",
    },
    {
      id: "5",
      text: "Ok going for dinner, bat karta hu 10 min. Mein",
      sender: "contact",
      time: "12/28/21, 10:59 AM",
    },
    {
      id: "6",
      text: "Ok sir take your time Ok sir take your timeOk sir take your time",
      sender: "user",
      time: "",
    },
    {
      id: "7",
      text: "Ok going for dinner, bat karta hu 10 min. Mein",
      sender: "contact",
      time: "12/28/21, 10:59 AM",
    },
    {
      id: "8",
      text: "Ok sir take your time Ok sir take your timeOk sir take your time",
      sender: "user",
      time: "",
    },
  ]

  return (
    <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
      <div className="space-y-4">
        {messages.map((message) => (
          <MessageItem key={message.id} message={message} />
        ))}
      </div>
    </div>
  )
}

function MessageItem({ message }: { message: Message }) {
  if (message.sender === "contact") {
    return (
      <div className="flex items-start">
        <Image
          src="/placeholder.svg?height=40&width=40"
          alt="Contact"
          width={32}
          height={32}
          className="mr-2 rounded-full"
        />
        <div className="max-w-[70%]">
          <div className="p-3 bg-gray-200 rounded-lg rounded-tl-none">
            <p className="text-sm">{message.text}</p>
          </div>
          {message.time && <p className="mt-1 text-xs text-gray-500">{message.time}</p>}
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-start justify-end">
      <div className="max-w-[70%]">
        <div className="p-3 text-white bg-red-500 rounded-lg rounded-tr-none">
          <p className="text-sm">{message.text}</p>
        </div>
        {message.time && <p className="mt-1 text-xs text-right text-gray-500">{message.time}</p>}
      </div>
    </div>
  )
}

