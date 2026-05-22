"use client";

import React, { useRef } from "react";
import {
  Phone,
  Mail,
  Upload,
  GraduationCap,
  Briefcase,
  CheckCircle,
} from "lucide-react";

const Hero = () => {

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <section className="w-full bg-[#f4f6fb] py-12 pr-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.68fr] gap-8 items-center">

          {/* LEFT SIDE */}
          <div className="relative">

           {/* TOP BADGES */}
<div className="flex items-center justify-between w-full max-w-[820px] mx-auto -mb-8 px-28">
    <div className="w-50 h-50 flex items-center justify-center">
  <img
    src="/award1.png"
    alt="award"
    className="w-full h-full object-contain"
  />
</div>

  <div className="w-50 h-50 flex items-center justify-center">
  <img
    src="/award2.png"
    alt="award"
    className="w-full h-full object-contain"
  />
</div>

<div className="w-45 h-45 flex items-center justify-center">
  <img
    src="/award3.png"
    alt="award"
    className="w-full h-full object-contain"
  />
</div>

</div>
            {/* HEADING - centered, two lines */}
           <h1 className="text-[32px] md:text-[44px] leading-[1.05] font-black text-[#ff6600] uppercase text-center">
  Settle In Canada With
</h1>

<h1 className="text-[32px] md:text-[44px] leading-[1.05] font-black text-[#ff6600] uppercase text-center">
  VJC Overseas
</h1>

            {/* SUB TEXT - centered */}
            <div className="mt-5 max-w-2xl mx-auto text-center">

              <h3 className="text-[24px] font-bold text-[#243b64]">
                Build Your Future In{" "}
                <span className="text-[#ff6600]">
                  Canada
                </span>
              </h3>

              <p className="mt-4 text-[#31496f] text-[16px] leading-[1.8]">
                Canada PR gives you access to world-class healthcare,
                high-paying jobs, free education for children, and a pathway
                to Canadian citizenship. VJC Overseas helps you with Express
                Entry profile creation, CRS score guidance, documentation,
                visa filing, and complete PR support for your entire journey.
              </p>
            </div>

            {/* POINTS - centered */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-7 max-w-2xl mx-auto">

              {[
                "Free Healthcare",
                "High Salary Jobs",
                "PR To Citizenship",
                "Family Benefits",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2"
                >
                  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                  </div>

                  <span className="text-[#243b64] font-semibold text-[15px]">
                    {item}
                  </span>
                </div>
              ))}

            </div>

            {/* BUTTON - centered */}
            <div className="flex justify-center mt-8">
              <button className="bg-[#ff6600] hover:bg-[#e65c00] transition-all duration-300 text-white font-bold text-lg px-10 py-3 rounded-2xl shadow-xl">
                Apply Now
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
         <div className="relative flex justify-end pr-4 -ml-10">

            {/* GLOW */}
            <div className="absolute -top-8 right-0 w-36 h-36 bg-orange-200 rounded-full blur-3xl opacity-30" />

            {/* FORM */}
            <div className="relative w-full max-w-[470px] bg-gradient-to-br from-[#ff7b00] to-[#f7b15f] rounded-[26px] p-4 md:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.15)]">

              {/* TITLE */}
              <h2 className="text-white text-center text-[20px] md:text-[24px] font-black leading-tight whitespace-nowrap">
                Check Your Eligibility For Canada PR
              </h2>

              {/* FORM */}
              <form className="mt-4 space-y-2.5">

                {/* NAME */}
                <div>
                  <label className="block text-black font-black tracking-[1px] text-[10px] uppercase mb-1">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full h-[42px] rounded-[14px] bg-[#f3f3f3] border border-[#d9d9d9] px-4 text-[15px] text-gray-700 outline-none focus:border-black"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="block text-black font-black tracking-[1px] text-[10px] uppercase mb-1">
                    Email Address
                  </label>

                  <div className="relative">

                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />

                    <input
                      type="email"
                      placeholder="john@company.com"
                      className="w-full h-[42px] rounded-[14px] bg-[#f3f3f3] border border-[#d9d9d9] pl-10 pr-4 text-[14px] text-gray-700 outline-none focus:border-black"
                    />
                  </div>
                </div>

                {/* PHONE */}
                <div>
                  <label className="block text-black font-black tracking-[1px] text-[10px] uppercase mb-1">
                    Whatsapp / Phone
                  </label>

                  <div className="relative">

                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />

                    <input
                      type="text"
                      placeholder="+91..."
                      className="w-full h-[42px] rounded-[14px] bg-[#f3f3f3] border border-[#d9d9d9] pl-10 pr-4 text-[14px] text-gray-700 outline-none focus:border-black"
                    />
                  </div>
                </div>

                {/* EXPERIENCE */}
                <div>
                  <label className="block text-black font-black tracking-[1px] text-[10px] uppercase mb-1">
                    Experience
                  </label>

                  <div className="relative">

                    <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 z-10" />

                    <select className="w-full h-[42px] rounded-[14px] bg-[#f3f3f3] border border-[#d9d9d9] pl-10 pr-4 text-[14px] text-gray-700 outline-none appearance-none focus:border-black">

                      <option>Select</option>
                      <option>0 - 1 Years</option>
                      <option>1 - 3 Years</option>
                      <option>3 - 5 Years</option>
                      <option>5+ Years</option>

                    </select>
                  </div>
                </div>

                {/* EDUCATION */}
                <div>
                  <label className="block text-black font-black tracking-[1px] text-[10px] uppercase mb-1">
                    Education
                  </label>

                  <div className="relative">

                    <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 z-10" />

                    <select className="w-full h-[42px] rounded-[14px] bg-[#f3f3f3] border border-[#d9d9d9] pl-10 pr-4 text-[14px] text-gray-700 outline-none appearance-none focus:border-black">

                      <option>Select</option>
                      <option>Bachelors</option>
                      <option>Masters</option>
                      <option>Diploma</option>
                      <option>PHD</option>

                    </select>
                  </div>
                </div>

                {/* RESUME */}
                <div>

                  <label className="block text-black font-black tracking-[1px] text-[10px] uppercase mb-1">
                    Upload Resume *
                  </label>

                  <div
                    onClick={handleUploadClick}
                    className="bg-[#f5ece4] border border-dashed border-orange-400 rounded-[14px] p-3 text-center cursor-pointer hover:bg-[#f9dfcf] transition-all duration-300"
                  >

                    <div className="w-10 h-10 rounded-full bg-white mx-auto flex items-center justify-center shadow-md mb-2">
                      <Upload className="w-5 h-5 text-orange-500" />
                    </div>

                    <h4 className="text-orange-600 font-bold text-[13px]">
                      Upload Resume
                    </h4>

                    <p className="text-gray-600 mt-1 text-[10px]">
                      PDF, DOC, DOCX
                    </p>

                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                    />
                  </div>
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="w-full h-[46px] bg-white hover:bg-gray-100 transition-all duration-300 rounded-[14px] text-black font-black tracking-[2px] text-[13px] shadow-xl"
                >
                  EVALUATE ELIGIBILITY
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;