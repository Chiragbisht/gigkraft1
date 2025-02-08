import { montserrat } from "@/app/fonts/font";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={`${montserrat.className} bg-[#1C1C1C] text-white px-8  w-full h-auto`}>
      <div className="max-w-7xl mx-auto pt-4 py-2">
        <div className="mb-12">
          <Link href="/" className="text-[#FF4700] text-2xl font-bold">
            UPTECHUNT
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          
          <div className="space-y-4">
            <h3 className="font-medium mb-6">For clients</h3>
            <div className="flex flex-col space-y-3 text-sm text-gray-300">
              <Link href="/how-to-hire" className="hover:text-white">
                How to Hire
              </Link>
              <Link href="/talent-marketplace" className="hover:text-white">
                Talent Marketplace
              </Link>
              <Link href="/project-catalog" className="hover:text-white">
                Project Catalog
              </Link>
              <Link href="/talent-scout" className="hover:text-white">
                Talent Scout
              </Link>
              <Link href="/enterprise" className="hover:text-white">
                Enterprise
              </Link>
              <Link href="/payroll-services" className="hover:text-white">
                Payroll Services
              </Link>
              <Link href="/direct-contracts" className="hover:text-white">
                Direct Contracts
              </Link>
              <Link href="/hire-worldwide" className="hover:text-white">
                Hire Worldwide
              </Link>
              <Link href="/hire-usa" className="hover:text-white">
                Hire in the USA
              </Link>
            </div>
          </div>

          
          <div className="space-y-4">
            <h3 className="font-medium mb-6">For Talent</h3>
            <div className="flex flex-col space-y-3 text-sm text-gray-300">
              <Link href="/for-talent" className="hover:text-white">
                For Talent
              </Link>
              <Link href="/find-work" className="hover:text-white">
                How to Find Work
              </Link>
              <Link href="/direct-contracts" className="hover:text-white">
                Direct Contracts
              </Link>
              <Link href="/find-freelance-jobs" className="hover:text-white">
                Find Freelance Jobs Worldwide
              </Link>
              <Link href="/find-us-jobs" className="hover:text-white">
                Find Freelance Jobs in the USA
              </Link>
            </div>
          </div>

          
          <div className="space-y-4">
            <h3 className="font-medium mb-6">Resources</h3>
            <div className="flex flex-col space-y-3 text-sm text-gray-300">
              <Link href="/help-support" className="hover:text-white">
                Help & Support
              </Link>
              <Link href="/success-stories" className="hover:text-white">
                Success Stories
              </Link>
              <Link href="/reviews" className="hover:text-white">
                Upwork Reviews
              </Link>
              <Link href="/resources" className="hover:text-white">
                Resources
              </Link>
              <Link href="/blog" className="hover:text-white">
                Blog
              </Link>
              <Link href="/community" className="hover:text-white">
                Community
              </Link>
              <Link href="/affiliate-program" className="hover:text-white">
                Affiliate Program
              </Link>
            </div>
          </div>

          
          <div className="space-y-4">
            <h3 className="font-medium mb-6">Company</h3>
            <div className="flex flex-col space-y-3 text-sm text-gray-300">
              <Link href="/about" className="hover:text-white">
                About Us
              </Link>
              <Link href="/leadership" className="hover:text-white">
                Leadership
              </Link>
              <Link href="/investor-relations" className="hover:text-white">
                Investor Relations
              </Link>
              <Link href="/careers" className="hover:text-white">
                Careers
              </Link>
              <Link href="/our-impact" className="hover:text-white">
                Our Impact
              </Link>
              <Link href="/press" className="hover:text-white">
                Press
              </Link>
              <Link href="/contact" className="hover:text-white">
                Contact Us
              </Link>
              <Link href="/trust" className="hover:text-white">
                Trust, Safety & Security
              </Link>
              <Link href="/modern-slavery" className="hover:text-white">
                UK Modern Slavery Statement
              </Link>
            </div>
          </div>

          
          <div className="mb-12">
            <h3 className="font-medium mb-6">Download our App</h3>
            <div className="flex space-x-4">
              <Link
                href=""
                className="h-10 w-[135px]rounded flex items-center justify-center"
              >
                Play Store
              </Link>
              <Link
                href=""
                className="h-10 w-[135px] rounded flex items-center justify-center"
              >
                App Store
              </Link>
            </div>
          </div>
        </div>

        
        <div className="pt-8 border-t border-gray-800 text-xs text-gray-400">
          <div className="flex flex-wrap gap-4 items-center">
            <span>© 2001-2024 uptechunt</span>
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/ca-notice" className="hover:text-white">
              CA Notice at Collection
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
