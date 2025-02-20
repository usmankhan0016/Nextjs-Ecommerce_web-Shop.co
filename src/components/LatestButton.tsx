import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[120px]">
        <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="Latest">Latest</SelectItem>
          <SelectItem value="Trending">Trending</SelectItem>
          <SelectItem value="Casual">Casual</SelectItem>
          <SelectItem value="Professional">Classy</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
