"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState("")
  const [isMobile, setIsMobile] = useState(false)
  const [uniqueId] = useState(() => `lamp-${Math.random().toString(36).slice(2, 11)}`)

  useEffect(() => {
    // Set active tab based on current pathname
    const matchedItem = items.find(item => pathname === item.url || pathname.startsWith(item.url))
    if (matchedItem) {
      setActiveTab(matchedItem.name)
    } else {
      setActiveTab(items[0].name)
    }
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [items, pathname])

  return (
    <div
      className={cn(
        "z-50",
        className,
      )}
    >
      <div className="flex items-center gap-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl py-1.5 px-1.5 rounded-full shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={(e) => {
                if (pathname === item.url) {
                  e.preventDefault();
                }
                setActiveTab(item.name);
              }}
              className={cn(
                "relative cursor-pointer text-sm font-medium px-4 py-1.5 rounded-full transition-all flex items-center justify-center",
                isActive 
                  ? "text-white" 
                  : "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/30"
              )}
            >
              <span className="relative z-10 hidden md:flex items-center gap-2">
                <Icon size={16} strokeWidth={2.5} />
                <span>{item.name}</span>
              </span>
              <span className="relative z-10 md:hidden">
                <Icon size={18} strokeWidth={2} />
              </span>
              {isActive && (
                <motion.div
                  layoutId={uniqueId}
                  className="absolute inset-0 w-full rounded-full -z-0 bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md shadow-indigo-200/50 dark:shadow-indigo-900/50"
                  initial={false}
                  animate={{ opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                    mass: 0.5,
                  }}
                >
                  <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-10 h-1 bg-white/20 rounded-full">
                    <div className="absolute w-16 h-6 bg-white/10 rounded-full blur-md -top-2 -left-3" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
