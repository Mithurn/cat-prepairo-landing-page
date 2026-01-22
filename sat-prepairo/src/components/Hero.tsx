"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      const ctx = gsap.context(() => {
        gsap.to(".gradient-orb-1", {
          x: 100,
          y: -50,
          duration: 8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
        gsap.to(".gradient-orb-2", {
          x: -80,
          y: 60,
          duration: 10,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }, heroRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section
      ref={heroRef}
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        paddingTop: "100px",
        paddingBottom: "40px",
      }}
    >
      {/* Animated Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <div
          className="gradient-orb-1"
          style={{
            position: "absolute",
            top: "25%",
            left: "25%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "#CEFF65",
            opacity: 0.1,
            filter: "blur(120px)",
          }}
        />
        <div
          className="gradient-orb-2"
          style={{
            position: "absolute",
            bottom: "25%",
            right: "25%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "#8B5CF6",
            opacity: 0.1,
            filter: "blur(100px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.2,
            backgroundImage: `linear-gradient(#1F2937 1px, transparent 1px), linear-gradient(90deg, #1F2937 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "900px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "24px",
          paddingRight: "24px",
          textAlign: "center",
        }}
      >
        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 16px",
            borderRadius: "9999px",
            background: "#151515",
            border: "1px solid #1F2937",
            marginBottom: "32px",
          }}
        >
          <Sparkles style={{ width: "16px", height: "16px", color: "#CEFF65" }} />
          <span
            style={{
              fontSize: "14px",
              fontWeight: 500,
              color: "#9CA3AF",
            }}
          >
            Trusted by 8,000+ SAT Aspirants
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontFamily: "var(--font-space-grotesk), system-ui, sans-serif",
            fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
            fontWeight: 700,
            marginBottom: "16px",
            lineHeight: 1.1,
            color: "#FAFAFA",
          }}
        >
          Tired of Chasing SAT Tricks?
        </motion.h1>

        {/* Highlighted Text */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            fontFamily: "var(--font-space-grotesk), system-ui, sans-serif",
            fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
            fontWeight: 700,
            marginBottom: "32px",
            color: "#CEFF65",
            lineHeight: 1.1,
          }}
        >
          Learn What Actually Works.
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            fontSize: "clamp(1.125rem, 3vw, 1.25rem)",
            color: "#9CA3AF",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "40px",
            lineHeight: 1.6,
          }}
        >
          PrepAiro helps you ace the SAT by building real skills in Reading, Writing, and Math.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href="/onboarding"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "16px 32px",
              fontSize: "18px",
              fontWeight: 600,
              borderRadius: "9999px",
              background: "#CEFF65",
              color: "#080808",
              textDecoration: "none",
              boxShadow: "0 0 30px rgba(206,255,101,0.4)",
              transition: "all 0.3s ease",
            }}
          >
            Get Started
            <ArrowRight style={{ width: "20px", height: "20px" }} />
          </a>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "48px",
            marginTop: "64px",
            paddingTop: "32px",
            borderTop: "1px solid #1F2937",
          }}
        >
          {[
            { value: "8,000+", label: "Students" },
            { value: "95%", label: "Satisfaction" },
            { value: "150+", label: "Point Avg. Improvement" },
          ].map((stat, index) => (
            <div key={index} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "clamp(1.5rem, 4vw, 2rem)",
                  fontWeight: 700,
                  color: "#CEFF65",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "14px",
                  color: "#9CA3AF",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
