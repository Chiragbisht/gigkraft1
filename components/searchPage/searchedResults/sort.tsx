"use client"

import { useState } from "react"
import { Check, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { montserrat } from "@/app/fonts/font"

type SortOption = {
  label: string
  value: string
}

const sortOptions: SortOption[] = [
  { label: "Latest", value: "latest" },
  { label: "Most Relevant", value: "relevant" },
  { label: "Most Popular", value: "popular" },
  { label: "Highest Rated", value: "rating" },
]

export function SortDropdown() {
  const [sort, setSort] = useState("latest")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className={`w-[200px] justify-between ${montserrat.className} focus:outline-none`}>
          <span>Sort by: {sortOptions.find((option) => option.value === sort)?.label}</span>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={ `${montserrat.className} w-[200px] focus:outline-none`}>
        <DropdownMenuRadioGroup value={sort} onValueChange={setSort}>
          {sortOptions.map((option) => (
            <DropdownMenuRadioItem
              key={option.value}
              value={option.value}
              className="flex items-center justify-between"
            >
              {option.label}
              {sort === option.value && <Check className="h-4 w-4 text-primary" />}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

