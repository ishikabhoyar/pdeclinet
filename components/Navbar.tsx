"use client"

import * as React from "react"
import Link from "next/link"

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25" />
            </svg>
            <span className="font-bold text-lg">DeCliNet</span>
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link 
            href="/" 
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Home
          </Link>
          <Link 
            href="/dashboard" 
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Dashboard
          </Link>
          <Link 
            href="/research" 
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Research
          </Link>
          <Link 
            href="/funding" 
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Funding
          </Link>
          <Link 
            href="/community" 
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Community
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-gray-700 hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </button>
          <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Profile" className="h-full w-full object-cover" />
          </div>
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
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100">
          <div className="flex flex-col space-y-4 p-4">
            <Link 
              href="/" 
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Home
            </Link>
            <Link 
              href="/dashboard" 
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Dashboard
            </Link>
            <Link 
              href="/research" 
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Research
            </Link>
            <Link 
              href="/funding" 
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Funding
            </Link>
            <Link 
              href="/community" 
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Community
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}



export default Navbar