"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/globe.svg" alt="Logo" width={24} height={24} className="text-foreground" />
            <span className="font-medium text-lg">PdecliNet</span>
          </Link>
        </div>
        <NavigationMenu>
          <NavigationMenuList className="hidden md:flex space-x-1">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm font-medium text-gray-700 hover:text-gray-900 px-3 py-2">Features</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {features.map((feature) => (
                    <ListItem
                      key={feature.title}
                      title={feature.title}
                      href={feature.href}
                    >
                      {feature.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/pricing" className="text-sm font-medium text-gray-700 hover:text-gray-900 px-3 py-2">
                  Pricing
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-gray-900 px-3 py-2">
                  About
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="hidden md:flex items-center space-x-4">
          <Link 
            href="/login" 
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Log in
          </Link>
          <Link 
            href="/signup" 
            className="bg-gray-900 text-white rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-800"
          >
            Get Started
          </Link>
        </div>
        <button 
          className="md:hidden p-2 rounded-md"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </header>
  )
}

const features = [
  {
    title: "Analytics",
    href: "/features/analytics",
    description:
      "Real-time data insights and reporting dashboards.",
  },
  {
    title: "Security",
    href: "/features/security",
    description:
      "Advanced security features to protect your data.",
  },
  {
    title: "Integrations",
    href: "/features/integrations",
    description:
      "Connect with your favorite tools and platforms.",
  },
  {
    title: "Automation",
    href: "/features/automation",
    description:
      "Streamline your workflows with smart automation.",
  },
]

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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-50 focus:bg-gray-50",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium text-gray-900">{title}</div>
          <p className="line-clamp-2 text-sm text-gray-500 mt-1">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default Navbar