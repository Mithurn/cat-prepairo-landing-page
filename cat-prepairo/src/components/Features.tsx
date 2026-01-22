"use client";

import { useState } from "react";
import {
  BookOpen,
  Calculator,
  PuzzleIcon,
  Languages,
  Zap,
  Brain,
  Clock,
  Target,
  TrendingUp,
  BarChart3,
  Lightbulb,
  Sparkles,
} from "lucide-react";
import FadeIn from "./animations/FadeIn";

type FeatureSection = {
  id: string;
  name: string;
  tag: string;
  icon: React.ReactNode;
  tabs: {
    id: string;
    label: string;
    title: string;
    description: string;
    highlights: string[];
  }[];
};

const featureSections: FeatureSection[] = [
  {
    id: "varc",
    name: "VARC",
    tag: "Verbal Ability & Reading Comprehension",
    icon: <BookOpen size={20} />,
    tabs: [
      {
        id: "reading-speed",
        label: "Reading Speed",
        title: "Speed Reading with Deep Comprehension",
        description:
          "Timed RC passages with adaptive difficulty that adjusts to your level. Airo AI tracks your reading speed (wpm) and comprehension accuracy in real-time, building you up to the 150+ wpm CAT demands. Get instant AI explanations when you misunderstand passages.",
        highlights: [
          "Adaptive difficulty engine",
          "Real-time speed analytics",
          "Airo instant doubt resolution",
        ],
      },
      {
        id: "comprehension",
        label: "Comprehension",
        title: "Extract Answers Without Re-Reading",
        description:
          "Learn to identify main idea, author's tone, and inference questions instantly. Airo AI teaches passage mapping with visual overlays that show exactly where answers hide — so you find them in seconds, not minutes.",
        highlights: [
          "AI passage structure mapping",
          "Wrong answer trap analysis",
          "Personalized weak-area drills",
        ],
      },
      {
        id: "para-jumbles",
        label: "Para Jumbles",
        title: "Crack Para Jumbles & Odd One Out",
        description:
          "Master sentence arrangement logic with AI that highlights linking words, pronoun references, and chronological clues in real-time. Airo breaks down every jumbled paragraph showing exactly why sentences connect.",
        highlights: [
          "Smart connector highlighting",
          "Step-by-step logic breakdown",
          "Spaced repetition for pattern mastery",
        ],
      },
    ],
  },
  {
    id: "qa",
    name: "QA",
    tag: "Quantitative Ability",
    icon: <Calculator size={20} />,
    tabs: [
      {
        id: "concept-clarity",
        label: "Concept Clarity",
        title: "Build Rock-Solid QA Fundamentals",
        description:
          "From number systems to geometry, master every CAT quant concept with visual explanations. Airo AI runs diagnostic tests to pinpoint weak areas and creates a personalized learning path.",
        highlights: [
          "AI diagnostic assessment",
          "Weakness heat map",
          "Personalized learning path",
          "AI video explanations",
        ],
      },
      {
        id: "shortcuts",
        label: "Shortcut Methods",
        title: "Calculate 3x Faster with Smart Shortcuts",
        description:
          "Learn Vedic math tricks, approximation techniques, and pattern recognition. Airo AI analyzes your solving method in real-time — showing you when to calculate vs eliminate.",
        highlights: [
          "Method efficiency scoring",
          "Smart shortcut suggestions",
          "Time-per-question analytics",
          "Speed-target drills",
        ],
      },
      {
        id: "problem-solving",
        label: "Problem Solving",
        title: "Step-by-Step Problem Solving",
        description:
          "Airo evaluates YOUR approach, identifies mistakes, and suggests faster methods tailored to how you think. Instant doubt solving with step-by-step video explanations.",
        highlights: [
          "24/7 AI doubt solving",
          "Approach comparison",
          "Mistake pattern detection",
          "AI solution videos",
        ],
      },
    ],
  },
  {
    id: "dilr",
    name: "DILR",
    tag: "Data Interpretation & Logical Reasoning",
    icon: <PuzzleIcon size={20} />,
    tabs: [
      {
        id: "set-analysis",
        label: "Set Analysis",
        title: "Crack DILR Sets Like a Pro",
        description:
          "Practice CAT-level DILR sets with AI difficulty ratings and post-set breakdowns showing optimal solving order and time loss.",
        highlights: [
          "AI difficulty predictor",
          "Set-wise analytics",
          "Optimal attempt order",
          "Instant doubts",
        ],
      },
      {
        id: "pattern-recognition",
        label: "Pattern Recognition",
        title: "Spot Patterns That Others Miss",
        description:
          "Airo identifies DILR set patterns early and teaches the solving framework using visual guides and flashcards.",
        highlights: [
          "Pattern type classifier",
          "Framework flashcards",
          "Pattern-specific drills",
          "Visual solving guides",
        ],
      },
      {
        id: "time-management",
        label: "Time Management",
        title: "Finish DILR Section with Time to Spare",
        description:
          "Real-time time tracking with alerts, adaptive mock pressure, and personalized set selection strategy.",
        highlights: [
          "Live time tracker",
          "Personal benchmarks",
          "Pressure simulation",
          "Custom strategies",
        ],
      },
    ],
  },
  {
    id: "vocabulary",
    name: "Vocabulary",
    tag: "VARC Vocabulary",
    icon: <Languages size={20} />,
    tabs: [
      {
        id: "contextual",
        label: "Contextual Vocabulary",
        title: "Master Vocabulary in Context",
        description:
          "Learn vocabulary through CAT-style passages with spaced repetition and memory-strength tracking.",
        highlights: [
          "1000+ smart flashcards",
          "Memory tracking",
          "Context-based learning",
          "Smart reminders",
        ],
      },
      {
        id: "idioms",
        label: "Idioms & Phrases",
        title: "Crack Idioms That Appear in VARC",
        description:
          "CAT-relevant idioms and phrasal verbs with real usage examples and confusion-pair explanations.",
        highlights: [
          "Idiom flashcards",
          "Confusion highlighting",
          "CAT passage usage",
          "Adaptive reviews",
        ],
      },
      {
        id: "word-roots",
        label: "Word Roots",
        title: "Decode Unknown Words with Root Analysis",
        description:
          "Learn Latin and Greek roots visually to decode unfamiliar words instantly.",
        highlights: [
          "Root family trees",
          "Root-based flashcards",
          "Word connection mapping",
          "Root quizzes",
        ],
      },
    ],
  },
];

const highlightIcons = [
  <Zap key="zap" size={14} />,
  <Brain key="brain" size={14} />,
  <Target key="target" size={14} />,
  <TrendingUp key="trending" size={14} />,
  <BarChart3 key="chart" size={14} />,
  <Lightbulb key="light" size={14} />,
  <Clock key="clock" size={14} />,
  <Sparkles key="sparkles" size={14} />,
];

export default function Features() {
  const [activeSection, setActiveSection] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  const currentSection = featureSections[activeSection];
  const currentTab = currentSection.tabs[activeTab];

  const handleSectionChange = (index: number) => {
    setActiveSection(index);
    setActiveTab(0);
  };

  return (
    <section id="features" className="py-24 bg-background-alt">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">
              CAT Preparation Modules
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything You Need to Crack CAT
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              AI-powered modules for every CAT section. Master concepts, build
              speed, and develop exam strategies that work.
            </p>
          </div>
        </FadeIn>

        {/* Main Section Tabs - Editorial Style */}
        <FadeIn delay={0.1}>
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {featureSections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => handleSectionChange(index)}
              className={`flex items-center gap-2 px-5 py-3 text-sm font-medium rounded-[10px] transition-all duration-200 ${
                activeSection === index
                  ? "bg-foreground text-background shadow-sm"
                  : "bg-surface text-foreground-muted hover:text-foreground border border-border hover:border-border-strong"
              }`}
            >
              {section.icon}
              <span>{section.name}</span>
            </button>
          ))}
        </div>
        </FadeIn>

        {/* Feature Content Card */}
        <FadeIn delay={0.2}>
        <div className="bg-surface border border-border rounded-[14px] overflow-hidden">
          {/* Sub-tabs - Left aligned, underline style */}
          <div className="border-b border-border px-6 pt-6">
            <div className="flex gap-6 overflow-x-auto">
              {currentSection.tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(index)}
                  className={`pb-4 text-sm font-medium whitespace-nowrap transition-all duration-200 relative ${
                    activeTab === index
                      ? "text-foreground"
                      : "text-foreground-subtle hover:text-foreground-muted"
                  }`}
                >
                  {tab.label}
                  {activeTab === index && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6 md:p-10">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
              {/* Left - Content */}
              <div>
                <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent bg-accent/10 rounded-full mb-4">
                  {currentSection.tag}
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
                  {currentTab.title}
                </h3>
                <p className="text-foreground-muted leading-relaxed">
                  {currentTab.description}
                </p>
              </div>

              {/* Right - AI Feature Highlights */}
              <div className="bg-background-alt rounded-[10px] p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-foreground-subtle mb-4">
                  AI Feature Highlights
                </p>
                <ul className="space-y-3">
                  {currentTab.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-foreground"
                    >
                      <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-surface border border-border text-accent">
                        {highlightIcons[index % highlightIcons.length]}
                      </span>
                      <span className="text-sm font-medium">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Analytics Bar - Data-driven visual element */}
          <div className="border-t border-border bg-background-alt/50 px-6 py-4">
            <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-foreground-subtle">
              <div className="flex items-center gap-6">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-success" />
                  AI-Powered Analysis
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  Personalized Learning
                </span>
              </div>
              <span className="font-mono text-foreground-muted">
                Module {activeSection + 1}/{featureSections.length}
              </span>
            </div>
          </div>
        </div>
        </FadeIn>
      </div>
    </section>
  );
}
