"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown, HelpCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "What makes PrepAiro Plus the best SAT preparation platform?",
    answer:
      "PrepAiro Plus combines AI tutoring, unlimited adaptive practice tests, personalized analytics, and Digital SAT-specific training — at 5× less than competitors like Princeton Review or Kaplan.",
  },
  {
    question: "What makes PrepAiro Plus different from Khan Academy, Princeton Review, or Kaplan?",
    answer:
      "Khan Academy is free but generic. Premium courses are expensive and rigid. PrepAiro adapts to YOUR weak areas with AI-powered personalization, available 24×7, at an affordable price.",
  },
  {
    question: "Does PrepAiro Plus cover the Digital SAT format?",
    answer:
      "Yes. Our content is fully updated for the Digital SAT (launched 2024), including adaptive module practice and the shorter 2-hour 14-minute format.",
  },
  {
    question: "Do I need to pay extra for updates or new features?",
    answer:
      "No. All updates, new question banks, and feature additions are included in your plan at no extra cost.",
  },
  {
    question: "Is this suitable for first-time SAT takers?",
    answer:
      "Absolutely. PrepAiro is designed for first-timers and re-takers alike. The AI tutor adjusts to your level and helps build concepts from scratch.",
  },
  {
    question: "What is the PrepAiro AI Tutor?",
    answer:
      "It's your personal SAT mentor available 24×7. Ask any doubt, get step-by-step solutions, understand strategies, and receive personalized tips based on your performance.",
  },
  {
    question: "Can I access Math and Reading & Writing both in one plan?",
    answer:
      "Yes. Every PrepAiro Plus plan includes complete access to all SAT sections with no hidden charges.",
  },
  {
    question: "Does PrepAiro Plus offer live classes or 1-on-1 mentoring?",
    answer:
      "PrepAiro focuses on self-paced learning with AI support. For personalized mentoring, we offer optional add-on sessions with 1550+ scorers.",
  },
  {
    question: "Will I get practice questions similar to the actual SAT?",
    answer:
      "Yes. Our question bank mirrors SAT difficulty and is aligned with official College Board practice tests.",
  },
  {
    question: "Is this program helpful for students with busy school schedules?",
    answer:
      "Yes. PrepAiro is built for busy students. Study anytime on mobile or desktop, track progress, and prepare efficiently alongside school and extracurriculars.",
  },
  {
    question: "Does PrepAiro cover vocabulary for the Digital SAT?",
    answer:
      'Yes. The Digital SAT tests "Words in Context" through reading passages — not old-school word lists. PrepAiro focuses on 500 high-frequency academic words, 50 critical transition words, and contextual vocabulary practice that mirrors exactly how SAT tests vocabulary.',
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div
      style={{
        border: `1px solid ${isOpen ? "#CEFF65" : "#1F2937"}`,
        borderRadius: "12px",
        overflow: "hidden",
        transition: "all 0.3s",
      }}
    >
      <button
        onClick={onClick}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px",
          textAlign: "left",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          transition: "background 0.2s",
        }}
      >
        <span
          style={{
            fontWeight: 500,
            color: "#FAFAFA",
            paddingRight: "16px",
          }}
        >
          {question}
        </span>
        <ChevronDown
          style={{
            width: "20px",
            height: "20px",
            color: "#CEFF65",
            flexShrink: 0,
            transition: "transform 0.3s",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: "hidden" }}
          >
            <div
              style={{
                paddingLeft: "20px",
                paddingRight: "20px",
                paddingBottom: "20px",
                color: "#9CA3AF",
                lineHeight: 1.6,
              }}
            >
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faqs"
      ref={sectionRef}
      style={{
        paddingTop: "96px",
        paddingBottom: "96px",
        paddingLeft: "24px",
        paddingRight: "24px",
        background: "#151515",
      }}
    >
      <div
        style={{
          maxWidth: "768px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "#CEFF65",
              fontWeight: 500,
              fontSize: "14px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "16px",
            }}
          >
            <HelpCircle style={{ width: "16px", height: "16px" }} />
            FAQs
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{
              fontFamily: "var(--font-space-grotesk), system-ui, sans-serif",
              fontSize: "clamp(1.875rem, 5vw, 3rem)",
              fontWeight: 700,
              marginBottom: "24px",
              color: "#FAFAFA",
            }}
          >
            Frequently Asked{" "}
            <span style={{ color: "#CEFF65" }}>Questions</span>
          </motion.h2>
        </div>

        {/* FAQ List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => toggleFAQ(index)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
