"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { WiStars } from "react-icons/wi"; // Canada maple leaf alternative (use any leaf icon)
import Form from "./Form";

const Hero = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // 🎯 Smooth counting effect
  useEffect(() => {
    let start1 = 0;
    let start2 = 0;

    const interval1 = setInterval(() => {
      start1 += 30;
      if (start1 >= 6000) {
        setCount1(6000);
        clearInterval(interval1);
      } else {
        setCount1(start1);
      }
    }, 10);

    const interval2 = setInterval(() => {
      start2 += 1;
      if (start2 >= 16) {
        setCount2(16);
        clearInterval(interval2);
      } else {
        setCount2(start2);
      }
    }, 150);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

  return (
    <>
      <div
        id="home"
        className="relative w-full mt-4 min-h-screen flex items-center justify-center bg-white overflow-hidden"
      >
        <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-8 sm:gap-8 p-4 sm:p-6 items-center">
          
          {/* LEFT SIDE */}
          <div className="w-full lg:w-1/2 flex flex-col items-center text-center space-y-4 sm:space-y-6">
            
            {/* 🟥🟧 MAIN HEADING */}
            <h1 className="text-4xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-wide leading-tight">
              <span className="bg-gradient-to-r from-red-600 to-red-700 text-transparent bg-clip-text">
                Canada PR
              </span>{" "}
               Through 
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-transparent bg-clip-text">
                -VJC Overseas
              </span>
            </h1>

            {/* 🏆 Image */}
            <Image
              src="/award.png"
              alt="Award"
              width={480}
              height={240}
              className="mx-auto w-64 sm:w-80 lg:w-full max-w-md"
            />

            {/* 🇨🇦 ATTRACTIVE CANADA POINTS */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-gradient-to-r from-red-200/50 to-orange-200/50 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-sm w-full max-w-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-5 flex items-center justify-center gap-2">
                <WiStars className="text-red-500 text-2xl animate-pulse" />
                Why Choose VJC Overseas?
                <WiStars className="text-orange-500 text-2xl animate-pulse" />
              </h3>
              <ul className="text-slate-700 text-base sm:text-lg leading-relaxed space-y-3 px-2">
                {[
                  "Personalized PR guidance tailored for each applicant.",
                  "Transparent & ethical consultation process.",
                  "Trusted by 6,000+ successful PR holders.",
                  "Expertise in Express Entry & PNP pathways.",
                  "End-to-end document & visa assistance.",
                ].map((point, index) => (
                  <li key={index} className="flex items-start gap-3 group hover:translate-x-2 transition-all duration-300">
                    <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300 mt-0.5 flex-shrink-0">
                      <WiStars className="text-white text-lg" />
                    </div>
                    <span className="group-hover:text-gray-900 font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 💫 Animated Stats Cards */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6 sm:mt-10 w-full justify-center">
              
              {/* CARD 1 */}
              <div className="relative bg-gradient-to-r from-orange-500 to-orange-500 text-white px-8 sm:px-10 py-6 rounded-2xl shadow-xl flex flex-col items-center min-w-[220px] transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <h2 className="text-4xl sm:text-5xl font-extrabold drop-shadow-md">
                  {count1.toLocaleString()}+
                </h2>
                <p className="text-base sm:text-lg mt-2 font-semibold leading-tight">
                  PR Success Stories
                </p>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400/30 to-pink-400/30 blur-xl opacity-70 animate-pulse -z-10" />
              </div>

              {/* CARD 2 */}
              <div className="relative bg-gradient-to-r from-red-500 to-red-600 text-white px-8 sm:px-10 py-6 rounded-2xl shadow-xl flex flex-col items-center min-w-[220px] transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <h2 className="text-4xl sm:text-5xl font-extrabold drop-shadow-md">
                  {count2}+
                </h2>
                <p className="text-base sm:text-lg mt-2 font-semibold leading-tight">
                  Years Experience
                </p>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/30 to-sky-400/30 blur-xl opacity-70 animate-pulse -z-10" />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — FORM */}
          <div id="form" className="w-full mt-4 mb-2 lg:w-1/2 flex justify-center">
            <Form />
          </div>
        </div>
      </div>

    </>
  );
};

export default Hero;
