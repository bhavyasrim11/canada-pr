"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { ChevronRight, Send, User, Mail, Phone, Briefcase, ShieldCheck, Globe, Upload, FileText, X } from "lucide-react";

const IMAGES = [
  "/canada-pr-flag.jpg",
  "/canada-pr-job-oppurtunities.jpeg",
  "/require.png",
];

const PremiumCanadaForm: React.FC = () => {
  const router = useRouter();
  const [imgIndex, setImgIndex] = useState(0);
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    experience: "",
  });

  // NEW: Resume upload state
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // NEW: Handle file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type (PDF, DOC, DOCX)
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (validTypes.includes(file.type)) {
        setResumeFile(file);
      } else {
        alert('Please upload a PDF or Word document');
      }
    }
  };

  // NEW: Remove uploaded file
  const removeFile = () => {
    setResumeFile(null);
  };

  const nextStep = () => setStep((s) => s + 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus('idle');

    try {
      // NEW: Create FormData to include file
      const submitData = new FormData();
      submitData.append('name', formData.name);
      submitData.append('email', formData.email);
      submitData.append('number', formData.number);
      submitData.append('experience', formData.experience);
      if (resumeFile) {
        submitData.append('resume', resumeFile);
      }

      const response = await fetch('/api/assessment/submit-canada-form', {
        method: 'POST',
        body: submitData, // Changed from JSON to FormData
      });

      if (response.ok) {
        setSubmitStatus('success');
        setTimeout(() => router.push("/canada-pr-from-india/thankyou"), 1500);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full flex items-center justify-center p-0">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl bg-white rounded-[32px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col"
      >
        {/* Top Side: Animated Image & Branding (Always at top) */}
        <div className="relative w-full h-[250px] md:h-[300px] overflow-hidden bg-slate-900">
          <AnimatePresence mode="wait">
            <motion.div
              key={imgIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0.2 }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${IMAGES[imgIndex]})` }}
            />
          </AnimatePresence>
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 md:p-10 flex flex-col justify-end">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest">Official Entry</span>
                <div className="h-[1px] w-12 bg-white/30" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                Your Canadian Journey Begins Here.
              </h1>
              <p className="text-white/70 mt-2 text-sm max-w-md">
                Join over 400,000+ professionals moving to Canada this year.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom Side: Form Content */}
        <div className="w-full p-8 md:p-12 flex flex-col justify-center bg-white">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-widest text-red-600">Step {step} of 3</span>
              <span className="text-xs font-medium text-slate-400">{Math.round((step/3)*100)}% Complete</span>
            </div>
            <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
              <motion.div 
                animate={{ width: `${(step/3)*100}%` }}
                className="h-full bg-red-600" 
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="s1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-1">Personal Details</h2>
                    <p className="text-slate-500 text-sm">Please enter your legal name as per passport.</p>
                  </div>
                  <div className="group transition-all">
                    <label className="text-xs font-bold text-slate-400 uppercase ml-1">Full Name</label>
                    <div className="mt-1 relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 size-5" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Johnathan Doe"
                        required
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-red-50/50 focus:border-red-600 outline-none transition-all"
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!formData.name}
                    className="w-full py-4 bg-slate-900 text-white font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-red-600 hover:shadow-xl hover:shadow-red-200 transition-all disabled:opacity-50"
                  >
                    Next Step <ChevronRight size={18} />
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="s2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-1">Contact Information</h2>
                    <p className="text-slate-500 text-sm">We'll send your results to these details.</p>
                  </div>
                  <div className="space-y-4">
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 size-5" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        required
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-red-50/50 focus:border-red-600 outline-none"
                      />
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 size-5" />
                      <input
                        type="tel"
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        required
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-red-50/50 focus:border-red-600 outline-none"
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!formData.email || !formData.number}
                    className="w-full py-4 bg-slate-900 text-white font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-red-600 hover:shadow-xl hover:shadow-red-200 transition-all disabled:opacity-50"
                  >
                    Continue <ChevronRight size={18} />
                  </button>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="s3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-1">Professional Background</h2>
                    <p className="text-slate-500 text-sm">Almost done! Just one last detail.</p>
                  </div>
                  <div className="relative">
                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 size-5" />
                    <input
                      type="number"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      placeholder="Years of Work Experience"
                      min="0"
                      required
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-red-50/50 focus:border-red-600 outline-none"
                    />
                  </div>

                  {/* NEW: Resume Upload Section */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase ml-1">Upload Resume (Optional)</label>
                    {!resumeFile ? (
                      <label className="w-full cursor-pointer">
                        <div className="w-full p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl hover:bg-white hover:border-red-600 transition-all flex flex-col items-center justify-center gap-2">
                          <Upload className="text-slate-400 size-8" />
                          <span className="text-sm font-medium text-slate-600">Click to upload resume</span>
                          <span className="text-xs text-slate-400">PDF, DOC, or DOCX (Max 5MB)</span>
                        </div>
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </label>
                    ) : (
                      <div className="w-full p-4 bg-green-50 border border-green-200 rounded-2xl flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <FileText className="text-green-600 size-5" />
                          <div>
                            <p className="text-sm font-medium text-green-900">{resumeFile.name}</p>
                            <p className="text-xs text-green-600">{(resumeFile.size / 1024).toFixed(1)} KB</p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={removeFile}
                          className="p-2 hover:bg-green-100 rounded-lg transition-colors"
                        >
                          <X className="text-green-600 size-4" />
                        </button>
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={submitting || submitStatus !== 'idle'}
                    className={`w-full py-4 font-bold rounded-2xl flex items-center justify-center gap-2 transition-all shadow-xl ${
                      submitting 
                        ? 'bg-slate-400 shadow-slate-200 cursor-not-allowed' 
                        : 'bg-red-600 text-white hover:bg-red-700 hover:shadow-red-200'
                    }`}
                  >
                    {submitting ? "Sending..." : "Submit Assessment"}
                    {!submitting && <Send size={18} />}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </form>

          {/* Error/Success Message */}
          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-4 bg-red-50 border border-red-200 rounded-2xl text-red-700 text-sm"
            >
              Submission failed. Please try again.
            </motion.div>
          )}

          {/* Trust Footer */}
          <div className="mt-10 flex items-center justify-between border-t border-slate-100 pt-6">
            <div className="flex items-center gap-2 text-slate-400">
              <ShieldCheck size={16} />
              <span className="text-[10px] font-bold uppercase tracking-tight">Secured Data</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <Globe size={16} />
              <span className="text-[10px] font-bold uppercase tracking-tight">Worldwide Access</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PremiumCanadaForm;