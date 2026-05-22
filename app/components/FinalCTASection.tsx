import React from 'react';
import Image from 'next/image';
import { FaRocket, FaHome, FaDollarSign, FaClipboardCheck, FaHandshake, FaShieldAlt } from 'react-icons/fa';

interface WhyItem {
  title: string;
  icon: React.ReactNode;
  description: string;
}

const Why: React.FC = () => {
  const roadmap: WhyItem[] = [
    {
      title: "Fast Canada PR Pathway",
      icon: <FaRocket className="text-orange-550 text-3xl" />,
      description: "Canada offers a fast and structured system for skilled workers. Express Entry and PNP programs help you get your PR efficiently."
    },
    {
      title: "Path to Permanent Residency",
      icon: <FaHome className="text-orange-550 text-3xl" />,
      description: "With the right skills and work experience, Canada provides a clear path to permanent residency, giving you long-term security and growth."
    },
    {
      title: "High Earning Potential",
      icon: <FaDollarSign className="text-orange-550 text-3xl" />,
      description: "Canada provides competitive salaries in multiple sectors, allowing you and your family a high standard of living."
    },
    {
      title: "Guaranteed Work Opportunities",
      icon: <FaClipboardCheck className="text-orange-550 text-3xl" />,
      description: "Canada PR ensures that you can work legally without restrictions. Your skills are matched to the in-demand Canadian jobs."
    },
    {
      title: "Full-Time Career Prospects",
      icon: <FaHandshake className="text-orange-550 text-3xl" />,
      description: "Canada offers numerous full-time roles across industries, helping you secure a stable career and professional growth."
    },
    {
      title: "Family-Friendly Benefits",
      icon: <FaShieldAlt className="text-orange-550 text-3xl" />,
      description: "Canada provides healthcare, education, and family reunification options, ensuring your loved ones enjoy safety and social security."
    },
  ];

  return (
    <>
      <div className='h-fit mb-0 md:mb-0 lg:mb-0 tablet:mb-12 py-6 lg:py-12'>
<h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-semibold uppercase text-center mb-6 lg:mb-12 px-4">
  why <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
    Canada-PR
  </span>{' '}
  For Your Future?
</h2>


        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* TOP ROW: 65% Text + 35% Image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-8 lg:mb-8">
            {/* LEFT: First 3 items - 65% width on lg */}
            <div className="lg:col-span-8 space-y-2 lg:space-y-2">
              {roadmap.slice(0, 3).map((item, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-red-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:bg-gradient-to-br hover:from-red-50 hover:to-white">
                  <div className="flex-shrink-0 mt-1">{item.icon}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 leading-tight">{item.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT: Image - 35% width on lg */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm lg:max-w-md h-64 sm:h-72 lg:h-[22rem]">
                <Image 
                  src="/canada-pr-job-oppurtunities.jpeg" 
                  alt="Canada PR Opportunities" 
                  fill
                  className="object-cover rounded-2xl shadow-xl hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* BOTTOM ROW: 3 Items ONLY (Full Width) */}
          <div className="lg:grid lg:grid-cols-2 gap-2 lg:gap-2 lg:items-start">
            {/* Last 3 items - Full width */}
            <div className="space-y-2 lg:space-y-2 lg:col-span-2">
              {roadmap.slice(3, 6).map((item, index) => (
                <div key={index + 3} className="flex items-start space-x-2 p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-red-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:bg-gradient-to-br hover:from-red-50 hover:to-white">
                  <div className="flex-shrink-0 mt-1">{item.icon}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 leading-tight">{item.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-1 bg-linear-to-r from-red-600 to-orange-550" />
    </>
  );
};

export default Why;
