// app/germany-opportunity-card/page.tsx
"use client";

import { useState, useEffect } from "react"; // Added useEffect
import AdCard from "../components/AdCard";
import Hero from "../components/Hero";
import IntroSection from "../components/IntroSection";
import WhatIsSection from "../components/WhatIsSection";
import WhyVJCSection from "../components/WhyVJCSection";
import GameChangerSection from "../components/GameChangerSection";
import AdvantageSection from "../components/AdvantageSection";
import TestimonialSection from "../components/TestimonialSection";
import FinalCTASection from "../components/FinalCTASection";
import FormModal from "../components/FormModal";
import Form from "../components/Form";

// IMPORT YOUR POP-UP COMPONENT HERE
import Scrathcard from "../components/Scrathcard"; // Adjust the path if it's named ScratchCard

export default function GermanyOpportunityCard() {
  const [formOpen, setFormOpen] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false); // State for the wheel

  // TRIGGER POP-UP ON LOAD
  useEffect(() => {
    // Small delay (1 second) looks more professional than an instant pop
    const timer = setTimeout(() => {
      setIsPopupVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const openForm = () => setFormOpen(true);
  const closeForm = () => setFormOpen(false);

  return (
    <>
      {/* RENDER THE POP-UP IF VISIBLE */}
      {isPopupVisible && (
        <Scrathcard onClose={() => setIsPopupVisible(false)} />
      )}

      {/* Hero Section - Full Width */}
      <Hero />   

      {/* NEW CONTENT SECTIONS */}
      <IntroSection />

      <WhatIsSection />

      <GameChangerSection />

      <FinalCTASection />
      
      <WhyVJCSection />

      <AdvantageSection />

      <TestimonialSection />
    </>
  );
}