"use client"

import React, { useState } from "react"
import Navbar from "@/components/Navbar"

// Simple Chevron SVG components
const ChevronDownIcon = ({className}: {className?: string}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const ChevronUpIcon = ({className}: {className?: string}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
  </svg>
);

// Define transaction history type
interface Transaction {
  date: string
  activity: string
  tokens: number
}

// Define FAQ type
interface FAQ {
  question: string
  answer: string
  isOpen?: boolean
}

export default function DashboardPage() {
  // Transaction history data
  const transactions: Transaction[] = [
    { date: "2024-07-20", activity: "Data Upload", tokens: 250 },
    { date: "2024-07-15", activity: "Study Participation", tokens: 500 },
    { date: "2024-07-10", activity: "Data Upload", tokens: 200 },
    { date: "2024-07-05", activity: "Study Participation", tokens: 150 },
    { date: "2024-07-01", activity: "Initial Data Upload", tokens: 150 },
  ]

  // FAQ data with state for opening/closing
  const [faqs, setFaqs] = useState<FAQ[]>([
    {
      question: "How are tokens earned?",
      answer: "Tokens are earned through various contributions, such as uploading health data, participating in research studies, and referring new users to the platform.",
      isOpen: true
    },
    {
      question: "What can I do with my tokens?",
      answer: "Tokens can be used for accessing premium research insights, participating in governance decisions, and receiving discounts on platform services.",
      isOpen: false
    },
    {
      question: "How do I participate in governance?",
      answer: "Token holders can vote on proposed platform changes, research priorities, and funding allocations. You need a minimum of 100 tokens to participate in governance voting.",
      isOpen: false
    }
  ])

  // Toggle FAQ open/close
  const toggleFAQ = (index: number) => {
    setFaqs(faqs.map((faq, i) => 
      i === index ? { ...faq, isOpen: !faq.isOpen } : faq
    ))
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="container mx-auto px-4 py-6 max-w-5xl">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900">Rewards Dashboard</h1>
        <p className="text-gray-600 mt-1 mb-6">Track your DCNET token earnings and data contributions.</p>

        {/* Balance Card */}
        <div className="bg-gray-50 rounded-md p-6 mb-8">
          <h2 className="text-sm font-medium text-gray-700">Total DCNET Balance</h2>
          <p className="text-3xl font-bold mt-1">1,250</p>
        </div>

        {/* Transaction History */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Transaction History</h2>
          
          <div className="border rounded-md overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-gray-50 border-b">
              <div className="px-4 py-3 text-sm font-medium text-gray-700">Date</div>
              <div className="px-4 py-3 text-sm font-medium text-gray-700">Activity</div>
              <div className="px-4 py-3 text-sm font-medium text-gray-700">Tokens Earned</div>
            </div>
            
            {/* Table Body */}
            {transactions.map((transaction, index) => (
              <div 
                key={index}
                className={`grid grid-cols-3 ${index !== transactions.length - 1 ? 'border-b' : ''}`}
              >
                <div className="px-4 py-3 text-sm text-gray-600">
                  {new Date(transaction.date).toLocaleDateString('en-US', { 
                    year: '2-digit',
                    month: '2-digit',
                    day: '2-digit'
                  })}
                </div>
                <div className="px-4 py-3 text-sm text-gray-700">{transaction.activity}</div>
                <div className="px-4 py-3 text-sm text-gray-700 font-medium">+{transaction.tokens}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Data Contribution & Reward Trends */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Data Contribution & Reward Trends</h2>
          
          <div className="border rounded-md p-6">
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700">Token Earnings Over Time</h3>
              <div className="flex items-baseline">
                <p className="text-2xl font-bold text-gray-900 mr-1">+15%</p>
              </div>
              <p className="text-xs text-gray-500">Last 3 Months <span className="text-green-600">+15%</span></p>
            </div>
            
            {/* Chart - Simple SVG representation */}
            <div className="w-full h-32 mt-4">
              <svg viewBox="0 0 600 100" className="w-full h-full stroke-gray-500 fill-none stroke-2">
                <path d="M0,50 C50,30 100,60 150,40 C200,20 250,60 300,70 C350,80 400,20 450,50 C500,80 550,30 600,40" />
              </svg>
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <div>Jul</div>
                <div>Aug</div>
                <div>Sep</div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Use Tokens */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">How to Use DCNET Tokens</h2>
          <p className="text-gray-600 mb-4">
            DCNET tokens can be used within the platform for various activities, including participating in governance decisions, 
            accessing premium research insights, and supporting specific research projects. Explore the platform to discover more 
            ways to utilize your tokens.
          </p>
        </section>

        {/* Frequently Asked Questions */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-md overflow-hidden">
                <button 
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-4 py-3 text-left flex justify-between items-center bg-white"
                >
                  <span className="text-sm font-medium text-gray-700">{faq.question}</span>
                  {faq.isOpen ? (
                    <ChevronUpIcon className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                
                {faq.isOpen && (
                  <div className="px-4 py-3 text-sm text-gray-600 border-t">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
