"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header will be automatically included by your layout */}

      <main className="relative min-h-[80vh] flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" 
             style={{ backgroundImage: 'url(/images/breakfast-portrait.jpg)' }}>
        </div>
        
        <div className="relative z-10 max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-2xl"
          >
            <h1 className="text-9xl font-bold text-accent mb-4">404</h1>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h2>
            <p className="text-gray-600 mb-8 text-lg">
              {`Oops! The page you're looking for doesn't exist or has been moved.`}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.back()}
                className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-accent text-accent font-medium rounded-lg hover:bg-accent/10 transition-colors duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
                Go Back
              </button>
              
              <Link
                href="/"
                className="bg-accent text-white px-8 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors duration-300 text-center"
              >
                Return Home
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}