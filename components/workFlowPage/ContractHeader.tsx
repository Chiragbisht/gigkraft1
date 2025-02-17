"use client";

import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export function ContractHeader() {
  const pathname = usePathname();

  return (
    <div className="bg-gradient-to-r text-black w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-x-4">
            <div className="flex items-center justify-center bg-gray-50 rounded-full hover:bg-gray-200 h-8 w-8">
              <Link
                href="#"
                className="text-black hover:text-black/90 flex items-center justify-center"
              >
                <ArrowLeft className="h-6 w-6" />
              </Link>
            </div>
            <h1 className="text-xl font-semibold">My contracts</h1>
          </div>
          <div className="text-sm">
            Total earnings: <span className="font-semibold">$10.00 USD</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 text-sm font-medium">
          <Link
            href="/workflow"
            className={`pb-2 border-b-2 ${
              pathname === "/workflow"
                ? "border-red-500 text-black"
                : "border-transparent text-black/70 hover:text-red-500 hover:border-red-500"
            }`}
          >
            Active contracts (02)
          </Link>

          <button className="text-black/70 hover:text-red-500 border-b-2 border-transparent hover:border-red-500 pb-2">
            Completed contracts (07)
          </button>

          <Link
            href="/proposal"
            className={`pb-2 border-b-2 ${
              pathname === "/proposal"
                ? "border-red-500 text-black"
                : "border-transparent text-black/70 hover:text-red-500 hover:border-red-500"
            }`}
          >
            Proposals (09)
          </Link>
        </div>
      </div>
    </div>
  );
}
