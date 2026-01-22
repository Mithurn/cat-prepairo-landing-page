"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Marquee } from "@/components/ui/marquee";

gsap.registerPlugin(ScrollTrigger);

const universities = [
  { name: "MIT", logo: "/images/mit.png" },
  { name: "Stanford", logo: "/images/stanford.png" },
  { name: "Harvard", logo: "/images/harvard.png" },
  { name: "Yale", logo: "/images/yale.png" },
  { name: "Princeton", logo: "/images/princeton.png" },
  { name: "Columbia", logo: "/images/columbia.png" },
  { name: "UPenn", logo: "/images/upenn.png" },
  { name: "Duke", logo: "/images/duke.png" },
];

export default function Universities() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        paddingTop: "64px",
        paddingBottom: "64px",
        borderTop: "1px solid #1F2937",
        borderBottom: "1px solid #1F2937",
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
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          style={{
            textAlign: "center",
            color: "#9CA3AF",
            fontSize: "14px",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            marginBottom: "40px",
          }}
        >
          Our students have been admitted to
        </motion.p>
      </div>

      {/* Logo Marquee */}
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

        <Marquee pauseOnHover className="[--duration:30s] [--gap:4rem]">
          {universities.map((uni) => (
            <div
              key={uni.name}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "64px",
                paddingLeft: "24px",
                paddingRight: "24px",
                opacity: 0.6,
                transition: "opacity 0.3s",
              }}
            >
              {/* Placeholder - replace with actual logos */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "8px",
                    background: "#151515",
                    border: "1px solid #1F2937",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      color: "#CEFF65",
                      fontWeight: 700,
                      fontSize: "18px",
                    }}
                  >
                    {uni.name.charAt(0)}
                  </span>
                </div>
                <span
                  style={{
                    color: "#FAFAFA",
                    fontWeight: 600,
                    fontSize: "18px",
                  }}
                >
                  {uni.name}
                </span>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
