"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import * as AOS from "aos";
import "aos/dist/aos.css";
import { ArrowRight } from "lucide-react";

const eligibilityData = [
  {
    title: "Education",
    desc: "Minimum: High School Diploma. Higher education earns more CRS points. Bonus for Canada credentials!",
    image: "/education.jpg",
  },
  {
    title: "Language",
    desc: "Take IELTS or CELPIP. CLB 7+ required. Strong English/French gives a big CRS boost.",
    image: "/language.jpg",
  },
  {
    title: "Experience",
    desc: "Minimum 1 year of full-time skilled work in the last 10 years. Overseas experience counts; Canadian experience is a plus.",
    image: "/experience.jpg",
  },
  {
    title: "CRS Score",
    desc: "Points for valid Canadian job offers. The higher your CRS, the better your chances!",
    image: "/crs.jpg",
  },
  {
    title: "Medical",
    desc: "Must be in good health and have a clean police record to qualify for PR.",
    image: "/medical.jpg",
  },
  {
    title: "Settlement",
    desc: "Canada provides stability, safety, healthcare, and future growth.",
    image: "/settlement.jpg",
  },
];

const processData = [
  {
    number: "01",
    title: "Profile Evaluation",
    desc: "We begin by thoroughly analyzing your education, work experience, and language proficiency to determine your eligibility under Canada’s PR programs.",
    image: "/process1.png",
  },
  {
    number: "02",
    title: "Immigration Planning",
    desc: "Our experts identify the best PR pathway including Express Entry, PNP, or occupation-based streams according to your profile strength.",
    image: "/process2.png",
  },
  {
    number: "03",
    title: "Documentation Support",
    desc: "We assist in preparing ECA, IELTS, passport documents, work proofs, PCC, and all required records for smooth processing.",
    image: "/process3.png",
  },
  {
    number: "04",
    title: "Application Submission",
    desc: "Your Canada PR application is carefully prepared and submitted with complete accuracy through the official immigration portal.",
    image: "/process4.png",
  },
  {
    number: "05",
    title: "Regular Follow-Ups",
    desc: "We continuously monitor your PR application, respond to immigration queries, and keep you updated at every stage.",
    image: "/process5.png",
  },
  {
    number: "06",
    title: "Visa & Settlement",
    desc: "After approval, we guide you with visa formalities, travel preparation, accommodation assistance, and settlement support in Canada.",
    image: "/process6.png",
  },
];

const CanadaEligibilityPremium = () => {

  useEffect(() => {

    AOS.init({
      duration: 700,
      once: true,
      easing: "ease-out-cubic",
    });

  }, []);

  const scrollToForm = () => {

    const formSection = document.querySelector("#form");

    if (formSection) {

      formSection.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

    }

  };

  return (
    <>

      {/* ELIGIBILITY SECTION */}
    <section className="relative bg-[#fafafa] pt-6 pb-10 overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-red-100/40 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-100/40 blur-3xl rounded-full" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

          {/* HEADER */}
          <div className="text-center mb-16">

            <h2 className="text-4xl lg:text-6xl font-black text-[#111111] leading-tight">

              Your Eligibility For{" "}

              <span className="text-red-600">
                Canada PR
              </span>

            </h2>

            <p className="mt-5 max-w-3xl mx-auto text-slate-600 text-lg leading-8">

              Explore the key immigration factors that shape your Canada
              Permanent Residency profile and improve your approval chances.

            </p>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

            {eligibilityData.map((item, index) => (

              <div
                key={index}
                className="group relative rounded-[30px] overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >

                {/* IMAGE */}
                <div className="relative h-[240px] overflow-hidden">

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  {/* NUMBER */}
                  <div className="absolute top-5 right-5 text-white/80 text-5xl font-black">

                    0{index + 1}

                  </div>

                </div>

                {/* CONTENT */}
                <div className="p-8">

                  <h3 className="text-3xl font-black text-[#111111] mb-4">

                    {item.title}

                  </h3>

                  <p className="text-slate-600 leading-8 text-[15px]">

                    {item.desc}

                  </p>

                  {/* BUTTON */}
                  <div className="mt-7">

                    <button
                      type="button"
                      onClick={scrollToForm}
                      className="inline-flex items-center gap-2 text-red-600 font-bold cursor-pointer hover:gap-4 transition-all duration-300"
                    >

                      Learn More

                      <ArrowRight className="w-5 h-5" />

                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CANADA PR PROCESS SECTION */}
      <section className="relative bg-white pt-8 pb-8 overflow-hidden">

        <div className="max-w-6xl mx-auto px-8 lg:px-14">

          {/* HEADER */}
          <div
  className="mb-0"
  data-aos="zoom-in-up"
>

            <h2 className="text-2xl lg:text-5xl font-black leading-tight lg:ml-32">

              <span className="text-[#d62828]">
                Canada
              </span>{" "}

              <span className="text-[#111111]">
                PR Visa Application Process
              </span>

            </h2>

          </div>

          {/* PROCESS ITEMS */}
          <div className="space-y-8">

            {processData.map((item, index) => {

              const reverse = index % 2 !== 0;

              return (

                <div
                  key={index}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center"
                >

                  {/* CONTENT */}
                  <div
                    className={`
                      ${reverse ? "lg:order-2" : ""}
                    `}
                    data-aos={reverse ? "fade-left" : "fade-right"}
                    data-aos-offset="80"
                    data-aos-duration="700"
                  >

                    {/* NUMBER */}
                    <div className="mb-1">

                      <span className="text-[#1d3557] text-lg font-black">

                        {item.number}

                      </span>

                    </div>

                    {/* TITLE */}
                    <h3 className="text-[28px] lg:text-[32px] font-black text-[#e85d04] leading-tight mb-2 transition-all duration-500 hover:translate-x-2">

                      {item.title}

                    </h3>

                    {/* DESCRIPTION */}
                    <p className="text-[#33415c] text-[15px] leading-6 max-w-[540px] transition-all duration-500 hover:translate-x-1">

                      {item.desc}

                    </p>

                  </div>

                  {/* IMAGE */}
                  <div
                    className={`
                      relative flex justify-center
                      ${reverse ? "lg:order-1" : ""}
                    `}
                    data-aos={reverse ? "fade-right" : "fade-left"}
                    data-aos-offset="80"
                    data-aos-duration="800"
                  >

                    <div className="relative w-full max-w-[360px] h-[250px]">

                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="
                          object-contain
                          transition-all
                          duration-700
                          hover:scale-110
                          hover:-translate-y-2
                          hover:rotate-1
                        "
                      />

                    </div>

                  </div>

                </div>

              );

            })}

          </div>

          {/* BUTTON */}
          <div
            className="flex justify-center mt-10"
            data-aos="zoom-in"
            data-aos-duration="600"
          >

            <button
              type="button"
              onClick={scrollToForm}
              className="bg-[#ff5a00] hover:bg-[#e65100] text-white text-base font-bold px-9 py-3 rounded-full shadow-[0_15px_40px_rgba(255,90,0,0.25)] transition-all duration-300 hover:scale-105 cursor-pointer"
            >

              Check Eligibility

            </button>

          </div>

        </div>

      </section>

    </>
  );

};

export default CanadaEligibilityPremium;