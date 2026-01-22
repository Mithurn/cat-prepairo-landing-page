"use client";

import FadeIn from "./animations/FadeIn";
import { Marquee } from "./ui/marquee";
import { cn } from "@/lib/utils";
import Image from "next/image";

const universities = [
  { name: "IIM Ahmedabad", logo: "/images/iim-ahmedabad.png" },
  { name: "IIM Bangalore", logo: "/images/iim-bangalore.png" },
  { name: "IIM Calcutta", logo: "/images/calcutta.png" },
  { name: "IIM Lucknow", logo: "/images/lucknow.png" },
  { name: "XLRI", logo: "/images/xlri.png" },
  { name: "FMS Delhi", logo: "/images/fms-delhi.jpg" },
  { name: "MDI Gurgaon", logo: "/images/mdi.png" },
  { name: "SPJIMR", logo: "/images/spjimr.png" },
];

const testimonials = [
  {
    quote:
      "PrepAiro's DILR sets are exactly CAT level — I finally stopped fearing Section 2.",
    name: "Ananya",
    role: "CAT aspirant",
  },
  {
    quote:
      "The AI tutor explains QA shortcuts better than any coaching video. My calculation speed literally doubled.",
    name: "Rahul",
    role: "CAT aspirant",
  },
  {
    quote:
      "PrepAiro feels like having a personal mentor 24×7. I get instant explanations for every doubt.",
    name: "Sneha",
    role: "CAT aspirant",
  },
  {
    quote:
      "I improved from 85 to 97 percentile in just 3 months. The sectional practice is game-changing.",
    name: "Arjun",
    role: "CAT aspirant",
  },
  {
    quote:
      "The reading speed tracker helped me finish VARC with 10 minutes to spare — zero cramming.",
    name: "Priyanka",
    role: "CAT aspirant",
  },
  {
    quote:
      "DILR terrified me before... but the set-by-set analysis made patterns finally click.",
    name: "Karthik",
    role: "CAT aspirant",
  },
  {
    quote:
      "The idioms section is gold — I used to lose marks on phrasal verb questions, now I nail them.",
    name: "Divya",
    role: "CAT aspirant",
  },
  {
    quote:
      "Mock analysis is insane — it showed me exactly where I was bleeding time. Game changer.",
    name: "Vikram",
    role: "CAT aspirant",
  },
];

const firstRow = testimonials.slice(0, 4);
const secondRow = testimonials.slice(4);

const ReviewCard = ({
  name,
  role,
  quote,
}: {
  name: string;
  role: string;
  quote: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-80 cursor-pointer overflow-hidden rounded-xl border p-5",
        "border-border bg-surface hover:bg-background-alt transition-colors duration-200"
      )}
    >
      <blockquote className="text-foreground text-sm leading-relaxed mb-4">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center">
          <span className="text-accent font-semibold text-sm">
            {name.charAt(0)}
          </span>
        </div>
        <div>
          <figcaption className="text-sm font-semibold text-foreground">
            {name}
          </figcaption>
          <p className="text-xs text-foreground-muted">{role}</p>
        </div>
      </div>
    </figure>
  );
};

export default function SocialProof() {
  return (
    <>
      {/* University Logos Section */}
      <section className="py-12 bg-background border-y border-border overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <p className="text-center text-xs font-semibold tracking-widest uppercase text-foreground-subtle mb-8">
              Our students have been admitted to
            </p>
          </FadeIn>
        </div>

        {/* Logo Marquee */}
        <div className="relative">
          <Marquee pauseOnHover className="[--duration:25s]">
            {universities.map((uni) => (
              <div
                key={uni.name}
                className="flex items-center justify-center mx-8 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={uni.logo}
                  alt={uni.name}
                  width={120}
                  height={48}
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </div>
            ))}
          </Marquee>

          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent"></div>
        </div>
      </section>

      {/* Testimonials Section with Marquee */}
      <section className="py-24 bg-background-alt">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">
                Student Stories
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Trusted by Thousands of Achievers
              </h2>
              <p className="text-foreground-muted max-w-xl mx-auto">
                Hear from students who transformed their CAT preparation with
                PrepAiro.
              </p>
            </div>
          </FadeIn>

          {/* Marquee Testimonials */}
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:30s]">
              {firstRow.map((review) => (
                <ReviewCard key={review.name} {...review} />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:30s] mt-4">
              {secondRow.map((review) => (
                <ReviewCard key={review.name} {...review} />
              ))}
            </Marquee>

            {/* Fade edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background-alt to-transparent"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background-alt to-transparent"></div>
          </div>
        </div>
      </section>
    </>
  );
}
