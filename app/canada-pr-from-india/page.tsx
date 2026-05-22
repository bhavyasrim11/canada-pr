'use client';

import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import WhyCanada from './components/WhyCanada';
import Canadaprocess from './components/Canadaprocess';
import HowWeHelp from './components/HowWeHelp';
import Review from './components/Review';
import SpinWheel from './components/ui/SpinWheel';
import StatsSection from './components/StatsSection';

export default function CanadaPRPage() {
  const [showSpinPopup, setShowSpinPopup] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      setShowSpinPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Use a proper handler for closing
  const handleClose = () => {
    setShowSpinPopup(false);
  };

  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-red-50 via-white to-white relative">
        <Hero />
        <Canadaprocess />
        <WhyCanada />
        <HowWeHelp />
        <Review />
        <StatsSection />        
      </main>

      {/* This is where the popup renders */}
      <div id="modal-root"></div>

      {showSpinPopup && (
        <SpinWheel onClose={handleClose} />
      )}
    </>
  );
}