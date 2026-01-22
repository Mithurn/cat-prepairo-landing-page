"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import FadeIn from "./animations/FadeIn";

const faqs = [
  {
    question: "What makes PrepAiro Plus the best CAT preparation platform?",
    answer:
      "PrepAiro Plus combines AI tutoring, unlimited sectional tests, personalized analytics, and DILR-focused training all in one plan that's 10× more affordable than coaching institutes like TIME or IMS.",
  },
  {
    question:
      "What makes PrepAiro Plus different from TIME, IMS, or Career Launcher?",
    answer:
      "Traditional coaching gives you fixed schedules and generic material. PrepAiro adapts to YOUR weak areas with AI-powered personalization, available 24×7, at a fraction of the cost.",
  },
  {
    question: "Does PrepAiro Plus cover all three CAT sections?",
    answer:
      "Yes. You get comprehensive coverage of QA (Quantitative Ability), VARC (Verbal Ability & Reading Comprehension), and DILR (Data Interpretation & Logical Reasoning) with topic-wise and sectional tests.",
  },
  {
    question: "Do I need to pay extra for updates or new features?",
    answer:
      "No. All updates, new question banks, and feature additions are included in your plan at no extra cost.",
  },
  {
    question: "Is this suitable for first-time CAT takers?",
    answer:
      "Absolutely. PrepAiro is designed for beginners and repeat test-takers alike. The AI tutor adjusts to your level and helps build concepts from scratch.",
  },
  {
    question: "What is the PrepAiro AI Tutor?",
    answer:
      "It's your personal CAT mentor available 24×7. Ask any doubt, get step-by-step solutions, understand shortcuts, and receive personalized tips based on your performance.",
  },
  {
    question: "Can I access QA, VARC, and DILR all in one plan?",
    answer:
      "Yes. Every PrepAiro Plus plan includes complete access to all three sections with no hidden charges.",
  },
  {
    question: "Does PrepAiro Plus offer live classes or 1-on-1 mentoring?",
    answer:
      "PrepAiro focuses on self-paced learning with AI support. For personalized mentoring, we offer optional add-on sessions with CAT toppers.",
  },
  {
    question: "Will I get practice questions similar to the actual CAT exam?",
    answer:
      "Yes. Our question bank mirrors CAT difficulty and is updated annually based on the latest exam patterns.",
  },
  {
    question: "Is this program helpful for working professionals?",
    answer:
      "Yes. PrepAiro is built for busy schedules. Study anytime on mobile or desktop, track progress, and prepare efficiently without fixed class timings.",
  },
  {
    question: "Does PrepAiro cover vocabulary for CAT VARC?",
    answer:
      "Yes. Unlike GRE-style word lists, CAT tests vocabulary in context. PrepAiro focuses on idioms, phrasal verbs, word roots, and contextual word usage that actually appears in VARC passages — not random definitions you'll never see on exam day.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-24 bg-background-alt">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">
              Common Questions
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
            </h2>
            <p className="text-foreground-muted">
              Everything you need to know about PrepAiro CAT preparation.
            </p>
          </div>
        </FadeIn>

        {/* FAQ Accordion */}
        <FadeIn delay={0.1}>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-surface border border-border rounded-[10px] overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-background-alt/50 transition-colors duration-200"
              >
                <span className="font-medium text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-foreground-subtle transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-5 pb-5 text-foreground-muted leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
        </FadeIn>

        {/* Contact Note */}
        <FadeIn delay={0.2}>
          <p className="text-center text-sm text-foreground-subtle mt-10">
            Still have questions?{" "}
            <a
              href="mailto:support@prepairo.com"
              className="text-accent hover:underline"
            >
              Contact our support team
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
