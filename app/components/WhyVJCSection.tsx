"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const TrustedVisaSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative bg-white py-10 px-6 md:pl-20 md:px-16 overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div className="relative w-full h-full">
          <Image
            src="/trustedbg.png"
            alt="canada pr explore"
            fill
            className="object-left-top object-contain"
            unoptimized
          />
        </div>
      </div>

      {/* Foreground Content */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center relative z-10">
        
        {/* LEFT SIDE - TOUCH CHEYYALEDU */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="text-sky-800 font-semibold uppercase tracking-widest">
            Why Choose VJC Overseas
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-orange-600">
            Trusted Canada PR & Immigration Experts
          </h2>

          <p className="text-gray-600">
            VJC Overseas offers expert guidance for Canada Permanent Residency.
            From eligibility checks to documentation, our experienced team
            ensures a smooth and successful application process for Federal
            Express Entry, PNP, and other PR pathways.We provide personalized
            assistance in profile creation, CRS score improvement strategies,
            and visa filing support to maximize your chances of approval.
          </p>

          {/* Button */}
          <button
            onClick={scrollToTop}
            className="relative overflow-hidden inline-block px-6 py-3 mt-6 rounded-md font-semibold text-white bg-orange-500 group"
          >
            <span className="relative z-10">Explore Canada PR</span>

            <span className="absolute inset-0 bg-sky-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
          </button>
        </motion.div>

        {/* RIGHT SIDE - SCREENSHOT STYLE */}
        <motion.div
          className="relative w-full h-[520px] hidden lg:block"
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          {/* Top Card */}
          <div className="absolute top-0 left-0 bg-white p-3 shadow-md z-20">
            <div className="relative w-[300px] h-[220px]">
              <Image
                src="/team.jpg"
                alt="Team"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>

          {/* Bottom Card */}
          <div className="absolute top-[180px] left-[180px] bg-white p-3 shadow-md z-10">
            <div className="relative w-[360px] h-[260px]">
              <Image
                src="/flag.jpg"
                alt="Flag"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TrustedVisaSection;