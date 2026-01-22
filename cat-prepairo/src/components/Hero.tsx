"use client";

import { ArrowRight, Users } from "lucide-react";
import { motion } from "framer-motion";
import { RetroGrid } from "./ui/retro-grid";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center pt-20 overflow-hidden bg-background">
      {/* Retro Grid Background */}
      <RetroGrid
        angle={65}
        cellSize={60}
        opacity={0.6}
        lightLineColor="rgba(120, 100, 20, 0.5)"
        darkLineColor="rgba(120, 100, 20, 0.5)"
      />

      {/* Accent Line - Top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2.5 px-5 py-2.5 mb-14 bg-surface/80 backdrop-blur-sm border border-border rounded-full"
        >
          <Users size={18} className="text-accent" />
          <span className="text-sm font-medium tracking-wide uppercase text-foreground-muted">
            Trusted by 5,000+ CAT Aspirants
          </span>
        </motion.div>

        {/* Main Headline - Two Lines */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight text-foreground mb-10"
        >
          <span className="block whitespace-nowrap">Tired of Chasing CAT Shortcuts?</span>
          <span className="block text-accent mt-4">Master What Actually Works.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl lg:text-2xl text-foreground-muted max-w-2xl mx-auto mb-16 leading-relaxed"
        >
          PrepAiro helps you crack CAT by building real problem-solving skills,
          not memorized tricks.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a
            href="/onboarding"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 text-base font-semibold text-white bg-accent hover:bg-accent-hover rounded-[10px] transition-all duration-200 shadow-md hover:shadow-lg group"
          >
            Get Started
            <ArrowRight
              size={18}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center px-10 py-4 text-base font-medium text-foreground-muted hover:text-foreground border border-border hover:border-border-strong rounded-[10px] transition-all duration-200 bg-surface/50 backdrop-blur-sm"
          >
            Explore Features
          </a>
        </motion.div>
      </div>

    </section>
  );
}
