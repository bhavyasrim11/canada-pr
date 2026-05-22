"use client";

import Image from "next/image";

const CanadaPRProcess = () => {
  // Points exactly as they appear in the infographic
  const eligibilityPoints = [
    { title: "Age", desc: "People between the ages 18 to 45 get so much points." },
    { title: "Education", desc: "Educational requirements equivalent to a Canadian higher secondary education." },
    { title: "Work experience", desc: "One year of full-time work experince is required for minimum points." },
    { title: "Language ability", desc: "IELTS test results of at least 5.5/6 bands." },
    { title: "Adaptability", desc: "A family / blood relative in Canada will get more benifits." },
    { title: "Arranged employment", desc: "A job offer from a Canadian employer get more benifits." },
  ];

  return (
    <section
      id="canada-pr-process"
      className="w-full bg-white py-2 px-4 lg:px-8" // Removed top/bottom space (py-2)
    >
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-6">
        <span className="text-red-600">Canada PR</span>{' '}
        <span className="text-gray-900">Eligibility</span>
      </h2>

      {/* Layout: Image Left, Text Right */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-center">
        
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-full max-w-md lg:max-w-lg">
            <Image
              src="/canada-pr-eligibility-vjc-overseas.webp"
              alt="Canada PR Eligibility Factors"
              width={600}
              height={500}
              className="w-full h-auto rounded-xl object-contain"
              priority
              unoptimized
            />
          </div>
        </div>

        {/* Right Side: Points */}
        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {eligibilityPoints.map((item, index) => (
              <div 
                key={index} 
                className={`p-4 rounded-xl border-l-4 shadow-sm ${
                  // Alternating colors based on the image's blue/red theme
                  index % 2 === 0 ? "border-blue-600 bg-blue-50/30" : "border-red-600 bg-red-50/30"
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full text-white ${
                    index % 2 === 0 ? "bg-blue-600" : "bg-red-600"
                  }`}>
                    0{index + 1}
                  </span>
                  <h3 className="font-bold text-gray-900 uppercase text-sm tracking-tight">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-gray-700 leading-snug">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Smaller Button */}
          <div className="mt-6 flex justify-center lg:justify-start">
            <a
              href="#form"
              className="px-6 py-2.5 bg-red-600 text-white rounded-lg font-semibold text-sm hover:bg-gray-900 transition-all duration-300 shadow-md"
            >
              Apply Now
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CanadaPRProcess;