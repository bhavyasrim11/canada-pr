"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const CanadaPRForm = () => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("idle");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setProgress(10);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      setProgress(40);
      const res = await fetch("/api/assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setProgress(80);
      if (res.ok) {
        setProgress(100);
        setStatus("success");
        setTimeout(() => {
          router.push("/canada-pr-2026/thankyou");
        }, 800);
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    } finally {
      setTimeout(() => {
        setLoading(false);
        setProgress(0);
      }, 1000);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-4 px-3 sm:px-4">
      <style jsx>{`
        .form-container {
         background-image: url('https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Flag_of_Canada.svg/1280px-Flag_of_Canada.svg.png');
background-size: cover;
background-position: center;
background-repeat: no-repeat;

          border: 1px solid ;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          padding: 1.5rem;
          max-width: 900px;
          width: 100%;
        }
        @media (max-width: 640px) {
          .form-container {
            padding: 1rem;
            box-shadow: none;
            border: none;
          }
          .header-section {
            padding: 2rem 1rem !important;
          }
          .radio-option {
            min-width: 100%;
            text-align: center;
          }
          .section-card {
            padding: 1rem;
          }
          .form-input {
            font-size: 1rem;
            padding: 0.75rem;
          }
          .submit-btn {
            font-size: 1rem;
            padding: 0.9rem 1.5rem;
          }
        }
        .header-section {
          background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),
                      url('/canada-pr-flag.jpg') center/cover;
          border-radius: 12px;
          padding: 3rem 2rem;
          text-align: center;
          margin-bottom: 2rem;
          border: 1px solid #e2e8f0;
          color: white;
        }
        .gradient-text {
          background: linear-gradient(135deg, #FF6B4A 0%, #FFD93D 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .section-header {
          font-weight: 700;
          font-size: 1.125rem;
          color: #1e293b;
          margin-bottom: 1rem;
          position: relative;
        }
        .section-header::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 40px;
          height: 3px;
          background: linear-gradient(90deg, #FF6B4A, #FFD93D);
          border-radius: 2px;
        }
        .radio-option {
          background: #fff;
          border: 2px solid ;
          border-radius: 12px;
          padding: 0.7rem;
          cursor: pointer;
          font-size: 0.95rem;
          font-weight: 500;
          transition: all 0.2s ease;
          flex: 1;
          text-align: center;
        }
        .radio-option:hover {
          border-color: #FF6B4A;
          background: #fff7ed;
        }
        .radio-option input:checked + span {
          color: #FF6B4A;
          font-weight: 600;
        }
        .form-input {
          background: #fff;
          border: 2px solid ;
          border-radius: 12px;
          padding: 0.6rem 1rem;
          font-size: 0.95rem;
          transition: all 0.2s ease;
          font-weight: 500;
          width: 100%;
        }
        .form-input:focus {
          outline: none;
          border-color: #FF6B4A;
          box-shadow: 0 0 0 3px rgba(255, 107, 74, 0.1);
        }
        .submit-btn {
         background: linear-gradient(135deg, #FF0000 0%, #FF4444 50%, #CC0000 100%);

          border: none;
          border-radius: 50px;
          padding: 1rem 2rem;
          font-size: 1.1rem;
          font-weight: 700;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(255, 107, 74, 0.3);
          width: 100%;
          margin-top: 1.5rem;
        }
        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 12px 35px rgba(255, 107, 74, 0.4);
        }
        .status-success {
          background: linear-gradient(135deg, #10b981, #34d399);
          color: white;
          padding: 1rem;
          border-radius: 12px;
          font-weight: 600;
          text-align: center;
          margin-top: 1rem;
        }
        .status-error {
          background: linear-gradient(135deg, #ef4444, #f87171);
          color: white;
          padding: 1rem;
          border-radius: 12px;
          font-weight: 600;
          text-align: center;
          margin-top: 1rem;
        }
        .section-card {
          background: white;
          border: 1px solid;
          border-radius: 12px;
          padding: 1.2rem;
          margin-bottom: 1rem;
        }
      `}</style>

      <div className="w-full max-w-4xl -mt-4 mx-auto">
        {/* Top Header */}
        <div className="header-section">
          <h1 className="gradient-text text-3xl lg:text-4xl font-black uppercase tracking-wide mb-2 drop-shadow-lg">
            Canada PR Score Check
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div className="text-5xl font-black gradient-text drop-shadow-lg">67</div>
            <div className="text-xl font-bold drop-shadow-lg">Points Required</div>
          </div>
        </div>

        {/* Form */}
        <div className="form-container">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Age */}
            <div className="section-card">
              <label className="section-header block mb-4">Age *</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {["Under 18", "18-35", "36-40", "40+"].map((opt) => (
                  <label key={opt} className="radio-option flex items-center justify-center gap-2 p-2 text-sm">
                    <input type="radio" name="age" value={opt} required className="w-4 h-4 accent-orange-500" />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="section-card">
              <label className="section-header block mb-4">Education *</label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {["PhD", "Master's", "Bachelor's", "Diploma", "<13 yrs"].map((opt) => (
                  <label key={opt} className="radio-option flex items-center justify-center gap-2 p-2 text-sm">
                    <input type="radio" name="education" value={opt} required className="w-4 h-4 accent-orange-500" />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="section-card">
              <label className="section-header block mb-4">Experience *</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {["1 yr", "2-3 yrs", "4-5 yrs", "6+ yrs"].map((opt) => (
                  <label key={opt} className="radio-option flex items-center justify-center gap-2 p-2 text-sm">
                    <input type="radio" name="experience" value={opt} required className="w-4 h-4 accent-orange-500" />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* English */}
            <div className="section-card">
              <label className="section-header block mb-4">English *</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {["Superior", "Proficient", "Competent", "None"].map((opt) => (
                  <label key={opt} className="radio-option flex items-center justify-center gap-2 p-2 text-sm">
                    <input type="radio" name="english" value={opt} required className="w-4 h-4 accent-orange-500" />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="section-card">
              <label className="section-header block mb-6">Contact Info</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Name *</label>
                  <input type="text" name="name" required className="form-input" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                  <input type="email" name="email" required className="form-input" />
                </div>
              </div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
  {/* Phone Field with Label */}
  <div className="flex flex-col">
    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
    <div className="flex flex-col sm:flex-row gap-2">
      <select className="form-input flex-1 h-[42px]" defaultValue="IND +91">
        <option>IND +91</option>
      </select>
      <input
        type="tel"
        name="phone"
        required
        className="form-input flex-1 h-[42px]"
        placeholder="Enter your phone number"
      />
    </div>
  </div>

  {/* Message Field */}
  <div>
    <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
    <textarea
      name="message"
      className="form-input h-16"
      placeholder="Optional..."
    />
  </div>
</div>


              <button type="submit" disabled={loading} className="submit-btn">
                {loading ? "Processing..." : "Get FREE Report"}
              </button>
            </div>

            {status === "success" && !loading && <div className="status-success">Report sent! Redirecting...</div>}
            {status === "error" && !loading && <div className="status-error">Error! Please try again.</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default CanadaPRForm;
