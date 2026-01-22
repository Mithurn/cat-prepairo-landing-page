"use client";

import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import type { OnboardingData } from "@/app/onboarding/page";

interface SuccessStepProps {
  data: OnboardingData;
}

export default function SuccessStep({ data }: SuccessStepProps) {
  return (
    <div style={{ minHeight: "100vh", background: "#080808", overflowY: "auto" }}>
      {/* Header */}
      <header
        style={{
          padding: "20px 24px",
          borderBottom: "1px solid #1F2937",
        }}
      >
        <a href="/" style={{ textDecoration: "none" }}>
          <span
            style={{
              color: "#FAFAFA",
              fontFamily: "var(--font-space-grotesk), system-ui, sans-serif",
              fontSize: "1.25rem",
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            Prep<span style={{ color: "#CEFF65" }}>Airo</span>
          </span>
        </a>
      </header>

      {/* Main Content */}
      <main style={{ padding: "40px 24px" }}>
        <div style={{ maxWidth: "512px", marginLeft: "auto", marginRight: "auto" }}>
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
            style={{ display: "flex", justifyContent: "center", marginBottom: "32px" }}
          >
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                background: "rgba(206,255,101,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CheckCircle size={40} style={{ color: "#CEFF65" }} strokeWidth={1.5} />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{ textAlign: "center", marginBottom: "40px" }}
          >
            <h1
              style={{
                fontFamily: "var(--font-space-grotesk), system-ui, sans-serif",
                fontSize: "clamp(1.5rem, 4vw, 1.875rem)",
                fontWeight: 700,
                color: "#FAFAFA",
                marginBottom: "16px",
                lineHeight: 1.3,
              }}
            >
              Thanks for your interest, {data.name}.
            </h1>
            <p
              style={{
                color: "rgba(250,250,250,0.6)",
                fontSize: "16px",
                lineHeight: 1.6,
              }}
            >
              PrepAiro SAT is an exclusive AI-powered prep platform with limited seats to ensure quality mentorship for every student.
            </p>
          </motion.div>

          {/* Status Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            style={{ marginBottom: "40px" }}
          >
            <div
              style={{
                border: "1px solid #1F2937",
                borderRadius: "12px",
                padding: "24px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  color: "#CEFF65",
                  fontWeight: 500,
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "12px",
                }}
              >
                Currently at full capacity
              </p>
              <p
                style={{
                  color: "rgba(250,250,250,0.7)",
                  fontSize: "14px",
                  lineHeight: 1.6,
                }}
              >
                All our current batches are full. We&apos;ve noted your details and added you to our priority waitlist.
              </p>
            </div>
          </motion.div>

          {/* What happens next */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            style={{ marginBottom: "40px" }}
          >
            <h2
              style={{
                color: "#FAFAFA",
                fontWeight: 600,
                fontSize: "16px",
                marginBottom: "24px",
                textAlign: "center",
              }}
            >
              What happens next?
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: "rgba(206,255,101,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  <span style={{ color: "#CEFF65", fontWeight: 600, fontSize: "12px" }}>1</span>
                </div>
                <div>
                  <p style={{ color: "#FAFAFA", fontWeight: 500, fontSize: "14px", marginBottom: "2px" }}>
                    You&apos;re on the priority list
                  </p>
                  <p style={{ color: "rgba(250,250,250,0.5)", fontSize: "12px" }}>
                    Your spot is secured based on when you signed up.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: "rgba(206,255,101,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  <span style={{ color: "#CEFF65", fontWeight: 600, fontSize: "12px" }}>2</span>
                </div>
                <div>
                  <p style={{ color: "#FAFAFA", fontWeight: 500, fontSize: "14px", marginBottom: "2px" }}>
                    We&apos;ll reach out when spots open
                  </p>
                  <p style={{ color: "rgba(250,250,250,0.5)", fontSize: "12px" }}>
                    You&apos;ll receive a text at {data.countryCode}{data.phone}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            style={{ textAlign: "center" }}
          >
            <a
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "12px 24px",
                background: "#CEFF65",
                color: "#080808",
                fontWeight: 600,
                borderRadius: "8px",
                textDecoration: "none",
                fontSize: "14px",
                transition: "all 0.2s",
              }}
            >
              Explore PrepAiro
            </a>

            <p
              style={{
                color: "rgba(250,250,250,0.4)",
                fontSize: "12px",
                marginTop: "24px",
              }}
            >
              Thank you for choosing PrepAiro for your SAT journey.
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
