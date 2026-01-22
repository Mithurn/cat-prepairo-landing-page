"use client";

import { Users, TrendingUp, Target, Brain, Shield } from "lucide-react";
import FadeIn from "./animations/FadeIn";
import CountUp from "./animations/CountUp";

const metrics = [
  {
    value: 5000,
    suffix: "+",
    label: "CAT Aspirants",
    sublabel: "Trust PrepAiro",
    icon: <Users size={20} />,
  },
  {
    value: 91,
    suffix: "%",
    label: "Found DILR Easier",
    sublabel: "After 4 weeks",
    icon: <Brain size={20} />,
  },
  {
    value: 89,
    suffix: "%",
    label: "Improved Accuracy",
    sublabel: "In 6 weeks",
    icon: <Target size={20} />,
  },
  {
    value: 88,
    suffix: "%",
    label: "Improved VARC",
    sublabel: "Score boost",
    icon: <TrendingUp size={20} />,
  },
  {
    value: 85,
    suffix: "%",
    label: "Reduced Anxiety",
    sublabel: "Exam confidence",
    icon: <Shield size={20} />,
  },
];

export default function Metrics() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">
              Proven Results
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Level Up Your CAT Prep with PrepAiro Plus
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              Master every CAT concept the smarter way with AI tutor support,
              unlimited practice, and personalized notes built for real percentile
              improvement.
            </p>
          </div>
        </FadeIn>

        {/* Metrics Grid - Scorecard Style */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {metrics.map((metric, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="relative bg-surface border border-border rounded-[10px] p-6 text-center group hover:border-border-strong transition-colors duration-200">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-background-alt text-accent mb-4">
                  {metric.icon}
                </div>

                {/* Value with Counter Animation */}
                <div className="font-display text-3xl md:text-4xl font-bold text-foreground tabular-nums mb-2">
                  <CountUp
                    end={metric.value}
                    suffix={metric.suffix}
                    duration={2}
                  />
                </div>

                {/* Label */}
                <div className="text-sm font-medium text-foreground mb-1">
                  {metric.label}
                </div>

                {/* Sublabel */}
                <div className="text-xs text-foreground-subtle">
                  {metric.sublabel}
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <svg
                    className="w-full h-full text-accent"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M0 0h32L0 32z"
                      fill="currentColor"
                      fillOpacity="0.1"
                    />
                  </svg>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom Note */}
        <FadeIn delay={0.5}>
          <p className="text-center text-xs text-foreground-subtle mt-8">
            Based on internal surveys from PrepAiro users (2024)
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
