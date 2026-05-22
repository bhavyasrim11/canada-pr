"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    review: "Outstanding recruitment service! Found me the perfect IT Manager position in Dallas. VJC Overseas network is impressive.",
    time: "1 week ago",
    initial: "S",
  },
  {
    name: "David Wilson",
    review: "From resume building to interview prep, VJC Overseas provided end-to-end support. Landed my dream job thanks to their expertise.",
    time: "3 weeks ago",
    initial: "D",
  },
  {
    name: "Emily Chen",
    review: "VJC Overseas connected me with top tech companies. Their personalized approach made all the difference in my career transition.",
    time: "1 month ago",
    initial: "E",
  },
  {
    name: "Michael Brooks",
    review: "As an employer, VJC Overseas delivered quality candidates quickly. Their screening process saved us significant time and resources.",
    time: "1 month ago",
    initial: "M",
  },
  {
    name: "Lisa Patel",
    review: "Professional staffing solutions with genuine care for both candidates and employers. Highly recommend VJC Overseas!",
    time: "2 months ago",
    initial: "L",
  },
  {
    name: "John Carter",
    review: "VJC Overseas placed me in a senior developer role within 2 weeks. Professional team with excellent communication throughout the process.",
    time: "2 days ago",
    initial: "J",
  },
];

function KnowMoreBtn() {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 5,
        padding: "6px 16px",
        borderRadius: 999,
        background: hovered ? "#2563eb" : "#eff6ff",
        color: hovered ? "#fff" : "#2563eb",
        fontSize: 13,
        fontWeight: 600,
        border: "none",
        cursor: "pointer",
        transition: "all 0.25s ease",
        whiteSpace: "nowrap",
      }}
    >
      Know More <ExternalLink size={12} />
    </button>
  );
}

const CARD_W = 370;
const GAP = 340;

const X_POSITIONS: Record<number, number> = {
   0:    0,
   1:    GAP,
  [-1]: -GAP,
   2:    GAP * 2,
  [-2]: -GAP * 2,
};

const SCALE_MAP: Record<number, number> = {
   0:    1,
   1:    0.88,
  [-1]:  0.88,
   2:    0.76,
  [-2]:  0.76,
};

const OPACITY_MAP: Record<number, number> = {
   0:    1,
   1:    0.52,
  [-1]:  0.52,
   2:    0.18,
  [-2]:  0.18,
};

const Z_MAP: Record<number, number> = {
   0:    30,
   1:    20,
  [-1]:  20,
   2:    10,
  [-2]:  10,
};

export default function TestimonialSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{
        background: "#ffffff",
        overflow: "hidden",
        // ── REDUCED: was 62/52, now tight top/bottom ──
        paddingTop: 20,
        paddingBottom: 0,
        position: "relative",
        width: "100%",
      }}
    >
      {/* ── HEADING ── */}
      <div
        style={{
          textAlign: "center",
          // ── REDUCED: was 12, now 8 so heading closer to slider ──
          marginBottom: 20,
        }}
      >
        <h2
          style={{
            margin: 0,
            // ── REDUCED: was clamp(38px,5vw,58px), now smaller ──
            fontSize: "clamp(24px, 3vw, 36px)",
            lineHeight: 1.15,
            fontWeight: 700,
            color: "#0f172a",
            letterSpacing: "-0.8px",
            fontFamily: '"Playfair Display", serif',
          }}
        >
          3,000+ Successful Canada PR Stories
        </h2>

        <p
          style={{
            // ── REDUCED: was 16, now 8 ──
            marginTop: 8,
            marginBottom: 0,
            // ── REDUCED: was 28px, now 18px ──
            fontSize: "18px",
            lineHeight: 1.3,
            fontWeight: 400,
            color: "#334155",
            fontFamily: '"Playfair Display", serif',
          }}
        >
          Trusted Canada PR Experts for{" "}
          <span style={{ color: "#ff0000", fontWeight: 700 }}>
            16+ Years
          </span>
        </p>
      </div>

      {/* ── SLIDER ── */}
      <div
        style={{
          position: "relative",
          height: 300,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {testimonials.map((item, index) => {
          const total = testimonials.length;
          let offset = ((index - active + total) % total);
          if (offset > total / 2) offset -= total;

          const x       = X_POSITIONS[offset]  ?? (offset > 0 ? 1300 : -1300);
          const scale   = SCALE_MAP[offset]    ?? 0.5;
          const opacity = OPACITY_MAP[offset]  ?? 0;
          const zIndex  = Z_MAP[offset]        ?? 5;

          return (
            <motion.div
              key={index}
              initial={false}
              animate={{ x, scale, opacity, zIndex }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              style={{ position: "absolute" }}
            >
              <div
                style={{
                  width: CARD_W,
                  borderRadius: 24,
                  border: "1.5px solid #c4d9ff",
                  background: "#ffffff",
                  boxShadow: "0 6px 28px rgba(50,90,200,0.07)",
                  padding: "22px 24px 18px 24px",
                  display: "flex",
                  flexDirection: "column",
                  boxSizing: "border-box",
                }}
              >
                {/* HEADER */}
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 14,
                      background: "linear-gradient(145deg, #60a5fa 0%, #1d4ed8 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontSize: 22,
                      fontWeight: 700,
                      flexShrink: 0,
                      boxShadow: "0 3px 10px rgba(29,78,216,0.25)",
                    }}
                  >
                    {item.initial}
                  </div>
                  <div>
                    <div style={{ fontSize: 17, fontWeight: 700, color: "#111827", lineHeight: 1.25 }}>
                      {item.name}
                    </div>
                    <div style={{ fontSize: 13, color: "#9ca3af", marginTop: 2 }}>
                      {item.time}
                    </div>
                  </div>
                </div>

                {/* STARS */}
                <div style={{ display: "flex", gap: 3, marginTop: 14 }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} style={{ fill: "#f97316", color: "#f97316" }} />
                  ))}
                </div>

                {/* REVIEW */}
                <p
                  style={{
                    marginTop: 12,
                    marginBottom: 0,
                    fontSize: 14.5,
                    lineHeight: "25px",
                    fontStyle: "italic",
                    color: "#4b5563",
                    fontWeight: 500,
                  }}
                >
                  "{item.review}"
                </p>

                {/* DIVIDER */}
                <div
                  style={{
                    width: "100%",
                    height: 1,
                    background: "#e2e8f0",
                    marginTop: 16,
                    marginBottom: 14,
                  }}
                />

                {/* FOOTER */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <KnowMoreBtn />
                  <span
                    style={{
                      padding: "6px 14px",
                      borderRadius: 999,
                      background: "#eff6ff",
                      color: "#2563eb",
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.07em",
                    }}
                  >
                    VERIFIED
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ── DOTS ── */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 7,
          marginTop: 6,
        }}
      >
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            style={{
              width:  active === index ? 13 : 8,
              height: active === index ? 13 : 8,
              borderRadius: 999,
              background: active === index ? "#2563eb" : "#b8c4d8",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              padding: 0,
            }}
          />
        ))}
      </div>
    </section>
  );
}
