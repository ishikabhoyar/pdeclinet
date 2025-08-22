import Navbar from "@/components/Navbar";
import { SignupForm } from "@/components/SignupForm";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 max-w-screen-xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 lg:w-3/5 md:pr-12">
            {/* Content could go here (empty in the screenshot) */}
          </div>
          <div className="md:w-1/2 lg:w-2/5">
            <SignupForm />
          </div>
        </div>
      </main>
    </div>
  );
}
