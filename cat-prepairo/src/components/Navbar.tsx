"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQs", href: "#faqs" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="PrepAiro"
              width={150}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </a>

          {/* Desktop Navigation - Properly Centered */}
          <div className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-12">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground/70 hover:text-foreground text-base font-medium transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-200" />
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block flex-shrink-0">
            <a
              href="/onboarding"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-accent hover:bg-accent-hover rounded-[10px] transition-all duration-200 shadow-md hover:shadow-lg group"
            >
              Get Started
              <ArrowRight
                size={18}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground-muted hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-border bg-surface/95 backdrop-blur-md">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-foreground/80 hover:text-foreground hover:bg-background-alt text-lg font-medium transition-colors duration-200 py-3 px-4 rounded-[8px]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/onboarding"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-accent hover:bg-accent-hover rounded-[10px] transition-all duration-200 mt-4"
              >
                Get Started
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
