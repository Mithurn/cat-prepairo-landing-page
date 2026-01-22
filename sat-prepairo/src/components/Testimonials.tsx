"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Marquee } from "@/components/ui/marquee";
import { Quote, Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "PrepAiro's math explanations are clearer than any YouTube video. My score jumped 120 points.",
    name: "Ankit",
    role: "SAT aspirant",
  },
  {
    quote: "The adaptive practice tests feel exactly like the real Digital SAT. No surprises on test day.",
    name: "Riya",
    role: "SAT aspirant",
  },
  {
    quote: "PrepAiro feels like having a personal tutor 24×7. I get instant explanations for every doubt.",
    name: "Aditya",
    role: "SAT aspirant",
  },
  {
    quote: "I improved from 1280 to 1480 in just 2 months. The reading strategies actually work.",
    name: "Kavya",
    role: "SAT aspirant",
  },
  {
    quote: "The vocabulary in context practice is genius — I finally understand how SAT tests words.",
    name: "Rohan",
    role: "SAT aspirant",
  },
  {
    quote: "Grammar rules were confusing before... the AI breaks down exactly why each answer is correct.",
    name: "Ishita",
    role: "SAT aspirant",
  },
  {
    quote: "Transition words used to trip me up. Now I spot 'however' vs 'therefore' questions instantly.",
    name: "Aryan",
    role: "SAT aspirant",
  },
];

function TestimonialCard({ quote, name, role }: { quote: string; name: string; role: string }) {
  return (
    <div
      style={{
        width: "350px",
        background: "#151515",
        border: "1px solid #1F2937",
        borderRadius: "16px",
        padding: "24px",
        transition: "border-color 0.3s",
      }}
    >
      {/* Stars */}
      <div style={{ display: "flex", gap: "4px", marginBottom: "16px" }}>
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            style={{
              width: "16px",
              height: "16px",
              fill: "#CEFF65",
              color: "#CEFF65",
            }}
          />
        ))}
      </div>

      {/* Quote */}
      <div style={{ position: "relative" }}>
        <Quote
          style={{
            position: "absolute",
            top: "-8px",
            left: "-8px",
            width: "32px",
            height: "32px",
            color: "rgba(206,255,101,0.2)",
          }}
        />
        <p
          style={{
            color: "#FAFAFA",
            lineHeight: 1.6,
            paddingLeft: "16px",
          }}
        >
          &ldquo;{quote}&rdquo;
        </p>
      </div>

      {/* Author */}
      <div style={{ marginTop: "24px", display: "flex", alignItems: "center", gap: "12px" }}>
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "rgba(206,255,101,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ color: "#CEFF65", fontWeight: 700, fontSize: "14px" }}>
            {name.charAt(0)}
          </span>
        </div>
        <div>
          <p style={{ fontWeight: 500, color: "#FAFAFA" }}>{name}</p>
          <p style={{ fontSize: "14px", color: "#9CA3AF" }}>{role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
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
      id="testimonials"
      ref={sectionRef}
      style={{
        paddingTop: "96px",
        paddingBottom: "96px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "24px",
          paddingRight: "24px",
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
            Student Stories
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
            Trusted by thousands of achievers{" "}
            <span style={{ color: "#CEFF65" }}>aiming for 1500+</span>
          </motion.h2>
        </div>
      </div>

      {/* Testimonial Marquee */}
      <div style={{ position: "relative" }}>
        {/* Gradient Masks */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "128px",
            background: "linear-gradient(to right, #080808, transparent)",
            zIndex: 10,
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "128px",
            background: "linear-gradient(to left, #080808, transparent)",
            zIndex: 10,
          }}
        />

        <Marquee pauseOnHover className="[--duration:60s] [--gap:1.5rem]">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </Marquee>

        <div style={{ marginTop: "24px" }}>
          <Marquee pauseOnHover reverse className="[--duration:60s] [--gap:1.5rem]">
            {[...testimonials].reverse().map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
