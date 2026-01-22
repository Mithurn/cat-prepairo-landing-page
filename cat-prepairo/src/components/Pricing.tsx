"use client";

import { useState } from "react";
import { Check, Zap } from "lucide-react";
import FadeIn from "./animations/FadeIn";

const durationOptions = [
  {
    id: "1month",
    label: "1 month",
    price: "499",
    originalPrice: null,
    perMonth: "499",
    isSale: false,
    isBestValue: false,
  },
  {
    id: "3months",
    label: "3 months",
    price: "999",
    originalPrice: "3,997",
    perMonth: "333",
    isSale: true,
    isBestValue: false,
  },
  {
    id: "6months",
    label: "6 months",
    price: "1,499",
    originalPrice: "5,994",
    perMonth: "250",
    isSale: true,
    isBestValue: true,
  },
];

const freePlanFeatures = [
  "Access to first 2 QA topics",
  "Access to first 2 VARC topics",
  "5 DILR practice sets",
  "500+ vocabulary flashcards",
  "Progress tracker preview",
];

const plusPlanFeatures = [
  "Complete CAT syllabus video lessons",
  "24x7 AI Tutor access",
  "Personalized notes and analytics",
  "Progress tracking dashboard",
  "100+ DILR sets and sectional tests",
  "200+ idioms & phrasal verbs with context examples",
  "Priority email support",
];

export default function Pricing() {
  const [selectedDuration, setSelectedDuration] = useState(1); // Default to 3 months

  const currentPlan = durationOptions[selectedDuration];

  return (
    <section id="pricing" className="py-24 bg-background-alt">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-accent mb-3">
              <Zap size={18} />
              <span className="text-xs font-semibold tracking-widest uppercase">
                Unlock your prep companion
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Unlock Your Prep Companion with CAT PLUS
            </h2>
            <p className="text-foreground-muted max-w-xl mx-auto">
              Choose the plan that fits your preparation timeline. No hidden fees,
              no auto-renewals.
            </p>
          </div>
        </FadeIn>

        {/* Duration Tabs */}
        <FadeIn delay={0.1}>
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-surface border border-border rounded-[10px] p-1">
            {durationOptions.map((option, index) => (
              <button
                key={option.id}
                onClick={() => setSelectedDuration(index)}
                className={`relative px-5 py-2.5 text-sm font-medium rounded-[8px] transition-all duration-200 ${
                  selectedDuration === index
                    ? "bg-foreground text-background"
                    : "text-foreground-muted hover:text-foreground"
                }`}
              >
                {option.label}
                {option.isSale && (
                  <span className="absolute -top-2 -right-2 px-1.5 py-0.5 text-[10px] font-bold uppercase bg-accent text-white rounded">
                    Sale
                  </span>
                )}
                {option.isBestValue && (
                  <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] font-semibold text-accent whitespace-nowrap">
                    Best Value
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
        </FadeIn>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-8">
          {/* Free Plan */}
          <FadeIn delay={0.2}>
          <div className="bg-surface border border-border rounded-[14px] p-8">
            {/* Plan Header */}
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-foreground-subtle mb-1">
                Free Plan
              </p>
              <h3 className="font-display text-2xl font-bold text-foreground">
                CAT Starter
              </h3>
              <p className="text-sm text-foreground-muted mt-1">
                Perfect for exploring PrepAiro
              </p>
            </div>

            {/* Price */}
            <div className="mb-6 pb-6 border-b border-border">
              <div className="flex items-baseline gap-1">
                <span className="text-foreground-muted">&#8377;</span>
                <span className="font-display text-5xl font-bold text-foreground tabular-nums">
                  0
                </span>
                <span className="text-foreground-muted text-sm ml-1">
                  /forever
                </span>
              </div>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {freePlanFeatures.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sm text-foreground"
                >
                  <Check size={16} className="flex-shrink-0 mt-0.5 text-success" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="/onboarding"
              className="w-full py-3.5 px-6 text-sm font-semibold rounded-[10px] transition-all duration-200 bg-background-alt hover:bg-border text-foreground border border-border block text-center"
            >
              Continue with Free
            </a>
          </div>
          </FadeIn>

          {/* Plus Plan */}
          <FadeIn delay={0.3}>
          <div className="relative bg-surface border-2 border-accent rounded-[14px] p-8 shadow-lg">
            {/* Recommended Badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white bg-accent rounded-full">
                <Zap size={12} />
                Recommended
              </span>
            </div>

            {/* Plan Header */}
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-foreground-subtle mb-1">
                Plus Plan
              </p>
              <h3 className="font-display text-2xl font-bold text-foreground">
                CAT Advance
              </h3>
              <p className="text-sm text-foreground-muted mt-1">
                CAT Prep India - {currentPlan.label === "1 month" ? "1 Month" : currentPlan.label === "3 months" ? "3 Months" : "6 Months"}
              </p>
            </div>

            {/* Price */}
            <div className="mb-6 pb-6 border-b border-border">
              <div className="flex items-baseline gap-2">
                {currentPlan.originalPrice && (
                  <span className="text-foreground-subtle line-through text-lg">
                    &#8377;{currentPlan.originalPrice}
                  </span>
                )}
                <span className="text-foreground-muted">&#8377;</span>
                <span className="font-display text-5xl font-bold text-foreground tabular-nums">
                  {currentPlan.price}
                </span>
                <span className="text-foreground-muted text-sm">
                  /per month
                </span>
              </div>
              <p className="text-xs text-foreground-subtle mt-2">
                One-time payment. No auto-renew.
              </p>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {plusPlanFeatures.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sm text-foreground"
                >
                  <Check size={16} className="flex-shrink-0 mt-0.5 text-accent" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="/onboarding"
              className="w-full py-3.5 px-6 text-sm font-semibold rounded-[10px] transition-all duration-200 bg-accent hover:bg-accent-hover text-white block text-center"
            >
              Upgrade to Plus
            </a>
          </div>
          </FadeIn>
        </div>

        {/* Trust Note */}
        <FadeIn delay={0.4}>
          <p className="text-center text-sm text-foreground-subtle mt-10">
            Secure payment via Razorpay. Cancel anytime before renewal.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
