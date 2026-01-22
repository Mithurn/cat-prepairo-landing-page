"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#testimonials", label: "Reviews" },
    { href: "#faqs", label: "FAQs" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.3s",
        background: isScrolled ? "rgba(8, 8, 8, 0.9)" : "transparent",
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        borderBottom: isScrolled ? "1px solid #1F2937" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "24px",
          paddingRight: "24px",
          paddingTop: "16px",
          paddingBottom: "16px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <a
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              textDecoration: "none",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-space-grotesk), system-ui, sans-serif",
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "#FAFAFA",
              }}
            >
              Prep<span style={{ color: "#CEFF65" }}>Airo</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div
            style={{
              display: "none",
              alignItems: "center",
              gap: "32px",
            }}
            className="nav-desktop"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  color: "#9CA3AF",
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div style={{ display: "none" }} className="nav-cta">
            <a
              href="/onboarding"
              style={{
                padding: "12px 24px",
                fontSize: "14px",
                fontWeight: 600,
                borderRadius: "9999px",
                background: "#CEFF65",
                color: "#080808",
                textDecoration: "none",
                boxShadow: "0 0 20px rgba(206,255,101,0.3)",
              }}
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            style={{
              display: "block",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#FAFAFA",
            }}
            className="nav-mobile-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X style={{ width: "24px", height: "24px" }} />
            ) : (
              <Menu style={{ width: "24px", height: "24px" }} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              marginTop: "16px",
              paddingBottom: "16px",
            }}
            className="nav-mobile-menu"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    color: "#9CA3AF",
                    fontWeight: 500,
                    textDecoration: "none",
                    padding: "8px 0",
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/onboarding"
                style={{
                  marginTop: "8px",
                  padding: "12px 24px",
                  fontSize: "14px",
                  fontWeight: 600,
                  borderRadius: "9999px",
                  background: "#CEFF65",
                  color: "#080808",
                  textDecoration: "none",
                  textAlign: "center",
                  display: "block",
                }}
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </div>

      <style jsx global>{`
        @media (min-width: 768px) {
          .nav-desktop {
            display: flex !important;
          }
          .nav-cta {
            display: block !important;
          }
          .nav-mobile-btn {
            display: none !important;
          }
          .nav-mobile-menu {
            display: none !important;
          }
        }
      `}</style>
    </motion.nav>
  );
}
