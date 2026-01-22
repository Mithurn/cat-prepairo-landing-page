"use client";

import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import type { OnboardingData } from "@/app/onboarding/page";

interface SuccessStepProps {
  data: OnboardingData;
}

export default function SuccessStep({ data }: SuccessStepProps) {
  return (
    <div className="min-h-screen bg-foreground overflow-y-auto">
      {/* Header */}
      <header className="px-6 py-5 border-b border-background/10">
        <a href="/">
          <span className="text-background font-display text-xl font-bold tracking-tight">
            PrepAiro
          </span>
        </a>
      </header>

      {/* Main Content */}
      <main className="px-6 py-10 md:py-16">
        <div className="max-w-lg mx-auto">
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <div className="w-20 h-20 rounded-full bg-accent/15 flex items-center justify-center">
              <CheckCircle size={40} className="text-accent" strokeWidth={1.5} />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center mb-10"
          >
            <h1 className="font-display text-2xl md:text-3xl font-bold text-background mb-4 leading-tight">
              Thanks for your interest, {data.name}.
            </h1>
            <p className="text-background/60 text-base leading-relaxed">
              PrepAiro CAT is an exclusive AI-powered prep platform with limited seats to ensure quality mentorship for every student.
            </p>
          </motion.div>

          {/* Status Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mb-10"
          >
            <div className="border border-background/10 rounded-xl p-6 text-center">
              <p className="text-accent font-medium text-xs uppercase tracking-wider mb-3">
                Currently at full capacity
              </p>
              <p className="text-background/70 text-sm leading-relaxed">
                All our current batches are full. We&apos;ve noted your details and added you to our priority waitlist.
              </p>
            </div>
          </motion.div>

          {/* What happens next */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mb-10"
          >
            <h2 className="text-background font-semibold text-base mb-6 text-center">
              What happens next?
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-accent font-semibold text-xs">1</span>
                </div>
                <div>
                  <p className="text-background font-medium text-sm mb-0.5">You&apos;re on the priority list</p>
                  <p className="text-background/50 text-xs">Your spot is secured based on when you signed up.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-accent font-semibold text-xs">2</span>
                </div>
                <div>
                  <p className="text-background font-medium text-sm mb-0.5">We&apos;ll reach out when spots open</p>
                  <p className="text-background/50 text-xs">You&apos;ll receive a text at {data.countryCode}{data.phone}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-center"
          >
            <a
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg transition-colors text-sm"
            >
              Explore PrepAiro
            </a>

            <p className="text-background/40 text-xs mt-6">
              Thank you for choosing PrepAiro for your CAT journey.
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
