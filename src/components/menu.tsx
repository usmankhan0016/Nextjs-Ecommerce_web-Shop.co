"use client"
import Link from "next/link"
import { LuMenu } from "react-icons/lu";
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { NavigationMenuDemo } from "./NavigationDropdown";

const SHEET_SIDES = ["left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className="grid">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <button className="mr-3"><LuMenu/></button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle className="text-black text-[25px] font-extrabold">SHOP.CO</SheetTitle>
            </SheetHeader>
            <ul className='mt-2 flex flex-col gap-y-2'>
            <li>
                <Link href={"/"}><NavigationMenuDemo/></Link>
            </li>

            <li>
                <Link href={"/"}>On Sales</Link>
            </li>

            <li>
                <Link href={"/"}>New Arrivals</Link>
            </li>

            <li>
                <Link href={"/"}>Brands</Link>
            </li> 
        </ul>
         
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
