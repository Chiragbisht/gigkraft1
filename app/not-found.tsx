import Link from "next/link"
import { Button } from "@/components/ui/button"
import { montserrat } from "./fonts/font"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className={`text-center space-y-4 ${montserrat.className}`}>
        <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-b from-primary to-[#bd6f6e] bg-clip-text text-transparent">
          404
        </h1>
        <h2 className="text-xl font-semibold text-gray-800">Something&apos;s missing</h2>
        <p className="text-gray-600 max-w-md mx-auto">
          Sorry, the page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
          <Button
            variant="secondary"
           
            className="bg-[#E8E6F0] hover:bg-[#D8D6E0] text-gray-800"
          >
            Go back
          </Button>
          <Button variant="secondary" asChild className="bg-[#E8E6F0] hover:bg-[#D8D6E0] text-gray-800">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}