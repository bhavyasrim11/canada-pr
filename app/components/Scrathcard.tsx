"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { FaCheckCircle, FaWhatsapp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const PRIZES = [
  "🎯 FREE Canada PR Points (CRS) Evaluation",
  "📘 Complimentary IELTS Expert Roadmap",
  "💼 30% OFF Your Canada PR Process",
  "📄 Free Express Entry Document Checklist",
  "🎁 75TH REPUBLIC DAY Discount",
  "💼 10% OFF Your Canada PR Process",
];

export default function VJCPromotionCard({ onClose }: { onClose: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const winSound = useRef<HTMLAudioElement | null>(null);
  
  const [prize] = useState(() => PRIZES[Math.floor(Math.random() * PRIZES.length)]);
  const [percentage, setPercentage] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  // Load winning sound on mount
  useEffect(() => {
    winSound.current = new Audio("/win.mp3");
  }, []);

  // Initialize Scratch Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    // Set canvas size explicitly to prevent scrolling issues
    const size = 240;
    canvas.width = size;
    canvas.height = size;

    // Create Gold Gradient Layer
    const gradient = ctx.createLinearGradient(0, 0, size, size);
    gradient.addColorStop(0, "#D4AF37"); 
    gradient.addColorStop(0.5, "#FBF5E6"); 
    gradient.addColorStop(1, "#C5A028"); 
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.roundRect(0, 0, size, size, 24);
    ctx.fill();

    // Add Scratch Text
    ctx.fillStyle = "#453500";
    ctx.font = "bold 18px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("SCRATCH GOLD TO WIN 🍁", size / 2, size / 2 + 6);

    const handleScratchNative = (e: MouseEvent | TouchEvent) => {
      e.preventDefault(); // Prevent scrolling on touch
      
      const rect = canvas.getBoundingClientRect();
      let x: number, y: number;
      
      if (e.type.startsWith("touch")) {
        const touchEvent = e as TouchEvent;
        x = touchEvent.touches[0].clientX - rect.left;
        y = touchEvent.touches[0].clientY - rect.top;
      } else {
        const mouseEvent = e as MouseEvent;
        x = mouseEvent.clientX - rect.left;
        y = mouseEvent.clientY - rect.top;
      }

      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(x, y, 40, 0, Math.PI * 2); 
      ctx.fill();

      // Calculate percentage scratched
      const imageData = ctx.getImageData(0, 0, size, size);
      const pixels = imageData.data;
      let transparent = 0;
      for (let i = 3; i < pixels.length; i += 4) {
        if (pixels[i] === 0) transparent++;
      }
      const currentPercent = Math.round((transparent / (pixels.length / 4)) * 100);
      setPercentage(currentPercent);

      // Threshold to show form
      if (currentPercent > 40) {
        setShowForm(true);
      }
    };

    // Prevent touch scrolling on canvas
    const preventDefault = (e: TouchEvent) => e.preventDefault();
    
    canvas.addEventListener("mousemove", handleScratchNative);
    canvas.addEventListener("touchstart", preventDefault, { passive: false });
    canvas.addEventListener("touchmove", handleScratchNative, { passive: false });
    canvas.addEventListener("touchend", preventDefault, { passive: false });
    
    return () => {
      canvas.removeEventListener("mousemove", handleScratchNative);
      canvas.removeEventListener("touchstart", preventDefault);
      canvas.removeEventListener("touchmove", handleScratchNative);
      canvas.removeEventListener("touchend", preventDefault);
    };
  }, []);

  const onFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 1. Capture exact current URL
    const exactUrl = window.location.href;

    // 2. Visual/Audio feedback
    if (winSound.current) winSound.current.play().catch(() => {});
    confetti({
      particleCount: 200,
      spread: 90,
      origin: { y: 0.6 },
      zIndex: 2000
    });
    
    setSubmitted(true);

    // 3. Send data to API
    try {
      await fetch("/api/assessment/scrath-card", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          ...formData, 
          prize,
          sourceUrl: exactUrl
        }),
      });
    } catch (err) {
      console.error("Submission error:", err);
    }
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 font-sans bg-black/75 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-[2.5rem] overflow-hidden max-w-sm w-full shadow-2xl relative max-h-[90vh] flex flex-col"
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-white hover:rotate-90 transition-transform z-[60] bg-blue-400 backdrop-blur-sm rounded-full p-1"
        >
          <IoClose size={24} />
        </button>

        {/* LOGO SECTION */}
        <div className="bg-white flex items-center justify-center overflow-hidden ">
          <img 
            src="/vjclogo-1.png" 
            alt="VJC Overseas" 
            className="h-32 w-auto object-contain brightness-110 drop-shadow-lg" 
          />
        </div>
        <div className="h-1 bg-gradient-to-r from-orange-500 via-blue-400 to-orange-500 rounded-full shadow-sm"></div>

       
        {/* WHITE CONTENT SECTION */}
        <div className="flex-1 p-6 overflow-y-auto">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div key="main-content" className="min-h-[400px]">
                {!showForm ? (
                  <div className="text-center">
                    <h3 className="text-xl font-black text-slate-800 mb-0.5 italic">LUCKY SCRATCH</h3>
                    <p className="text-orange-500 text-[10px] mb-6 font-bold tracking-widest uppercase">Win Your Canada PR Gift</p>

                    <div className="relative w-60 h-60 mx-auto flex-shrink-0">
                      {/* Revealed Prize (Behind Canvas) */}
                      <div className="absolute inset-0 bg-orange-50 rounded-3xl flex flex-col items-center justify-center p-6 text-center border-2 border-orange-100">
                        <span className="text-4xl mb-2">🎁</span>
                        <p className="text-slate-800 font-bold text-lg leading-tight px-2">unlock ?</p>
                      </div>
                      {/* Scratch Surface */}
                      <canvas 
                        ref={canvasRef} 
                        className="absolute inset-0 cursor-crosshair rounded-3xl shadow-xl touch-none select-none" 
                      />
                    </div>

                    <div className="mt-6 w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                      <motion.div className="h-full bg-orange-500" animate={{ width: `${percentage}%` }} transition={{ duration: 0.3 }} />
                    </div>
                  </div>
                ) : (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-black text-slate-800 uppercase">You Won! 🎊</h3>
                      <p className="text-slate-500 text-sm">Enter details to unlock your reward</p>
                    </div>
                    <form onSubmit={onFinalSubmit} className="space-y-4">
                      <input 
                        required 
                        placeholder="Full Name" 
                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 ring-orange-500 text-sm focus:border-orange-500 transition-all" 
                        onChange={e => setFormData({...formData, name: e.target.value})} 
                      />
                      <input 
                        required 
                        type="email" 
                        placeholder="Email Address" 
                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 ring-orange-500 text-sm focus:border-orange-500 transition-all" 
                        onChange={e => setFormData({...formData, email: e.target.value})} 
                      />
                      <input 
                        required 
                        type="tel" 
                        placeholder="WhatsApp Number" 
                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 ring-orange-500 text-sm focus:border-orange-500 transition-all" 
                        onChange={e => setFormData({...formData, phone: e.target.value})} 
                      />
                      <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg active:scale-95 transition-all text-sm tracking-wide">
                        CLAIM MY GIFT NOW <FaCheckCircle className="inline ml-1" />
                      </button>
                    </form>
                  </motion.div>
                )}
              </motion.div>
            ) : (
              <motion.div key="success" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center">
                <div className="bg-slate-900 rounded-[2rem] p-6 text-white mb-6 border-b-4 border-orange-500">
                  <h4 className="text-[9px] text-orange-400 font-black mb-1 uppercase tracking-widest">Official Prize</h4>
                  <h2 className="text-lg font-bold mb-3">{prize}</h2>
                  <p className="text-[10px] opacity-60 italic">Reserved for: {formData.name}</p>
                </div>
                <div className="space-y-4">
                  <a 
                    href={`https://wa.me/919160449000?text=Hi, I won ${prize}!`} 
                    className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#25D366]/90 text-white font-black py-4 rounded-xl shadow-xl text-sm transition-all"
                  >
                    <FaWhatsapp size={18}/> CLAIM ON WHATSAPP
                  </a>
                  <button 
                    onClick={onClose} 
                    className="text-orange-500 text-[10px] font-bold uppercase tracking-widest hover:text-slate-600 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
