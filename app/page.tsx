import Navbar from "@/components/Navbar";
import { SignupForm } from "@/components/SignupForm";
import Image from "next/image";
import backgroundImage from "./image.png";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative min-h-screen">
        {/* Background image using Next.js Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={backgroundImage}
            alt="Background"
            fill
            priority
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </div>
        {/* Dark overlay for better readability */}
        <div className="absolute inset-0 bg-black bg-opacity-30 z-[1]"></div>

        {/* Content */}
        <div className="container relative z-[2] mx-auto px-4 py-12 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-5 lg:col-span-4 flex flex-col justify-center">
              <SignupForm />
            </div>

            <div className="md:col-span-7 lg:col-span-8 hidden md:flex md:items-center md:justify-center">
              {/* Right side content - can be empty or add something here later */}
              {/* <div className="text-white">
                <h1 className="text-4xl font-bold mb-4">DeCliNet</h1>
                <p className="text-xl">Secure, decentralized health data sharing platform</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
