"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  TrendingUp,
  GraduationCap,
  ShieldCheck,
  Users,
  Stethoscope,
  Heart,
  ArrowRight,
} from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "High Salary Growth",
    desc: "Earn globally competitive salaries across tech, healthcare, finance, and engineering industries.",
  },
  {
    icon: GraduationCap,
    title: "World-Class Education",
    desc: "Top universities, free public schooling, and internationally recognized degrees.",
  },
  {
    icon: ShieldCheck,
    title: "Easy PR Pathway",
    desc: "Transparent immigration system with faster pathways to permanent residency and citizenship.",
  },
  {
    icon: Users,
    title: "Family Security",
    desc: "Bring your spouse and children while enjoying a secure and future-ready lifestyle.",
  },
  {
    icon: Stethoscope,
    title: "Universal Healthcare",
    desc: "Access high-quality government-funded healthcare services for your entire family.",
  },
  {
    icon: Heart,
    title: "Peaceful Lifestyle",
    desc: "Live in one of the safest and most welcoming multicultural countries in the world.",
  },
];

const IntroSection = () => {
  return (
    <section className="relative bg-white pt-10 pb-15 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-100 rounded-full blur-3xl opacity-30 translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 px-5 py-2 rounded-full mb-6">
              <div className="w-2 h-2 rounded-full bg-red-600" />

              <span className="text-sm font-semibold tracking-wide text-red-600 uppercase">
                Canada PR Visa
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-black leading-[1.1] text-slate-900 mb-4">
              Build Your{" "}
              <span className="text-red-600">
                Dream Future
              </span>{" "}
              in Canada.
            </h2>

            <p className="text-[17px] text-slate-600 leading-8 mb-6 max-w-lg">
              Canada offers unmatched career opportunities, premium quality of life,
              world-class healthcare, and a secure future for your family.
              With VJC Overseas, your immigration journey becomes faster,
              smoother, and stress-free.
            </p>

            {/* STATS */}
            <div className="flex flex-wrap gap-6 mb-8">

              <div>
                <h3 className="text-4xl font-black text-red-600">98%</h3>

                <p className="text-slate-500 text-sm mt-1">
                  Visa Success Rate
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-orange-500">20K+</h3>

                <p className="text-slate-500 text-sm mt-1">
                  Consultations
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-red-600">3000+</h3>

                <p className="text-slate-500 text-sm mt-1">
                  Families Settled
                </p>
              </div>

            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-2">

              <a
  href="#"
  onClick={(e) => {
    e.preventDefault();

    document
      .getElementById("lead-form")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }}
  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-bold shadow-xl transition-all duration-300"
>
  Start Your Application
                <ArrowRight className="w-5 h-5" />
              </a>

             <a
  href="#"
  onClick={(e) => {
    e.preventDefault();

    document
      .getElementById("lead-form")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }}
  className="inline-flex items-center gap-2 border border-slate-200 hover:border-orange-400 hover:text-orange-500 px-8 py-4 rounded-2xl font-semibold text-slate-700 transition-all duration-300"
>
  Explore Benefits
              </a>

            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >

            <div className="absolute inset-0 bg-gradient-to-tr from-red-500 to-orange-400 rounded-[40px] rotate-6 opacity-10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[40px] border border-slate-100 shadow-2xl bg-white">
              <Image
                src="/why-canada-pr-uses.png"
                alt="Canada PR"
                width={700}
                height={700}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* FLOATING CARD */}
            <div className="absolute -bottom-8 -left-8 bg-white shadow-2xl rounded-3xl p-6 border border-slate-100">

              <p className="text-sm text-slate-500 mb-2">
                Trusted Immigration Experts
              </p>

              <div className="flex items-center gap-6">

                <div>
                  <h3 className="text-3xl font-black text-red-600">
                    17+
                  </h3>

                  <p className="text-xs text-slate-500">
                    Years Experience
                  </p>
                </div>

                <div className="w-px h-12 bg-slate-200" />

                <div>
                  <h3 className="text-3xl font-black text-orange-500">
                    98%
                  </h3>

                  <p className="text-xs text-slate-500">
                    Approval Rate
                  </p>
                </div>

              </div>
            </div>

          </motion.div>
        </div>

        {/* BENEFITS SECTION */}
        <div className="mt-14">

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-6 mt-2"
          >

            <h3 className="text-[24px] lg:text-[38px] font-black text-black mb-4 leading-tight">
              WHY PROFESSIONALS CHOOSE{" "}

              <span className="text-red-600">
                CANADA
              </span>
            </h3>

           <p className="text-slate-600 text-[16px] lg:text-[18px] max-w-4xl mx-auto leading-relaxed mb-6">
              Discover the advantages of living, working, and building
              a secure future in one of the world’s best countries.
            </p>

          </motion.div>

          {/* BENEFIT CARDS */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="relative bg-white border-2 border-orange-200 rounded-[30px] px-7 py-1 shadow-md overflow-hidden"
              >

                <div className="flex flex-col items-center text-center h-full">

                  <div className="mb-[-6px] mt-[-6px] flex items-center justify-center">

                    {index === 0 && (
                      <Image
                        src="/salary-growth.png"
                        alt="High Salary Growth"
                        width={145}
                        height={145}
                        className="object-contain"
                      />
                    )}

                    {index === 1 && (
                      <Image
                        src="/education.png"
                        alt="Education"
                        width={145}
                        height={145}
                        className="object-contain"
                      />
                    )}

                    {index === 2 && (
                      <Image
                        src="/pr-pathway.png"
                        alt="PR Pathway"
                        width={145}
                        height={145}
                        className="object-contain"
                      />
                    )}

                    {index === 3 && (
                      <Image
                        src="/family-security.png"
                        alt="Family Security"
                        width={145}
                        height={145}
                        className="object-contain"
                      />
                    )}

                    {index === 4 && (
                      <Image
                        src="/healthcare.png"
                        alt="Healthcare"
                        width={145}
                        height={145}
                        className="object-contain"
                      />
                    )}

                    {index === 5 && (
                      <Image
                        src="/peaceful-lifestyle.png"
                        alt="Peaceful Lifestyle"
                        width={145}
                        height={145}
                        className="object-contain"
                      />
                    )}

                  </div>

                  <h4 className="text-[20px] font-bold text-orange-500 mb-3 leading-none">
                    {benefit.title}
                  </h4>

                  <p className="text-slate-600 leading-9 text-[16px]">
                    {benefit.desc}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
};

export default IntroSection;