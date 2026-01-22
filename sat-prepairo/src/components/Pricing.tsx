"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, Zap, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const durations = [
  { id: "1month", label: "1 Month", price: 399, original: 599 },
  { id: "3months", label: "3 Months", price: 799, original: 2997, badge: "SALE" },
  { id: "6months", label: "6 Months", price: 999, original: 5994, badge: "BEST VALUE" },
];

const freePlan = {
  name: "SAT STARTER",
  price: 0,
  tagline: "Perfect for exploring PrepAiro",
  features: [
    "Access to first 2 Math topics",
    "Access to first 2 Reading & Writing topics",
    "1 full-length practice test",
    "500+ vocabulary flashcards",
    "Progress tracker preview",
  ],
  cta: "Continue with Free",
  highlighted: false,
};

const paidFeatures = [
  "Complete Digital SAT syllabus lessons",
  "24x7 AI Tutor access",
  "Personalized notes and analytics",
  "Progress tracking dashboard",
  "8 full-length adaptive practice tests",
  "500+ high-frequency words with passage context",
  "50 transition words mastery module",
  "Priority email support",
];

export default function Pricing() {
  const [selectedDuration, setSelectedDuration] = useState("3months");
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  const currentDuration = durations.find((d) => d.id === selectedDuration)!;

  return (
    <section
      id="pricing"
      ref={sectionRef}
      style={{
        paddingTop: "96px",
        paddingBottom: "96px",
        paddingLeft: "24px",
        paddingRight: "24px",
      }}
    >
      <div
        style={{
          maxWidth: "1024px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "#CEFF65",
              fontWeight: 500,
              fontSize: "14px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "16px",
            }}
          >
            <Zap style={{ width: "16px", height: "16px" }} />
            Pricing
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{
              fontFamily: "var(--font-space-grotesk), system-ui, sans-serif",
              fontSize: "clamp(1.875rem, 5vw, 3rem)",
              fontWeight: 700,
              marginBottom: "24px",
              color: "#FAFAFA",
            }}
          >
            Unlock your prep companion with{" "}
            <span style={{ color: "#CEFF65" }}>SAT PLUS</span>
          </motion.h2>
        </div>

        {/* Duration Toggle */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            marginBottom: "48px",
            flexWrap: "wrap",
          }}
        >
          {durations.map((duration) => (
            <button
              key={duration.id}
              onClick={() => setSelectedDuration(duration.id)}
              style={{
                position: "relative",
                padding: "12px 20px",
                borderRadius: "9999px",
                fontWeight: 500,
                transition: "all 0.2s",
                background: selectedDuration === duration.id ? "#CEFF65" : "#151515",
                color: selectedDuration === duration.id ? "#080808" : "#9CA3AF",
                border: selectedDuration === duration.id ? "none" : "1px solid #1F2937",
                cursor: "pointer",
              }}
            >
              {duration.label} — ₹{duration.price}
              {duration.badge && (
                <span
                  style={{
                    position: "absolute",
                    top: "-8px",
                    right: "-8px",
                    padding: "2px 8px",
                    fontSize: "10px",
                    fontWeight: 700,
                    background: "#8B5CF6",
                    color: "white",
                    borderRadius: "9999px",
                  }}
                >
                  {duration.badge}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Pricing Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {/* Free Plan */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              background: "#151515",
              border: "1px solid #1F2937",
              borderRadius: "16px",
              padding: "32px",
            }}
          >
            <div style={{ marginBottom: "24px" }}>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#9CA3AF",
                  marginBottom: "8px",
                }}
              >
                {freePlan.name}
              </h3>
              <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                <span style={{ fontSize: "2.25rem", fontWeight: 700, color: "#FAFAFA" }}>
                  ₹{freePlan.price}
                </span>
              </div>
              <p style={{ fontSize: "14px", color: "#9CA3AF", marginTop: "8px" }}>
                {freePlan.tagline}
              </p>
            </div>

            <ul style={{ listStyle: "none", padding: 0, marginBottom: "32px" }}>
              {freePlan.features.map((feature, index) => (
                <li
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    marginBottom: "16px",
                  }}
                >
                  <Check
                    style={{
                      width: "20px",
                      height: "20px",
                      color: "#9CA3AF",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  />
                  <span style={{ color: "#9CA3AF" }}>{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="/onboarding"
              style={{
                width: "100%",
                padding: "14px 30px",
                borderRadius: "9999px",
                fontWeight: 600,
                background: "transparent",
                color: "#CEFF65",
                border: "2px solid #CEFF65",
                textDecoration: "none",
                textAlign: "center",
                display: "block",
                boxSizing: "border-box",
                transition: "all 0.2s",
              }}
            >
              {freePlan.cta}
            </a>
          </motion.div>

          {/* Paid Plan */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              position: "relative",
              background: "#151515",
              border: "2px solid #CEFF65",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 0 40px rgba(206,255,101,0.1)",
            }}
          >
            {/* Popular Badge */}
            <div
              style={{
                position: "absolute",
                top: "-16px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <span
                style={{
                  padding: "4px 16px",
                  background: "#CEFF65",
                  color: "#080808",
                  fontSize: "14px",
                  fontWeight: 700,
                  borderRadius: "9999px",
                }}
              >
                RECOMMENDED
              </span>
            </div>

            <div style={{ marginBottom: "24px", paddingTop: "8px" }}>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#CEFF65",
                  marginBottom: "8px",
                }}
              >
                SAT ADVANCE - PLUS
              </h3>
              <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                <span
                  style={{
                    color: "#9CA3AF",
                    textDecoration: "line-through",
                    fontSize: "1.25rem",
                  }}
                >
                  ₹{currentDuration.original}
                </span>
                <span style={{ fontSize: "2.25rem", fontWeight: 700, color: "#CEFF65" }}>
                  ₹{currentDuration.price}
                </span>
              </div>
              <p style={{ fontSize: "14px", color: "#9CA3AF", marginTop: "8px" }}>
                One-time payment. No auto-renew. • SAT Prep - {currentDuration.label}
              </p>
            </div>

            <ul style={{ listStyle: "none", padding: 0, marginBottom: "32px" }}>
              {paidFeatures.map((feature, index) => (
                <li
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    marginBottom: "16px",
                  }}
                >
                  <Check
                    style={{
                      width: "20px",
                      height: "20px",
                      color: "#CEFF65",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  />
                  <span style={{ color: "#FAFAFA" }}>{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="/onboarding"
              style={{
                width: "100%",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                padding: "16px 32px",
                borderRadius: "9999px",
                fontWeight: 600,
                background: "#CEFF65",
                color: "#080808",
                textDecoration: "none",
                boxSizing: "border-box",
                boxShadow: "0 0 20px rgba(206,255,101,0.3)",
              }}
            >
              Upgrade to Plus
              <ArrowRight style={{ width: "16px", height: "16px" }} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
