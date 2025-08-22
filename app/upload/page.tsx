"use client"

import { useState, useRef, useCallback } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Navbar from "@/components/Navbar"
import { Button } from "@/components/ui/button"

export default function UploadPage() {
  const router = useRouter()
  const [uploadProgress, setUploadProgress] = useState(0)
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null)
  const [files, setFiles] = useState<File[]>([])
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Toggle FAQ expansion
  const toggleQuestion = (id: string) => {
    if (expandedQuestion === id) {
      setExpandedQuestion(null)
    } else {
      setExpandedQuestion(id)
    }
  }
  
  // Handle drag events
  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }
  
  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }
  
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    if (!isDragging) setIsDragging(true)
  }
  
  // Handle file drop
  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
    
    const droppedFiles = Array.from(e.dataTransfer.files)
    if (droppedFiles.length > 0) {
      setFiles(prev => [...prev, ...droppedFiles])
      simulateUpload()
    }
  }, [])
  
  // Handle file selection via button
  const handleFileSelect = () => {
    fileInputRef.current?.click()
  }
  
  // Handle file input change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFiles = Array.from(e.target.files)
      setFiles(prev => [...prev, ...selectedFiles])
      simulateUpload()
    }
  }
  
  // Simulate upload progress
  const simulateUpload = () => {
    setUploadProgress(0)
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 5
      })
    }, 200)
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
          <div 
            className={`border-2 border-dashed ${isDragging ? 'border-gray-500 bg-gray-50' : 'border-gray-300'} rounded-md py-16 px-4 mb-8 transition-colors duration-200 ease-in-out`}
            onDragEnter={handleDragEnter}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="flex flex-col items-center justify-center text-center">
              <p className="text-gray-700 mb-2">Drag and drop files here or</p>
              <p className="mb-4 text-gray-600">Select Files</p>
              <input
                type="file"
                multiple
                className="hidden"
                ref={fileInputRef}
                onChange={handleFileChange}
              />
              <Button 
                onClick={handleFileSelect}
                variant="outline" 
                className="bg-gray-50 border border-gray-300 hover:bg-gray-100 text-sm py-2 px-4 rounded-md"
              >
                Browse Files
              </Button>
            </div>
          </div>
          
          {/* File list */}
          {files.length > 0 && (
            <div className="mb-6">
              <p className="text-gray-700 font-medium mb-2">Selected Files</p>
              <div className="space-y-2">
                {files.map((file, index) => (
                  <div key={index} className="bg-gray-50 border border-gray-200 rounded-md p-3 flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium text-gray-700">{file.name}</p>
                      <p className="text-xs text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                    </div>
                    <button 
                      className="text-gray-500 hover:text-gray-700"
                      onClick={() => {
                        setFiles(files.filter((_, i) => i !== index))
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Upload progress */}
          <div className="mb-8">
            <p className="text-gray-700 font-medium mb-2">Upload Progress</p>
            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden mb-1">
              <div 
                className="h-full bg-gray-800 rounded-full transition-all duration-300"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 mb-6">{uploadProgress}%</p>
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
          
          {/* Action buttons */}
          <div className="flex justify-between mt-8">
            <Button 
              variant="outline" 
              className="text-sm border border-gray-300 bg-white hover:bg-gray-50 rounded-md px-4 py-2"
            >
              Contact Support
            </Button>
            
            <Button 
              onClick={() => router.push('/privacy')}
              className="text-sm bg-black text-white hover:bg-gray-800 rounded-md px-6 py-2"
            >
              Continue
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
