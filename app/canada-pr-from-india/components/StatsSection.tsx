import React, { useState, useEffect } from 'react';
import { Award, Users, MapPin, Briefcase, ArrowRight } from 'lucide-react';

interface StatItemProps {
  endValue: number;
  label: string;
  suffix?: string;
  icon: React.ReactNode;
}

const SlowCounter: React.FC<StatItemProps> = ({ endValue, label, suffix = "", icon }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 9000; 
    const increment = endValue / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [endValue]);

  return (
    <div 
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
      className="bg-white p-8 rounded-[2rem] shadow-[0_15px_40px_rgba(255,0,0,0.08)] border-2 border-transparent hover:border-red-600 flex flex-col items-center text-center group hover:scale-105 transition-all duration-500 relative overflow-hidden"
    >
      <div className="absolute top-[-10px] right-[-10px] text-red-50 opacity-10 group-hover:opacity-20 transition-opacity">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L10.5 8.5L4 7L7 12L2 13L7 14L4 19L10.5 17.5L12 24L13.5 17.5L20 19L17 14L22 13L17 12L20 7L13.5 8.5L12 2Z" />
        </svg>
      </div>

      <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-red-600 mb-4 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      
      <h3 className="text-4xl font-bold text-gray-900 mb-1">
        {count.toLocaleString()}{suffix}
      </h3>
      
      <p className="text-red-700 font-bold tracking-widest uppercase text-[10px] border-t border-red-100 pt-2 w-full">
        {label}
      </p>
    </div>
  );
};

const StatsSection: React.FC = () => {
  return (
    <div 
      className="w-full max-w-6xl mx-auto " 
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
    >
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 uppercase">
          Our Legacy in <span className="text-red-600 underline decoration-red-200">Canada PR</span>
        </h2>
        <div className="flex justify-center items-center gap-4">
          <div className="h-1 w-16 bg-red-600 rounded-full"></div>
          <span className="text-red-600 text-xl">🍁</span>
          <div className="h-1 w-16 bg-red-600 rounded-full"></div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <SlowCounter endValue={6000} label="PR Success Stories" suffix="+" icon={<Award size={30} />} />
        <SlowCounter endValue={16} label="Years of Excellence" suffix="+" icon={<Briefcase size={30} />} />
        <SlowCounter endValue={3} label="Strategic Branches" icon={<MapPin size={30} />} />
        <SlowCounter endValue={50} label="Expert Case Officers" suffix="+" icon={<Users size={30} />} />
      </div>

      {/* CTA Button */}
      <div className="flex flex-col items-center justify-center gap-6">
        <a 
          href="#form" 
          className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white transition-all duration-200 bg-red-600 rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 shadow-xl shadow-red-200 active:scale-95 animate-bounce-subtle"
        >
          <span className="text-xl uppercase tracking-wider">Start Your PR Process Now</span>
          <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={24} />
          
          {/* Subtle Ring Animation */}
          <span className="absolute inset-0 rounded-full border-4 border-red-400 opacity-0 group-hover:animate-ping"></span>
        </a>
        
        <p className="text-gray-400 italic text-sm text-center">
          * Join 6,000+ Successful Immigrants. Free Eligibility Check.
        </p>
      </div>

      {/* Adding custom bounce for the button */}
      <style>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 3s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default StatsSection;