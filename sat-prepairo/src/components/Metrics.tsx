"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, Zap, TrendingUp, BookOpen, Brain } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  {
    icon: GraduationCap,
    value: "#1",
    label: "Preferred by 8,000+ SAT aspirants worldwide for complete prep coverage.",
    isNumber: false,
  },
  {
    icon: Zap,
    value: 95,
    suffix: "%",
    label: "Say PrepAiro's AI Tutor made tough math concepts easier to understand.",
    isNumber: true,
  },
  {
    icon: TrendingUp,
    value: 92,
    suffix: "%",
    label: "Reported 100+ point improvement within 8 weeks of regular practice.",
    isNumber: true,
  },
  {
    icon: BookOpen,
    value: 91,
    suffix: "%",
    label: "Found vocabulary in context practice directly improved their Reading score.",
    isNumber: true,
  },
  {
    icon: Brain,
    value: 88,
    suffix: "%",
    label: "Felt more confident and less test anxiety with unlimited practice tests.",
    isNumber: true,
  },
];

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!countRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;

            const duration = 2000;
            const steps = 60;
            const increment = target / steps;
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                setCount(target);
                clearInterval(timer);
              } else {
                setCount(Math.floor(current));
              }
            }, duration / steps);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(countRef.current);

    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={countRef}>
      {count}
      {suffix}
    </span>
  );
}

export default function Metrics() {
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

  return (
    <section
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
          maxWidth: "1200px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {/* Header */}
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
            Why PrepAiro
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
            Level up your SAT prep with{" "}
            <span style={{ color: "#CEFF65" }}>PrepAiro Plus</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              color: "#9CA3AF",
              maxWidth: "600px",
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: 1.6,
            }}
          >
            Master every SAT concept the smarter way with AI tutor support, unlimited practice sets, and personalized notes built for real score improvement.
          </motion.p>
        </div>

        {/* Metrics Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "24px",
          }}
        >
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                style={{
                  background: "#080808",
                  border: "1px solid #1F2937",
                  borderRadius: "16px",
                  padding: "24px",
                  textAlign: "center",
                  transition: "all 0.3s",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: "rgba(206,255,101,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginBottom: "16px",
                  }}
                >
                  <Icon style={{ width: "24px", height: "24px", color: "#CEFF65" }} />
                </div>
                <div
                  style={{
                    fontSize: "1.875rem",
                    fontWeight: 700,
                    color: "#CEFF65",
                    marginBottom: "12px",
                  }}
                >
                  {metric.isNumber ? (
                    <CountUp target={metric.value as number} suffix={metric.suffix} />
                  ) : (
                    metric.value
                  )}
                </div>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#9CA3AF",
                    lineHeight: 1.6,
                  }}
                >
                  {metric.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
