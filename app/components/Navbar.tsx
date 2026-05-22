"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaWhatsapp, FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import { HiOutlineMailOpen, HiOutlinePhone } from "react-icons/hi";
import { FaGlobeAmericas } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);      // mobile menu
  const [isVisible, setIsVisible] = useState(true); // navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0);

  // Hide navbar on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="w-full">
        {/* OUTER BG with white background */}
        <div className="backdrop-blur-md bg-white shadow-[0_18px_45px_rgba(15,23,42,0.15)] border-b border-orange-400/30">
          {/* Top thin orange/blue line */}
          <div className="h-[3px] w-full bg-gradient-to-r from-orange-400 via-blue-400 to-orange-500" />

          {/* Main bar - Reduced height */}
          <div className="flex h-16 sm:h-20 items-center justify-between px-4 sm:px-6 lg:px-12 gap-4 sm:gap-6">
            {/* LEFT: Bigger Logo */}
            <div className="relative flex items-center flex-shrink-0">
              <div>
                <Image
                  src="/logo-vjc.png"
                  alt="VJC Overseas"
                  width={1260}
                  height={260}
                  className="h-32 sm:h-24 md:h-42 lg:h-42 w-auto object-contain"
                  priority
                />
              </div>
            </div>

            {/* CENTER: Desktop Info (Hidden on Mobile) */}
            <div className="hidden xl:flex items-center gap-10">
              {/* Email block */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/10 text-orange-600">
                  <HiOutlineMailOpen size={20} />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-[9px] font-bold uppercase text-slate-600 tracking-widest">
                    Email Us
                  </span>
                  <a
                    href="mailto:info@vjcoverseas.com"
                    className="text-sm font-bold text-slate-900 hover:text-orange-600 transition-colors"
                  >
                   info@vjcoverseas.com
                  </a>
                </div>
              </div>

              <div className="h-8 w-px bg-slate-200" />

              {/* WhatsApp block */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                  <FaWhatsapp size={20} />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-[9px] font-bold uppercase text-slate-600 tracking-widest">
                    Chat Live
                  </span>
                  <a
                    href="https://wa.me/919160449000"
                    className="text-sm font-bold text-slate-900 hover:text-emerald-600 transition-colors"
                  >
                    +91 91604 49000
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT: Actions */}
            <div className="flex items-center gap-2 sm:gap-4">
              <a
                href="tel:+919160449000"
                className="hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-orange-600 hover:bg-orange-500 hover:text-white transition-all shadow-lg shadow-orange-500/20"
              >
                <HiOutlinePhone size={18} />
              </a>

              {/* CALL BUTTON - Same styling as phone button */}
              <a
                href="tel:+919160449000"
                className="group flex items-center gap-1 sm:gap-2 rounded-full bg-gradient-to-r from-orange-500 via-orange-600 to-blue-500 px-3 sm:px-6 py-2 sm:py-2.5 text-[9px] sm:text-xs font-bold text-white tracking-widest hover:from-orange-400 hover:via-blue-500 hover:to-blue-400 transition-all shadow-xl shadow-orange-500/40"
              >
                <span>+91 91604 49000</span>
                <FaArrowRight className="text-xs opacity-90 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="xl:hidden p-2 text-slate-900 hover:text-orange-600"
              >
                {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU DRAWER */}
        <div
          className={`xl:hidden absolute top-full left-0 w-full bg-white border-b border-orange-400/20 transition-all duration-300 ease-in-out ${
            isOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-5"
          }`}
        >
          <div className="flex flex-col p-4 gap-4 text-sm">
            <a
              href="mailto:info@vjcoverseas.com"
              className="flex items-center gap-4 text-slate-700 hover:text-orange-600"
            >
              <HiOutlineMailOpen className="text-orange-500" size={22} />
              <span className="font-semibold">info@vjcoverseas.com</span>
            </a>
            <a
              href="https://wa.me/919160449000"
              className="flex items-center gap-4 text-slate-700 hover:text-emerald-600"
            >
              <FaWhatsapp className="text-emerald-500" size={22} />
              <span className="font-semibold">Chat on WhatsApp</span>
            </a>
            <a
              href="tel:+919160449000"
              className="flex items-center gap-4 text-slate-700 hover:text-orange-600"
            >
              <HiOutlinePhone className="text-orange-500" size={22} />
              <span className="font-semibold">Call Now</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Marquee Animation */}
      <style jsx>{`
        @keyframes marquee {
         0% {
           transform: translateX(0);
         }
         100% {
           transform: translateX(-50%);
         }
        }
        .animate-marquee {
         display: inline-block;
         animation: marquee 20s linear infinite;
        }
      `}</style>
    </header>
  );
}
