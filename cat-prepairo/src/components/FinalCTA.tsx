"use client";

import { ArrowRight } from "lucide-react";
import FadeIn from "./animations/FadeIn";

export default function FinalCTA() {
  return (
    <section className="py-20 bg-foreground">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <FadeIn>
          {/* Headline */}
          <h2 className="font-display text-3xl md:text-4xl font-bold text-background mb-4">
            Ready to Master CAT the Right Way?
          </h2>
          <p className="text-background/70 max-w-xl mx-auto mb-8">
            Join 5,000+ aspirants who chose real skills over shortcuts. Start your
            journey today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/onboarding"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold bg-accent hover:bg-accent-hover text-white rounded-[10px] transition-all duration-200 group"
            >
              Get Started Free
              <ArrowRight
                size={18}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-background/80 hover:text-background border border-background/20 hover:border-background/40 rounded-[10px] transition-all duration-200"
            >
              Explore Features
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
