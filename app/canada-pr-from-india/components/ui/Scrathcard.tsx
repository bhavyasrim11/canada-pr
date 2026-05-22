"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { FaPlaneDeparture, FaCheckCircle, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const PRIZES = [
  "🎯 FREE Canada PR Points (CRS) Evaluation",
  "📘 Complimentary IELTS Expert Roadmap",
  "💼 1-on-1 Canada PR Strategy Consultation",
  "📄 Free Express Entry Document Checklist",
];

export default function VJCPromotionCard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [prize, setPrize] = useState(() => PRIZES[Math.floor(Math.random() * PRIZES.length)]);
  const [percentage, setPercentage] = useState(0);
  const [isScratched, setIsScratched] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitProgress, setSubmitProgress] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "#D4AF37"); 
    gradient.addColorStop(0.5, "#FBF5E6"); 
    gradient.addColorStop(1, "#C5A028"); 
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.roundRect(0, 0, canvas.width, canvas.height, 24);
    ctx.fill();

    ctx.strokeStyle = "rgba(255,255,255,0.2)";
    ctx.lineWidth = 2;
    for(let i=0; i<canvas.width; i+=20) {
        ctx.moveTo(i, 0); ctx.lineTo(i, canvas.height); ctx.stroke();
    }

    ctx.fillStyle = "#453500";
    ctx.font = "bold 18px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("SCRATCH GOLD TO WIN 🍁", canvas.width / 2, canvas.height / 2 + 6);

    const handleScratchNative = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      let x: number, y: number;
      if (e.type.startsWith("touch")) {
        const touchEvent = e as TouchEvent;
        if (touchEvent.touches.length > 0) {
          x = touchEvent.touches[0].clientX - rect.left;
          y = touchEvent.touches[0].clientY - rect.top;
        } else { return; }
      } else {
        const mouseEvent = e as MouseEvent;
        x = mouseEvent.clientX - rect.left;
        y = mouseEvent.clientY - rect.top;
      }

      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(x, y, 45, 0, Math.PI * 2); 
      ctx.fill();

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;
      let transparent = 0;
      for (let i = 3; i < pixels.length; i += 4) {
        if (pixels[i] === 0) transparent++;
      }
      const currentPercent = Math.round((transparent / (pixels.length / 4)) * 100);
      setPercentage(currentPercent);

      // Trigger transition immediately when threshold met
      if (currentPercent > 25) {
        setIsScratched(true);
        setShowForm(true); 
      }
    };

    canvas.addEventListener("mousemove", handleScratchNative);
    canvas.addEventListener("touchmove", handleScratchNative, { passive: false });
    return () => {
      canvas.removeEventListener("mousemove", handleScratchNative);
      canvas.removeEventListener("touchmove", handleScratchNative);
    };
  }, []);

  const onFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Speed up progress bar (from 150ms to 40ms)
    let prog = 0;
    const interval = setInterval(() => {
      prog += 5;
      setSubmitProgress(prog);
      if (prog >= 100) {
        clearInterval(interval);
        completeSubmission();
      }
    }, 40); 
  };

  const completeSubmission = async () => {
    try {
      await fetch("/api/assessment/spin-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, prize }),
      });
      
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FFD700', '#EF4444']
      });
      
      setSubmitted(true);
      setIsSubmitting(false);
    } catch (err) {
      setSubmitted(true);
      setIsSubmitting(false);
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 font-sans">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white rounded-[2.5rem] overflow-hidden max-w-sm w-full shadow-[0_0_50px_rgba(239,68,68,0.3)] border border-white/20 relative"
      >
        <button onClick={() => setVisible(false)} className="absolute top-4 right-4 text-white hover:rotate-90 transition-transform z-[60]">
          <IoClose size={28} />
        </button>

        <div className="bg-gradient-to-br from-[#f77575] via-[#f70e0ec4] to-[#ff4949] p-4 flex flex-col items-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
             <div className="absolute top-2 left-4 text-4xl text-black">🍁</div>
             <div className="absolute bottom-2 right-4 text-4xl text-white">🍁</div>
          </div>
          <img src="/vjclogo.png" alt="VJC Overseas" className="h-24 w-full object-contain brightness-110 drop-shadow-lg z-10" />
          <div className="mt-2 flex items-center gap-2 text-white/80 text-[10px] tracking-[0.3em] font-bold uppercase">
             <FaPlaneDeparture className="animate-bounce" /> Global Migration Experts
          </div>
        </div>

        <div className="p-8">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div key="scratch-form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                {!showForm ? (
                  <div className="text-center">
                    <h3 className="text-2xl font-black text-slate-800 mb-1">CANADA PR ENTRY</h3>
                    <p className="text-red-600 text-sm mb-6 font-bold uppercase tracking-widest">Exclusive Gift For You</p>

                    <div className="relative w-64 h-64 mx-auto group">
                      <div className="absolute inset-0 bg-red-50 rounded-3xl flex flex-col items-center justify-center p-6 text-center border-2 border-dashed border-red-200">
                        <span className="text-4xl mb-2">🎁</span>
                        <p className="text-slate-800 font-bold text-lg leading-tight">{prize}</p>
                      </div>
                      <canvas ref={canvasRef} width={256} height={256} className="absolute inset-0 cursor-crosshair rounded-3xl shadow-2xl" />
                    </div>

                    <div className="mt-8 space-y-2">
                       <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                         <span>Scratch Progress</span>
                         <span>{percentage}%</span>
                       </div>
                       <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                          <motion.div className="h-full bg-gradient-to-r from-yellow-500 to-red-600" animate={{ width: `${percentage}%` }} />
                       </div>
                    </div>
                  </div>
                ) : (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                    {isSubmitting ? (
                      <div className="text-center py-10">
                         <div className="relative w-24 h-24 mx-auto mb-6">
                            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="absolute inset-0 border-4 border-red-100 border-t-red-600 rounded-full" />
                            <div className="absolute inset-0 flex items-center justify-center">
                               <FaPlaneDeparture className="text-3xl text-red-600" />
                            </div>
                         </div>
                         <h3 className="text-xl font-bold text-slate-800">Processing Visa Grant...</h3>
                         <div className="mt-4 w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                            <motion.div className="h-full bg-red-600" initial={{ width: 0 }} animate={{ width: `${submitProgress}%` }} />
                         </div>
                         <p className="text-xs text-slate-400 mt-2">Connecting with Immigration Portal</p>
                      </div>
                    ) : (
                      <>
                        <div className="text-center mb-6">
                          <h3 className="text-2xl font-black text-slate-800">LUCKY WINNER! 🎊</h3>
                          <p className="text-slate-500 text-sm">Register to claim your <span className="text-red-600 font-bold">PR Reward</span></p>
                        </div>
                        <form onSubmit={onFinalSubmit} className="space-y-3">
                          <input required placeholder="Full Name" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-red-500 outline-none" onChange={e => setFormData({...formData, name: e.target.value})} />
                          <input required type="email" placeholder="Email Address" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-red-500 outline-none" onChange={e => setFormData({...formData, email: e.target.value})} />
                          <input required type="tel" placeholder="Phone Number" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-red-500 outline-none" onChange={e => setFormData({...formData, phone: e.target.value})} />
                          <button className="w-full bg-gradient-to-r from-red-600 to-red-800 text-white font-bold py-4 rounded-xl shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2">
                            CLAIM MY REWARD <FaCheckCircle />
                          </button>
                        </form>
                      </>
                    )}
                  </motion.div>
                )}
              </motion.div>
            ) : (
              <motion.div key="success" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center">
                <div className="bg-gradient-to-b from-slate-900 to-slate-800 rounded-[2rem] p-6 text-white shadow-2xl mb-6 border border-yellow-500/30">
                  <div className="text-yellow-400 text-4xl mb-2">⭐</div>
                  <h4 className="text-[9px] uppercase tracking-[0.3em] text-yellow-500 font-black mb-2">Confidential Voucher</h4>
                  <h2 className="text-xl font-bold mb-4 px-2">{prize}</h2>
                  <div className="h-[1px] bg-white/10 w-full mb-4" />
                  <p className="text-sm opacity-80">Reserved for:</p>
                  <p className="text-xl font-black text-yellow-400 uppercase">{formData.name}</p>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  <a href={`https://wa.me/919876543210?text=Hi, I won ${prize}!`} className="flex items-center justify-center gap-3 bg-[#25D366] text-white font-black py-4 rounded-xl hover:brightness-110 transition-all">
                    <FaWhatsapp size={20}/> CLAIM ON WHATSAPP
                  </a>
                  <a href="tel:+919876543210" className="flex items-center justify-center gap-3 bg-slate-900 text-white font-black py-4 rounded-xl hover:brightness-110 transition-all">
                    <FaPhoneAlt size={16}/> CALL COUNSELOR
                  </a>
                </div>
                <p className="text-[9px] text-slate-400 mt-6 font-bold tracking-widest uppercase">Valid for 24 Hours Only</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}