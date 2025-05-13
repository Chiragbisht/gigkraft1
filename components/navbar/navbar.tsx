"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Menu, Search, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { montserrat } from "@/app/fonts/font"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export default function Navbar() {
  const pathname = usePathname()
  const isAuthPage = ["/onboarding", "/signup", "/login"].includes(pathname)
  const isChatPage = ["/chats", "/chats/[id]"].includes(pathname)
  const router = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  // Close mobile menu when clicking outside or on route change
  useEffect(() => {
    const handleRouteChange = () => {
      setIsMobileMenuOpen(false)
    }
    
    // Add event listener for route changes
    window.addEventListener('popstate', handleRouteChange)
    
    // Prevent body scrolling when menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange)
      document.body.style.overflow = 'auto'
    }
  }, [isMobileMenuOpen])
  
  const handleLogin = () => {
    setIsMobileMenuOpen(false)
    router.push("/login")
  }
  
  const handleSignup = () => {
    setIsMobileMenuOpen(false)
    router.push("/signup")
  }
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }
  
  if (isChatPage) {
    return null
  }
  
  return (
    <nav className={`relative border-b ${montserrat.className}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-0">
        {/* Logo */}
        <div className="relative z-20">
          <Link href="/" className="flex items-center text-xl font-bold">
            <span className="text-primary">Gig</span>Craft
          </Link>
        </div>

        {/* Mobile menu button */}
        {!isAuthPage && (
          <button 
            className="lg:hidden relative z-20 p-2" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        )}

        {/* Desktop Navigation */}
        {!isAuthPage && (
          <div className="hidden lg:flex items-center justify-between flex-1 ml-8">
            {/* Navigation Links */}
            <div className="flex space-x-8">
              <Link href="/find-talent" className="text-[14px] text-gray-600 hover:text-gray-900">
                Find Talent
              </Link>
              <Link href="/find-work" className="text-[14px] text-gray-600 hover:text-gray-900">
                Find Work
              </Link>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-sm mx-8 rounded-full">
              <div className="relative w-full rounded-full">
                <Input type="search" placeholder="Search" className="w-full pl-10 rounded-full" />
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
              </div>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={handleLogin}>
                Log in
              </Button>
              <Button className="bg-primary text-white hover:bg-primary/90" onClick={handleSignup}>
                Sign up
              </Button>
            </div>
          </div>
        )}

        {/* Mobile Menu (Overlay) */}
        {!isAuthPage && (
          <div 
            className={`fixed inset-0 bg-white z-10 lg:hidden transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="flex flex-col px-4 py-6 space-y-6 pt-20">
              {/* Mobile Navigation Links */}
              <div className="flex flex-col space-y-4 border-b border-gray-100 pb-6">
                <Link 
                  href="/find-talent" 
                  className="text-gray-700 text-lg font-medium hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Find Talent
                </Link>
                <Link 
                  href="/find-work" 
                  className="text-gray-700 text-lg font-medium hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Find Work
                </Link>
                <Link 
                  href="/about" 
                  className="text-gray-700 text-lg font-medium hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link 
                  href="/leadership" 
                  className="text-gray-700 text-lg font-medium hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Leadership
                </Link>
                <Link 
                  href="/contact" 
                  className="text-gray-700 text-lg font-medium hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
              
              {/* Mobile Auth Buttons */}
              <div className="flex flex-col space-y-3 pt-2">
                <Button 
                  variant="outline" 
                  className="w-full justify-center"
                  onClick={handleLogin}
                >
                  Log in
                </Button>
                <Button 
                  className="w-full bg-primary text-white hover:bg-primary/90 justify-center"
                  onClick={handleSignup}
                >
                  Sign up
                </Button>
              </div>
            </div>
          </div>
        )}
        
        {/* Backdrop for mobile menu */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-30 z-0 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </div>
    </nav>
  )
}
