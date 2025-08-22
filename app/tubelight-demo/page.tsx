"use client"

import React from 'react'
import { Home, User, Briefcase, FileText } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export default function TubelightNavbarPage() {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'About', url: '#', icon: User },
    { name: 'Projects', url: '#', icon: Briefcase },
    { name: 'Resume', url: '#', icon: FileText }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 relative">
      {/* Abstract Shape Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-indigo-50 rounded-full blur-3xl opacity-40 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-50 rounded-full blur-3xl opacity-40 translate-y-1/3 -translate-x-1/4"></div>
        
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10"></div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-16 md:py-32 max-w-7xl">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Tubelight Navbar
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Demo Page</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Showcasing the tubelight navbar component with animated highlights and responsive design.
          </p>
          
          <div className="mt-12 mb-32 flex justify-center">
            <NavBar items={navItems} className="static transform-none" />
          </div>
          
          <div className="mt-32 p-6 bg-white/70 backdrop-blur-md rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Implementation Details</h2>
            <p className="text-gray-600 mb-4">
              The tubelight navbar uses Framer Motion for animations and includes responsive design for both desktop and mobile views.
            </p>
            <div className="bg-gray-100 p-4 rounded-lg">
              <code className="text-sm text-gray-800">
                import {'{ NavBar }'} from "@/components/ui/tubelight-navbar"
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
