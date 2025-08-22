"use client";

import Image from "next/image";
import Link from "next/link";

export default function TestPage() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Image Test Page</h1>
      
      <div className="mb-8">
        <h2 className="text-xl mb-2">Testing image.png from public folder:</h2>
        <div className="relative h-80 w-full">
          <Image 
            src="/image.png" 
            alt="Background image test"
            fill
            style={{objectFit: "contain"}}
            priority
          />
        </div>
      </div>
      
      <Link href="/" className="text-blue-500 hover:underline">
        Back to Home
      </Link>
    </div>
  );
}
