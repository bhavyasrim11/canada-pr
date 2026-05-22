"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// Install lucide-react if you haven't: npm install lucide-react
import { 
  TrendingUp, 
  GraduationCap, 
  ShieldCheck, 
  Users, 
  Stethoscope, 
  Heart 
} from "lucide-react";

const WhyCanada = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "High Earning Potential",
      desc: "Competitive salaries across IT, healthcare, and engineering fields.",
    },
    {
      icon: GraduationCap,
      title: "Top Education System",
      desc: "Access to world-class universities and free public schooling.",
    },
    {
      icon: ShieldCheck,
      title: "Path to Citizenship",
      desc: "Eligible for Canadian citizenship within 3 years of PR status.",
    },
    {
      icon: Users,
      title: "Family Sponsorship",
      desc: "Sponsor your spouse, children, or parents to join you.",
    },
    {
      icon: Stethoscope,
      title: "Free Healthcare",
      desc: "Government-funded medical care for you and your family.",
    },
    {
      icon: Heart,
      title: "Safe & Peaceful",
      desc: "Consistently ranked among the world's safest countries.",
    },
  ];

  return (
    <section className="relative py-14 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* 🇨🇦 LEFT SIDE: STICKY CONTENT */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-2/5 lg:sticky lg:top-10"
          >
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-red-600 uppercase bg-red-50 rounded-full">
              Why Canada?
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
              Your Future Secured in the <span className="text-red-600">Great White North.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Canada is a global leader in quality of life. With a clear PR pathway and a booming economy, it's the #1 choice for professionals worldwide.
            </p>
            
            <div className="relative group overflow-hidden rounded-2xl mb-8">
              <Image
                  src="/why-canada-pr-uses.png" 
                  alt="Why Choose Canada PR"
                  width={600}
                  height={500}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
            </div>

            {/* ✅ BUTTON MOVED BELOW IMAGE - SITTING NICE */}
            <a
              href="#form"
              className="w-full inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white font-bold rounded-xl shadow-xl hover:bg-red-700 transition-all active:scale-95"
            >
              Start Your Application
            </a>
          </motion.div>

          {/* 🌟 RIGHT SIDE: RED-200 BENTO GRID */}
          <div className="w-full lg:w-3/5 grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-8 border border-red-200 bg-red-200/50 hover:bg-red-200 hover:shadow-2xl hover:shadow-red-200/50 transition-all duration-300 group rounded-3xl"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white shadow-sm mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                  <benefit.icon className="w-6 h-6 text-red-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCanada;
