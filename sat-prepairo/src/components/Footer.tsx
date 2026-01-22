"use client";

import { motion } from "framer-motion";
import { ArrowRight, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "FAQs", href: "#faqs" },
    ],
    Company: [
      { label: "About Us", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
    Legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Refund Policy", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <footer style={{ background: "#151515", borderTop: "1px solid #1F2937" }}>
      {/* CTA Section */}
      <div
        style={{
          maxWidth: "1200px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "24px",
          paddingRight: "24px",
          paddingTop: "64px",
          paddingBottom: "64px",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <h2
            style={{
              fontFamily: "var(--font-space-grotesk), system-ui, sans-serif",
              fontSize: "clamp(1.875rem, 5vw, 3rem)",
              fontWeight: 700,
              marginBottom: "24px",
              color: "#FAFAFA",
            }}
          >
            Ready to <span style={{ color: "#CEFF65" }}>Crush the SAT?</span>
          </h2>
          <p
            style={{
              color: "#9CA3AF",
              marginBottom: "32px",
              maxWidth: "560px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Join thousands of students already preparing smarter with AI-powered learning.
          </p>
          <a
            href="/onboarding"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "16px 32px",
              fontSize: "18px",
              fontWeight: 600,
              borderRadius: "9999px",
              background: "#CEFF65",
              color: "#080808",
              textDecoration: "none",
              boxShadow: "0 0 30px rgba(206,255,101,0.3)",
            }}
          >
            Start Your Free Trial
            <ArrowRight style={{ width: "20px", height: "20px" }} />
          </a>
        </motion.div>

        {/* Links Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "32px",
            paddingTop: "48px",
            borderTop: "1px solid #1F2937",
          }}
        >
          {/* Brand */}
          <div style={{ gridColumn: "span 2" }} className="footer-brand">
            <a
              href="/"
              style={{
                display: "inline-block",
                marginBottom: "16px",
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
            <p
              style={{
                color: "#9CA3AF",
                fontSize: "14px",
                marginBottom: "24px",
              }}
            >
              AI-powered SAT prep that actually works.
            </p>
            {/* Social Links */}
            <div style={{ display: "flex", gap: "16px" }}>
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: "#080808",
                      border: "1px solid #1F2937",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#9CA3AF",
                      transition: "all 0.2s",
                      textDecoration: "none",
                    }}
                  >
                    <Icon style={{ width: "20px", height: "20px" }} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3
                style={{
                  fontWeight: 600,
                  color: "#FAFAFA",
                  marginBottom: "16px",
                }}
              >
                {category}
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {links.map((link) => (
                  <li key={link.label} style={{ marginBottom: "12px" }}>
                    <a
                      href={link.href}
                      style={{
                        color: "#9CA3AF",
                        fontSize: "14px",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: "1px solid #1F2937" }}>
        <div
          style={{
            maxWidth: "1200px",
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: "24px",
            paddingRight: "24px",
            paddingTop: "24px",
            paddingBottom: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <p style={{ color: "#9CA3AF", fontSize: "14px" }}>
              © {currentYear} PrepAiro. All rights reserved.
            </p>
            <p style={{ color: "#9CA3AF", fontSize: "14px" }}>
              Made with 💚 for SAT aspirants
            </p>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 640px) {
          .footer-brand {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </footer>
  );
}
