"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { usePathname } from "next/navigation"
import { montserrat } from "@/app/fonts/font"
import { useRouter } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname()
  const isAuthPage = ["/onboarding", "/signup", "/login"].includes(pathname)
  const router = useRouter()
  const handleLogin = () => {
    router.push("/login")
  }
  const handleSignup = () => {
    router.push("/signup")
  }
  return (
    <nav className={`border-b ${montserrat.className}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center text-xl font-bold">
          <span className="text-primary">UP</span>TECHUNT
        </Link>

        {/* Hide Navigation Links, Search, and Auth Buttons on Auth Pages */}
        {!isAuthPage && (
          <>
            {/* Navigation Links */}
            <div className="hidden space-x-8 lg:flex">
              <Link href="/find-talent" className="text-[14px] text-gray-600 hover:text-gray-900">
                Find Talent
              </Link>
              <Link href="/find-work" className="text-[14px] text-gray-600 hover:text-gray-900">
                Find Work
              </Link>
              <Link href="/why-uptechhunt" className="text-[14px] text-gray-600 hover:text-gray-900">
                Why UpTechhunt
              </Link>
            </div>

            {/* Search Bar */}
            <div className="hidden flex-1 max-w-sm mx-8 lg:flex rounded-full">
              <div className="relative w-full rounded-full">
                <Input type="search" placeholder="Search" className="w-full pl-10 rounded-full" />
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
              </div>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="hidden lg:inline-flex" onClick={handleLogin}>
                Log in
              </Button>
              <Button className="bg-primary text-white hover:bg-primary/90" onClick={handleSignup}>Sign up</Button>
            </div>
          </>
        )}
      </div>
    </nav>
  )
}
