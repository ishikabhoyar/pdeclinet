"use client"

import { useState } from "react"
import Image from "next/image"
import Navbar from "@/components/Navbar"
import { Button } from "@/components/ui/button"

export default function UploadPage() {
  const [uploadProgress, setUploadProgress] = useState(50)
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null)

  // Toggle FAQ expansion
  const toggleQuestion = (id: string) => {
    if (expandedQuestion === id) {
      setExpandedQuestion(null)
    } else {
      setExpandedQuestion(id)
    }
  }

  // Handle file drop and selection
  const handleFileSelect = () => {
    // File handling logic would go here
    console.log("File selected")
  }

  // Mock FAQ data
  const faqs = [
    {
      id: "file-types",
      question: "What types of files can I upload?",
      answer: "You can upload Electronic Health Records (EHR), data from fitness trackers, and DNA files in formats like PDF, CSV, and TXT."
    },
    {
      id: "data-protection",
      question: "How is my data protected?",
      answer: "Your data is encrypted using advanced cryptographic techniques and stored securely off-chain. Only authorized researchers can access anonymized versions of your data."
    },
    {
      id: "data-access",
      question: "Who can access my data?",
      answer: "Only authorized researchers with approved access can view anonymized versions of your data. Your personal identifiers are removed before any analysis."
    }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-1 max-w-screen-xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">Upload Your Health Data</h1>
          <p className="text-gray-600 mb-8">
            Securely upload your health data to contribute to research and personalized healthcare. Your data will be encrypted and stored off-chain to ensure privacy and security.
          </p>
          
          {/* Accepted data types */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Accepted Data Types</h2>
            <p className="text-gray-600">
              We accept various types of health data, including Electronic Health Records (EHR), data from fitness trackers, and DNA files. Ensure your files are in a compatible format (e.g., PDF, CSV, TXT).
            </p>
          </div>
          
          {/* File upload area */}
          <div className="border border-dashed border-gray-300 rounded-md py-16 px-4 mb-8">
            <div className="flex flex-col items-center justify-center text-center">
              <p className="text-gray-700 mb-2">Drag and drop files here or</p>
              <p className="mb-4 text-gray-600">Select Files</p>
              <Button 
                onClick={handleFileSelect}
                variant="outline" 
                className="bg-gray-50 border border-gray-300 hover:bg-gray-100 text-sm py-2 px-4 rounded-md"
              >
                Browse Files
              </Button>
            </div>
          </div>
          
          {/* Upload progress */}
          <div className="mb-8">
            <p className="text-gray-700 font-medium mb-2">Upload Progress</p>
            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden mb-1">
              <div 
                className="h-full bg-gray-800 rounded-full"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 mb-6">50%</p>
            <p className="text-gray-600 text-sm">
              Your data is encrypted using advanced cryptographic techniques and stored off-chain to ensure maximum security and privacy. Only authorized researchers with approved access will be able to view anonymized data.
            </p>
          </div>
          
          {/* FAQ section */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-2">
              {faqs.map((faq) => (
                <div 
                  key={faq.id}
                  className="border border-gray-200 rounded-md overflow-hidden"
                >
                  <button 
                    className="w-full flex items-center justify-between px-4 py-3 bg-white text-left"
                    onClick={() => toggleQuestion(faq.id)}
                  >
                    <span className="font-medium text-gray-700">{faq.question}</span>
                    <svg 
                      className={`w-5 h-5 transition-transform ${expandedQuestion === faq.id ? "transform rotate-180" : ""}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {expandedQuestion === faq.id && (
                    <div className="px-4 py-3 border-t border-gray-100 text-sm text-gray-600">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Contact support */}
          <div className="flex justify-end">
            <Button 
              variant="outline" 
              className="text-sm border border-gray-300 bg-white hover:bg-gray-50 rounded-md px-4 py-2"
            >
              Contact Support
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
