"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

// Define the form validation schema
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email.",
  }).optional(),
})

export function SignupForm() {
  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
    },
  })

  const router = useRouter()
  
  // Handle form submission
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    // Redirect to the upload page using Next.js router
    router.push("/upload")
  }

  return (
    <div className="max-w-md w-full mx-0 mt-12 px-4 sm:px-0">
      <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-6">Join DeCliNet</h1>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="space-y-1.5">
                <FormLabel className="text-sm font-normal text-gray-700">Username</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Choose a username" 
                    className="h-10 border border-gray-300 rounded-md px-3 focus-visible:ring-1 focus-visible:ring-gray-400" 
                    style={{ height: '44px' }}
                    {...field} 
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-500" />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-1.5">
                <FormLabel className="text-sm font-normal text-gray-700">Email (Optional)</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Your email address" 
                    className="h-10 border border-gray-300 rounded-md px-3 focus-visible:ring-1 focus-visible:ring-gray-400" 
                    style={{ height: '44px' }}
                    {...field} 
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-500" />
              </FormItem>
            )}
          />
          
          <div className="pt-2">
            <Button 
              type="submit" 
              className="w-full bg-black text-white hover:bg-gray-800 h-10 text-sm rounded-md font-medium shadow-sm"
              style={{ height: '44px' }}
            >
              Connect Wallet
            </Button>
          </div>
          
          <div className="text-xs text-gray-500 mt-4 text-center">
            By signing up, you agree to our{' '}
            <Link href="/terms" className="text-gray-500 hover:text-gray-700 underline">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="text-gray-500 hover:text-gray-700 underline">
              Privacy Policy
            </Link>.
          </div>
        </form>
      </Form>
      </div>
    </div>
  )
}
