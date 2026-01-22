"use client";

import FadeIn from "./animations/FadeIn";
import CountUp from "./animations/CountUp";

const stats = [
  { value: 91, suffix: "%", label: "Found DILR Easier" },
  { value: 89, suffix: "%", label: "Improved Accuracy" },
  { value: 88, suffix: "%", label: "Improved VARC" },
  { value: 85, suffix: "%", label: "Reduced Anxiety" },
];

export default function StatsStrip() {
  return (
    <section className="py-16 md:py-20 bg-background-alt border-y border-border">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-foreground font-display tabular-nums">
                  <CountUp end={stat.value} suffix={stat.suffix} duration={2} />
                </div>
                <div className="text-xs md:text-sm text-foreground-subtle mt-2 uppercase tracking-wider font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
