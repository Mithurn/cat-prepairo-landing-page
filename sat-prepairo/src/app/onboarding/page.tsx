"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import PhoneStep from "@/components/onboarding/PhoneStep";
import OtpStep from "@/components/onboarding/OtpStep";
import NameStep from "@/components/onboarding/NameStep";
import BackgroundStep from "@/components/onboarding/BackgroundStep";
import EmailStep from "@/components/onboarding/EmailStep";
import SuccessStep from "@/components/onboarding/SuccessStep";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";

export type OnboardingData = {
  phone: string;
  countryCode: string;
  leadId: number | null;
  name: string;
  background: string;
  email: string;
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

const steps = [
  { id: 1, label: "Verify Phone" },
  { id: 2, label: "Your Details" },
];

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [data, setData] = useState<OnboardingData>({
    phone: "",
    countryCode: "+91",
    leadId: null,
    name: "",
    background: "",
    email: "",
  });

  const getVisualStep = () => {
    if (step <= 2) return 1;
    if (step <= 5) return 2;
    return 2;
  };

  const totalSteps = 6;

  const nextStep = () => {
    setDirection(1);
    setStep((prev) => Math.min(prev + 1, totalSteps));
  };

  const prevStep = () => {
    setDirection(-1);
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const updateData = (newData: Partial<OnboardingData>) => {
    setData((prev) => ({ ...prev, ...newData }));
  };

  // Skip directly to success page (for already registered users)
  const goToSuccess = (userData: Partial<OnboardingData>) => {
    setData((prev) => ({ ...prev, ...userData }));
    setDirection(1);
    setStep(6);
  };

  // If on success step, render full-page success
  if (step === 6) {
    return <SuccessStep data={data} />;
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <PhoneStep
            data={data}
            updateData={updateData}
            onNext={nextStep}
            onAlreadyRegistered={goToSuccess}
            apiUrl={API_URL}
          />
        );
      case 2:
        return (
          <OtpStep
            data={data}
            updateData={updateData}
            onNext={nextStep}
            onBack={prevStep}
            apiUrl={API_URL}
          />
        );
      case 3:
        return (
          <NameStep
            data={data}
            updateData={updateData}
            onNext={nextStep}
          />
        );
      case 4:
        return (
          <BackgroundStep
            data={data}
            updateData={updateData}
            onNext={nextStep}
          />
        );
      case 5:
        return (
          <EmailStep
            data={data}
            updateData={updateData}
            onNext={nextStep}
            apiUrl={API_URL}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#080808",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <header
        style={{
          background: "#CEFF65",
          padding: "24px",
        }}
      >
        <div style={{ maxWidth: "672px", marginLeft: "auto", marginRight: "auto" }}>
          <a href="/" style={{ display: "inline-block", textDecoration: "none" }}>
            <span
              style={{
                color: "#080808",
                fontFamily: "var(--font-space-grotesk), system-ui, sans-serif",
                fontSize: "1.25rem",
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              PrepAiro
            </span>
          </a>
        </div>
      </header>

      {/* Progress Section */}
      <div
        style={{
          background: "#CEFF65",
          padding: "0 24px 32px 24px",
          borderBottomLeftRadius: "24px",
          borderBottomRightRadius: "24px",
        }}
      >
        <div style={{ maxWidth: "672px", marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
          <h1
            style={{
              fontFamily: "var(--font-space-grotesk), system-ui, sans-serif",
              fontSize: "clamp(1.5rem, 4vw, 1.875rem)",
              fontWeight: 700,
              color: "#080808",
              marginBottom: step >= 3 ? "24px" : "0",
            }}
          >
            SAT Prep Doesn&apos;t Have To Suck
          </h1>

          {/* Step Indicators - Only show after OTP verification (step 3+) */}
          {step >= 3 && (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginTop: "24px" }}>
              {steps.map((s, index) => {
                const visualStep = getVisualStep();
                const isCompleted = visualStep > s.id;
                const isCurrent = visualStep === s.id;

                return (
                  <div key={s.id} style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <div
                        style={{
                          width: "32px",
                          height: "32px",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "14px",
                          fontWeight: 600,
                          transition: "all 0.2s",
                          background: isCompleted || isCurrent ? "#080808" : "rgba(8,8,8,0.2)",
                          color: isCompleted || isCurrent ? "#CEFF65" : "rgba(8,8,8,0.6)",
                        }}
                      >
                        {isCompleted ? <Check size={14} /> : s.id}
                      </div>
                      <span
                        style={{
                          fontSize: "14px",
                          fontWeight: 500,
                          color: isCurrent || isCompleted ? "#080808" : "rgba(8,8,8,0.6)",
                          display: "none",
                        }}
                        className="step-label"
                      >
                        {s.label}
                      </span>
                    </div>
                    {index < steps.length - 1 && (
                      <div
                        style={{
                          width: "48px",
                          height: "2px",
                          borderRadius: "9999px",
                          background: isCompleted ? "#080808" : "rgba(8,8,8,0.2)",
                        }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <main
        style={{
          flex: 1,
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "32px 24px",
          overflowY: "auto",
        }}
      >
        <div style={{ width: "100%", maxWidth: "448px" }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={step}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{
                background: "#151515",
                borderRadius: "16px",
                padding: "24px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                border: "1px solid #1F2937",
              }}
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <style jsx global>{`
        @media (min-width: 640px) {
          .step-label {
            display: inline !important;
          }
        }
      `}</style>
    </div>
  );
}
