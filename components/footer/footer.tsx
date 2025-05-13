"use client"

import { montserrat } from "@/app/fonts/font";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname()
  const isChatPage = ["/chats", "/chats/[id]"].includes(pathname)
  if (isChatPage) {
    return null
  }
  return (
    <footer className={`${montserrat.className} bg-[#1C1C1C] text-white px-8 py-10 w-full`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 mb-12">
          {/* Logo section */}
          <div>
            <Link href="/" className="text-[#FF4700] text-2xl font-bold inline-block mb-4">
              GigCraft
            </Link>
          </div>

          {/* Navigation links */}
          <div className="flex flex-col md:flex-row gap-12">
            <div>
              <h3 className="font-medium text-lg mb-4">Company</h3>
              <div className="flex flex-col space-y-3 text-sm text-gray-300">
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
                <Link href="/leadership" className="hover:text-white transition-colors">
                  Leadership
                </Link>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="pt-6 border-t border-gray-800 text-sm text-gray-400 flex flex-col md:flex-row md:justify-between md:items-center">
          <span>© 2024 GigCraft</span>
          <div className="mt-3 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
