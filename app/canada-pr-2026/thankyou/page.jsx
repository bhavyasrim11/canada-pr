"use client";

import Link from "next/link";
import { FaPhoneAlt, FaCheckCircle, FaArrowLeft } from "react-icons/fa";

export default function GermanyThankYouPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center pt-20 px-4">
      {/* Background Decorative Elements */}
      <div className="fixed top-20 left-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="fixed bottom-10 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -z-10"></div>

      <div className="mx-auto max-w-6xl w-full">
        <div className="relative overflow-hidden rounded-[40px] bg-white border border-gray-100 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)]">
          
          {/* Top Accent Bar */}
          <div className="h-2 w-full bg-gradient-to-r from-orange-500 via-blue-400 to-orange-500"></div>

          <div className="p-8 md:p-12 text-center">
            {/* Animated Success Icon */}
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 animate-ping rounded-full bg-green-100 opacity-75"></div>
                <FaCheckCircle className="relative text-7xl text-green-500" />
              </div>
            </div>

            <h1 className="mb-4 text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
              Thank You — We’ll Be in Touch Soon
            </h1>
            
            <p className="mx-auto max-w-md text-lg font-medium text-gray-600 leading-relaxed mb-10">
              We’ve received your Canada Pr details. Our specialists are now analysing your profile to help you move forward with confidence.
            </p>

            {/* --- CALL SECTION (SHAKING ICON) --- */}
            <div className="rounded-3xl bg-gradient-to-br from-orange-500 to-orange-600 p-8 text-white shadow-2xl shadow-orange-200">
              <p className="text-sm font-bold uppercase tracking-[0.2em] mb-4 text-orange-100">
                Need Instant Help? Call Us Now
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                {/* Shaking Phone Icon */}
                <div className="relative">
                  <div className="absolute -inset-4 rounded-full bg-white/20 animate-pulse"></div>
                  <div className="relative flex h-16 w-16 animate-bounce items-center justify-center rounded-full bg-white text-orange-600 shadow-xl">
                    <FaPhoneAlt size={28} className="animate-[shake_0.5s_infinite]" />
                  </div>
                </div>

                <div className="text-center md:text-left">
                  <a 
                    href="tel:+919160449000" 
                    className="text-3xl md:text-4xl font-black tracking-tighter hover:text-blue-200 transition-colors"
                  >
                    +91 91604 49000
                  </a>
                  <p className="text-xs font-medium text-orange-100 mt-1 uppercase tracking-widest opacity-80">
                    Available Mon - Sat (10 AM - 7 PM)
                  </p>
                </div>
              </div>
            </div>

            {/* Queries Section */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
               <div className="flex items-center gap-2 text-sm font-bold text-gray-400 uppercase tracking-widest">
                  <div className="h-px w-8 bg-gray-200"></div>
                  HAVE QUERIES?
                  <div className="h-px w-8 bg-gray-200"></div>
               </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link 
                href="/canada-pr-2026" 
                className="flex items-center gap-2 rounded-full border-2 border-blue-400 px-8 py-3 font-bold text-blue-500 hover:bg-blue-400 hover:text-white transition-all active:scale-95"
              >
                <FaArrowLeft size={14} /> Back to Home
              </Link>
              
              <a 
                href="https://wa.me/919160449000" 
                className="flex items-center gap-2 rounded-full bg-green-500 px-8 py-3 font-bold text-white shadow-lg hover:bg-green-600 transition-all active:scale-95"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Shake Animation Logic */}
      <style jsx global>{`
        @keyframes shake {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(15deg); }
          50% { transform: rotate(0eg); }
          75% { transform: rotate(-15deg); }
          100% { transform: rotate(0deg); }
        }
      `}</style>
    </main>
  );
}