"use client";

import Image from "next/image";

const CanadaPRProcess = () => {
  return (
    <section
      id="canada-pr-process"
      className="w-full bg-white py-12 px-4 lg:px-8"
    >
      {/* Heading */}
     <h2 className="text-3xl sm:text-4xl font-bold text-center ">
        <span className="text-red-600">Canada PR</span>{' '}
        <span className="text-gray-900">Step-by-Step Process</span>
      </h2>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
        {/* Left Side */}
        <div className="w-full lg:w-8/12 lg:pr-8">
          <div className="text-lg lg:text-xl text-gray-700 mb-6 leading-relaxed">
            <p className="mb-8 text-center lg:text-left">
              The Canada PR process is designed to help skilled professionals migrate to Canada. 
              Here’s a simple step-by-step guide:
            </p>

            <ul className="space-y-4 list-none">
              {[
                "Get your Educational Credential Assessment.",
                "Obtain IELTS score for English proficiency.",
                "Create Express Entry Profile in FSW (Federal Skilled Worker).",
                "Ensure you meet minimum CRS points (67 points or more).",
                "Reach the Express Entry Pool.",
                "Obtain an Invitation to Apply (ITA).",
                "Submit your visa application with required documents.",
                "Wait for processing and get your visa granted.",
              ].map((step, index) => (
                <li key={index} className="flex items-start space-x-4">
                  <span className="w-8 h-8 bg-orange-500 text-white text-sm font-bold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-4/12 flex flex-col items-center lg:items-end space-y-6 lg:space-y-8">
          {/* ✅ Image - fully visible and responsive */}
          <div className="w-full max-w-md lg:max-w-none">
            <Image
              src="/canada-pr-step-by-step-process-vjc-overseas.jpg"
              alt="Canada PR Step by Step Process"
              width={500}
              height={400}
              className="w-full h-auto rounded-xl object-contain"
              priority
              unoptimized
            />
          </div>

          <a
            href="#form"
            className="px-8 py-4 bg-red-600 text-white rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg w-full max-w-xs lg:max-w-sm text-center"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default CanadaPRProcess;
