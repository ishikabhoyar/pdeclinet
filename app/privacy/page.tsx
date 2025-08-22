"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Navbar from "@/components/Navbar"
import { Button } from "@/components/ui/button"

interface ResearcherProject {
  researcher: string;
  project?: string;
  accessLevel: string;
  duration: string;
}

export default function PrivacySettingsPage() {
  const router = useRouter()
  const [selectedTimeframe, setSelectedTimeframe] = useState<string>("indefinitely")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  
  // Research categories
  const researchCategories = [
    "Diabetes Research",
    "Cardiology Research",
    "Oncology Research",
    "Neurology Research",
    "Genetics Research"
  ]
  
  // Mock specific permissions data
  const specificPermissions: ResearcherProject[] = [
    {
      researcher: "Dr. Amelia Harper",
      accessLevel: "Full Access",
      duration: "Until Dec 31, 2024"
    },
    {
      researcher: "Project: Heart Health Study",
      accessLevel: "Limited Access",
      duration: "Until Jun 30, 2024"
    },
    {
      researcher: "Dr. Ethan Carter",
      accessLevel: "No Access",
      duration: "N/A"
    }
  ]
  
  // Handle category selection
  const handleCategoryChange = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category))
    } else {
      setSelectedCategories([...selectedCategories, category])
    }
  }
  
  // Handle save changes
  const handleSaveChanges = () => {
    console.log({
      timeframe: selectedTimeframe,
      categories: selectedCategories
    })
    // In a real app, you would save these settings to a database or API
    alert("Privacy settings saved successfully!")
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="max-w-screen-xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-semibold text-gray-900 mb-1">Privacy Settings</h1>
          <p className="text-sm text-gray-600 mb-6">Manage your data sharing permissions</p>
          
          {/* Research Categories */}
          <div className="mb-6">
            <h2 className="text-base font-medium text-gray-900 mb-3">Research Categories</h2>
            <div className="space-y-2">
              {researchCategories.map((category) => (
                <div key={category} className="flex items-center">
                  <input
                    type="checkbox"
                    id={category.replace(/\s+/g, '-').toLowerCase()}
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                    className="h-4 w-4 text-black border-gray-300 rounded focus:ring-gray-400"
                  />
                  <label 
                    htmlFor={category.replace(/\s+/g, '-').toLowerCase()}
                    className="ml-2 text-sm text-gray-700"
                  >
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          {/* Data Sharing Timeframe */}
          <div className="mb-6">
            <h2 className="text-base font-medium text-gray-900 mb-3">Data Sharing Timeframe</h2>
            <div className="space-y-2">
              <div className="flex items-center border border-gray-200 rounded-md px-4 py-2">
                <input
                  type="radio"
                  id="share-indefinitely"
                  name="sharing-timeframe"
                  value="indefinitely"
                  checked={selectedTimeframe === "indefinitely"}
                  onChange={() => setSelectedTimeframe("indefinitely")}
                  className="h-4 w-4 text-black border-gray-300 focus:ring-gray-400"
                />
                <label 
                  htmlFor="share-indefinitely"
                  className="ml-2 text-sm text-gray-700"
                >
                  Share data indefinitely
                </label>
              </div>
              
              <div className="flex items-center border border-gray-200 rounded-md px-4 py-2">
                <input
                  type="radio"
                  id="share-limited"
                  name="sharing-timeframe"
                  value="limited"
                  checked={selectedTimeframe === "limited"}
                  onChange={() => setSelectedTimeframe("limited")}
                  className="h-4 w-4 text-black border-gray-300 focus:ring-gray-400"
                />
                <label 
                  htmlFor="share-limited"
                  className="ml-2 text-sm text-gray-700"
                >
                  Share data for a limited time
                </label>
              </div>
              
              <div className="flex items-center border border-gray-200 rounded-md px-4 py-2">
                <input
                  type="radio"
                  id="do-not-share"
                  name="sharing-timeframe"
                  value="none"
                  checked={selectedTimeframe === "none"}
                  onChange={() => setSelectedTimeframe("none")}
                  className="h-4 w-4 text-black border-gray-300 focus:ring-gray-400"
                />
                <label 
                  htmlFor="do-not-share"
                  className="ml-2 text-sm text-gray-700"
                >
                  Do not share data
                </label>
              </div>
            </div>
          </div>
          
          {/* Select Timeframe Dropdown */}
          <div className="mb-6">
            <h2 className="text-base font-medium text-gray-900 mb-3">Select Timeframe</h2>
            <select 
              className="block w-64 py-2 px-3 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-gray-400 focus:border-gray-400 text-sm"
              disabled={selectedTimeframe !== "limited"}
            >
              <option value="">Select Timeframe</option>
              <option value="1m">1 Month</option>
              <option value="3m">3 Months</option>
              <option value="6m">6 Months</option>
              <option value="1y">1 Year</option>
            </select>
          </div>
          
          {/* Specific Permissions */}
          <div className="mb-6">
            <h2 className="text-base font-medium text-gray-900 mb-3">Specific Permissions</h2>
            <div className="border rounded-md overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-3 bg-gray-50 border-b">
                <div className="px-4 py-2.5 text-left text-sm font-medium text-gray-700">Researcher/Project</div>
                <div className="px-4 py-2.5 text-left text-sm font-medium text-gray-700">Access Level</div>
                <div className="px-4 py-2.5 text-left text-sm font-medium text-gray-700">Duration</div>
              </div>
              
              {/* Table Body */}
              {specificPermissions.map((permission, index) => (
                <div 
                  key={index} 
                  className={`grid grid-cols-3 ${index !== specificPermissions.length - 1 ? 'border-b' : ''}`}
                >
                  <div className="px-4 py-2.5 text-sm text-gray-700">{permission.researcher}</div>
                  <div className="px-4 py-2.5 text-sm text-gray-700">{permission.accessLevel}</div>
                  <div className="px-4 py-2.5 text-sm text-gray-700">{permission.duration}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Save Button */}
          <div className="flex justify-end mt-8">
            <Button
              onClick={handleSaveChanges}
              className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md text-sm"
            >
              Save Changes
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
