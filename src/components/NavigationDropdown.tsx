"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "New Arrivals",
    href: "/products",
    description:
      "Best quality and comfortable, beautiful, elegant clothes are availble only on at SHOP.CO store.",
  },
  {
    title: "Top Selling",
    href: "/products",
    description: "Best quality and comfortable, beautiful, elegant clothes are availble only on at SHOP.CO store.",
  },
  {
    title: "Categories",
    href: "/category",
    description:
      "Best quality and comfortable, beautiful, elegant clothes are availble only on at SHOP.CO store.",
  },
  {
    title: "Cart Products",
    href: "/cart",
    description:
      "Best quality and comfortable, beautiful, elegant clothes are availble only on at SHOP.CO store.",
  },
]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <p>Shop</p>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
          <ul className="grid w-[300px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <Link key={component.title} href={component.href}>
                  <ListItem
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
                </Link>
              ))}
            </ul>
            
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
