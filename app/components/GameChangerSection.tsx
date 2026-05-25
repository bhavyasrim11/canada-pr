"use client";

import React from "react";
import Image from "next/image";

const steps = [
  {
    number: 1,
    heading: "Check Your Points",
    text: "Check your points followed by your education assessment by WES or other related assessing bodies.",
  },
  {
    number: 2,
    heading: "Apply via Express Entry",
    text: "Apply online through an electronic portal called Express Entry, get selected based on your ranking.",
  },
  {
    number: 3,
    heading: "Receive Invitation to Apply",
    text: "Receive an Invitation to Apply. Make the final application along with documents and relevant fees.",
  },
];

const CanadaPRSteps: React.FC = () => {
  return (
    <section className="bg-white w-full px-4 md:px-10 lg:px-20 py-4">
      <div className="max-w-7xl mx-auto">

        {/* TOP HEADING */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            <span className="text-[#0B132B]">
              How to Apply for
            </span>{" "}
            <span className="text-[#d80621]">
              Canada PR Visa
            </span>
          </h2>
        </div>

        {/* Two-column layout: Left content | Right image */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-10">

          {/* LEFT COLUMN */}
          <div className="flex-1 flex flex-col justify-start">

            {/* Intro text */}
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-2">
              Canada Permanent Resident Visa or Canada PR Visa is most sought
              after visa category for skilled professionals in India and globally.
            </p>

            <p className="text-gray-900 font-bold text-base md:text-lg leading-relaxed mb-8">
              To apply for Canada PR visa, you need to follow 3 simple steps.
            </p>

            {/* Steps */}
            <div className="flex flex-col gap-6">
              {steps.map((item) => (
                <div key={item.number} className="flex flex-col gap-1">
                  <p className="text-gray-900 text-base md:text-lg leading-relaxed">
                    <span className="font-bold text-[#ff6b00]">
                      STEP {item.number}:
                    </span>{" "}
                    <span>{item.text}</span>
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-10">
              <button
  onClick={() => {
    document
      .getElementById("lead-form")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }}
  className="bg-[#ff6b00] hover:bg-[#e65f00] text-white font-semibold text-base px-8 py-4 rounded-full transition-colors duration-200"
>
  Get Your Process Roadmap
</button>
            </div>
          </div>

          {/* RIGHT COLUMN — Image */}
<div className="flex-1 flex justify-center lg:justify-end mt-8 lg:mt-0">

  <div className="relative w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] md:w-[420px] md:h-[420px] lg:w-full lg:max-w-[480px] lg:h-[480px] mx-auto">

    <Image
      src="/canada-pr-apply.png"
      alt="3 Steps to Apply for Canada PR Visa"
      fill
      className="object-contain"
      unoptimized
    />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CanadaPRSteps;