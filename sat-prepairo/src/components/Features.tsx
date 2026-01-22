"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BookOpen,
  Calculator,
  Monitor,
  Languages,
  Map,
  AlertTriangle,
  Bot,
  Target,
  BookMarked,
  RefreshCw,
  Brain,
  BarChart3,
  Compass,
  Lightbulb,
  Zap,
  Video,
  TrendingUp,
  Layers,
  Clock,
  Bell,
  ClipboardList,
  FileText,
  ArrowRight,
  Bookmark,
  Workflow,
  Gamepad2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    id: "reading-writing",
    title: "Reading & Writing",
    icon: BookOpen,
    tabs: [
      {
        id: "passage",
        title: "Passage Analysis",
        tag: "Reading & Writing",
        headline: "Decode SAT Passages Like a Pro",
        description:
          "Learn to identify main ideas, analyze evidence, and understand author's purpose. Airo AI explains why right answers are right AND why wrong answers are tempting traps — with visual passage breakdowns that make patterns click permanently.",
        features: [
          { icon: Map, text: "Visual passage breakdowns" },
          { icon: AlertTriangle, text: "Trap answer analysis" },
          { icon: Bot, text: "Instant Airo explanations" },
          { icon: Target, text: "Passage type pattern training" },
        ],
      },
      {
        id: "grammar",
        title: "Grammar Rules",
        tag: "Reading & Writing",
        headline: "Master SAT Grammar Without Memorizing Rules",
        description:
          "Subject-verb agreement, punctuation, transitions, sentence structure — Airo AI teaches the 12 grammar concepts SAT tests repeatedly using pattern recognition, not rote memorization.",
        features: [
          { icon: BookMarked, text: "12 grammar rule flashcards" },
          { icon: RefreshCw, text: "Spaced repetition scheduling" },
          { icon: Brain, text: "Pattern-based learning" },
          { icon: BarChart3, text: "Error type tracking" },
        ],
      },
      {
        id: "vocab-context",
        title: "Vocabulary in Context",
        tag: "Reading & Writing",
        headline: 'Crack "Words in Context" Questions',
        description:
          "SAT tests common words used precisely — not obscure vocab. Airo AI teaches context clue strategies with smart flashcards that show words in SAT-style passages.",
        features: [
          { icon: BookMarked, text: "Context-based word flashcards" },
          { icon: AlertTriangle, text: "Trap elimination training" },
          { icon: FileText, text: "SAT passage-style examples" },
          { icon: RefreshCw, text: "Adaptive difficulty progression" },
        ],
      },
    ],
  },
  {
    id: "math",
    title: "Math",
    icon: Calculator,
    tabs: [
      {
        id: "algebra",
        title: "Algebra",
        tag: "Math",
        headline: "Algebra Foundations for SAT Success",
        description:
          "Linear equations, systems, inequalities — the core of SAT Math. Airo AI runs a diagnostic to find your exact gaps, then builds a personalized learning path.",
        features: [
          { icon: Target, text: "AI diagnostic assessment" },
          { icon: BookMarked, text: "Formula flashcards (spaced repetition)" },
          { icon: Compass, text: "Personalized learning path" },
          { icon: Bot, text: "24/7 Airo doubt solving" },
        ],
      },
      {
        id: "problem-solving",
        title: "Problem Solving",
        tag: "Math",
        headline: "Step-by-Step Math Mastery",
        description:
          "See every SAT Math question type explained clearly. Airo AI evaluates YOUR approach, spots calculation errors, and suggests faster methods.",
        features: [
          { icon: FileText, text: "Approach comparison (yours vs optimal)" },
          { icon: Lightbulb, text: "Error detection before submission" },
          { icon: Zap, text: "Speed optimization tips" },
          { icon: Video, text: "AI video explanations" },
        ],
      },
      {
        id: "advanced-math",
        title: "Advanced Math",
        tag: "Math",
        headline: "Conquer Advanced Math Topics",
        description:
          "Quadratics, polynomials, exponentials — the topics that separate 700+ scorers. Airo AI breaks down hard concepts with visual explanations.",
        features: [
          { icon: BarChart3, text: "Visual concept breakdowns" },
          { icon: BookMarked, text: "Concept flashcards (adaptive review)" },
          { icon: Target, text: "Difficulty progression system" },
          { icon: Brain, text: "Mastery tracking per topic" },
        ],
      },
    ],
  },
  {
    id: "digital-sat",
    title: "Digital SAT Practice",
    icon: Monitor,
    tabs: [
      {
        id: "adaptive",
        title: "Adaptive Testing",
        tag: "Digital SAT",
        headline: "Practice the Adaptive Format",
        description:
          "Experience the real Digital SAT format with true adaptive modules. Airo AI shows you exactly how first-module performance affects second-module difficulty.",
        features: [
          { icon: Target, text: "True adaptive algorithm matching" },
          { icon: BarChart3, text: "Module-to-module impact analysis" },
          { icon: Compass, text: "Difficulty-level specific drills" },
          { icon: TrendingUp, text: "Score prediction engine" },
        ],
      },
      {
        id: "time-management",
        title: "Time Management",
        tag: "Digital SAT",
        headline: "Finish Every Section with Time to Spare",
        description:
          "Master pacing for 64-minute R&W and 70-minute Math sections. Airo AI tracks your speed per question type in real-time.",
        features: [
          { icon: Clock, text: "Real-time pace tracker" },
          { icon: Bell, text: "Falling-behind alerts" },
          { icon: BarChart3, text: "Per-question-type speed analytics" },
          { icon: Compass, text: "Custom pacing strategies" },
        ],
      },
      {
        id: "full-length",
        title: "Full-Length Tests",
        tag: "Digital SAT",
        headline: "Realistic Full-Length Practice Tests",
        description:
          "8 complete Digital SAT practice tests mirroring the real exam — true adaptive modules, exact timing, and AI score prediction accurate within 30 points.",
        features: [
          { icon: ClipboardList, text: "8 full-length adaptive tests" },
          { icon: Target, text: "Score prediction (±30 points accuracy)" },
          { icon: Bot, text: "Instant answer explanations" },
          { icon: FileText, text: "Post-test study plan generation" },
        ],
      },
    ],
  },
  {
    id: "vocabulary",
    title: "Vocabulary",
    icon: Languages,
    tabs: [
      {
        id: "words-context",
        title: "Words in Context",
        tag: "Reading & Writing",
        headline: 'Master SAT\'s "Words in Context" Questions',
        description:
          "SAT tests vocabulary through passages, not definitions. Airo AI teaches you to identify how words function in context with instant explanations.",
        features: [
          { icon: BookMarked, text: "Context-based word flashcards" },
          { icon: FileText, text: "SAT-style sentence examples" },
          { icon: Bot, text: "Answer choice breakdowns" },
          { icon: RefreshCw, text: "Memory-optimized review timing" },
        ],
      },
      {
        id: "academic-vocab",
        title: "Academic Vocabulary",
        tag: "Reading & Writing",
        headline: "500 High-Frequency SAT Words",
        description:
          "The essential academic words appearing across SAT reading passages. AI-powered flashcards use passage-style examples and adaptive spaced repetition.",
        features: [
          { icon: Bookmark, text: "500-word adaptive flashcard deck" },
          { icon: TrendingUp, text: "Forgetting curve prediction" },
          { icon: Bell, text: "Smart review reminders" },
          { icon: Target, text: "Progress tracking per word" },
        ],
      },
      {
        id: "transitions",
        title: "Transition Words",
        tag: "Reading & Writing",
        headline: "Transition Words That Boost Your Score",
        description:
          "Master the 50 transition words SAT loves testing — consequently, nevertheless, furthermore. Airo AI teaches logical relationships with visual flowcharts.",
        features: [
          { icon: Layers, text: "50 transition flashcards" },
          { icon: Workflow, text: "Logic relationship flowcharts" },
          { icon: Brain, text: "Confusion-pair drills" },
          { icon: Gamepad2, text: "Quick-fire practice challenges" },
        ],
      },
    ],
  },
];

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  // Reset tab when feature changes
  useEffect(() => {
    setActiveTab(0);
  }, [activeFeature]);

  const currentFeature = features[activeFeature];
  const currentTab = currentFeature.tabs[activeTab];

  return (
    <section
      id="features"
      ref={sectionRef}
      style={{
        paddingTop: "96px",
        paddingBottom: "96px",
        paddingLeft: "24px",
        paddingRight: "24px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            style={{
              color: "#CEFF65",
              fontWeight: 500,
              fontSize: "14px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Features
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{
              fontFamily: "var(--font-space-grotesk), system-ui, sans-serif",
              fontSize: "clamp(1.875rem, 5vw, 3rem)",
              fontWeight: 700,
              marginTop: "16px",
              marginBottom: "24px",
              color: "#FAFAFA",
            }}
          >
            Everything You Need to{" "}
            <span style={{ color: "#CEFF65" }}>Ace the SAT</span>
          </motion.h2>
        </div>

        {/* Feature Category Tabs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "12px",
            marginBottom: "48px",
          }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(index)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 20px",
                  borderRadius: "9999px",
                  fontWeight: 500,
                  transition: "all 0.2s",
                  background: activeFeature === index ? "#CEFF65" : "#151515",
                  color: activeFeature === index ? "#080808" : "#9CA3AF",
                  border: activeFeature === index ? "none" : "1px solid #1F2937",
                  cursor: "pointer",
                }}
              >
                <Icon style={{ width: "16px", height: "16px" }} />
                {feature.title}
              </button>
            );
          })}
        </div>

        {/* Sub-tabs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "8px",
            marginBottom: "40px",
            maxWidth: "768px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {currentFeature.tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(index)}
              style={{
                padding: "10px 20px",
                fontSize: "14px",
                fontWeight: 500,
                borderRadius: "9999px",
                transition: "all 0.2s",
                background: activeTab === index ? "#151515" : "transparent",
                color: activeTab === index ? "#CEFF65" : "#9CA3AF",
                border: activeTab === index ? "1px solid #CEFF65" : "1px solid transparent",
                boxShadow: activeTab === index ? "0 0 15px rgba(206,255,101,0.15)" : "none",
                cursor: "pointer",
              }}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Feature Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeFeature}-${activeTab}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              background: "#151515",
              border: "1px solid #1F2937",
              borderRadius: "16px",
              padding: "clamp(24px, 4vw, 48px)",
              maxWidth: "1024px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "48px",
                alignItems: "center",
              }}
            >
              {/* Text Content */}
              <div>
                <span
                  style={{
                    display: "inline-block",
                    padding: "6px 12px",
                    fontSize: "12px",
                    fontWeight: 600,
                    background: "rgba(206,255,101,0.1)",
                    color: "#CEFF65",
                    borderRadius: "9999px",
                    marginBottom: "16px",
                  }}
                >
                  {currentTab.tag}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-space-grotesk), system-ui, sans-serif",
                    fontSize: "clamp(1.5rem, 3vw, 1.875rem)",
                    fontWeight: 700,
                    marginBottom: "16px",
                    color: "#FAFAFA",
                  }}
                >
                  {currentTab.headline}
                </h3>
                <p
                  style={{
                    color: "#9CA3AF",
                    marginBottom: "32px",
                    lineHeight: 1.7,
                    fontSize: "16px",
                  }}
                >
                  {currentTab.description}
                </p>

                {/* Feature List */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "16px",
                  }}
                >
                  {currentTab.features.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        <div
                          style={{
                            width: "36px",
                            height: "36px",
                            borderRadius: "8px",
                            background: "rgba(206,255,101,0.1)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          <Icon style={{ width: "16px", height: "16px", color: "#CEFF65" }} />
                        </div>
                        <span
                          style={{
                            fontSize: "14px",
                            color: "#FAFAFA",
                          }}
                        >
                          {item.text}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Visual Placeholder */}
              <div>
                <div
                  style={{
                    aspectRatio: "4/3",
                    borderRadius: "16px",
                    background: "linear-gradient(135deg, rgba(206,255,101,0.05), rgba(139,92,246,0.05))",
                    border: "1px solid #1F2937",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ textAlign: "center", padding: "32px" }}>
                    {(() => {
                      const Icon = currentFeature.icon;
                      return (
                        <Icon
                          style={{
                            width: "80px",
                            height: "80px",
                            color: "rgba(206,255,101,0.3)",
                            marginLeft: "auto",
                            marginRight: "auto",
                            marginBottom: "16px",
                          }}
                        />
                      );
                    })()}
                    <p style={{ color: "#9CA3AF", fontSize: "14px" }}>
                      Interactive Demo
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div
              style={{
                marginTop: "32px",
                paddingTop: "32px",
                borderTop: "1px solid #1F2937",
              }}
            >
              <a
                href="/onboarding"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "16px 32px",
                  borderRadius: "9999px",
                  background: "#CEFF65",
                  color: "#080808",
                  fontWeight: 600,
                  textDecoration: "none",
                  boxShadow: "0 0 20px rgba(206,255,101,0.3)",
                }}
              >
                Start Learning
                <ArrowRight style={{ width: "16px", height: "16px" }} />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
