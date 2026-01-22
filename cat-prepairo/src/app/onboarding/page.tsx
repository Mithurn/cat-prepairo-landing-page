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
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="bg-accent px-6 py-6">
        <div className="max-w-2xl mx-auto">
          <a href="/" className="inline-block">
            <span className="text-white font-display text-xl font-bold tracking-tight">
              PrepAiro
            </span>
          </a>
        </div>
      </header>

      {/* Progress Section */}
      <div className="bg-accent px-6 pb-8 rounded-b-3xl">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="font-display text-2xl md:text-3xl font-bold text-white mb-6">
            CAT Prep Doesn&apos;t Have To Suck
          </h1>

          {/* Step Indicators */}
          <div className="flex items-center justify-center gap-4">
            {steps.map((s, index) => {
              const visualStep = getVisualStep();
              const isCompleted = visualStep > s.id;
              const isCurrent = visualStep === s.id;

              return (
                <div key={s.id} className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                        isCompleted
                          ? "bg-white text-accent"
                          : isCurrent
                          ? "bg-white text-accent"
                          : "bg-white/20 text-white/60"
                      }`}
                    >
                      {isCompleted ? <Check size={14} /> : s.id}
                    </div>
                    <span
                      className={`text-sm font-medium hidden sm:inline ${
                        isCurrent || isCompleted ? "text-white" : "text-white/60"
                      }`}
                    >
                      {s.label}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-12 h-0.5 rounded-full ${
                        isCompleted ? "bg-white" : "bg-white/20"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex items-start justify-center px-6 py-8 overflow-y-auto">
        <div className="w-full max-w-md">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={step}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-surface rounded-2xl p-6 sm:p-8 shadow-lg border border-border"
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
