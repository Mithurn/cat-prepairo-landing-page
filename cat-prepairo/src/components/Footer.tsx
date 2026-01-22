"use client";

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQs", href: "#faqs" },
  ],
  exams: [
    { label: "CAT Prep", href: "#" },
    { label: "GRE Prep", href: "#" },
    { label: "UPSC Prep", href: "#" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Contact", href: "mailto:support@prepairo.com" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <a href="#" className="inline-block mb-4">
              <span className="text-background font-display text-2xl font-bold tracking-tight">
                PrepAiro
              </span>
            </a>
            <p className="text-sm text-background/70 leading-relaxed mb-6">
              AI-powered exam preparation that builds real skills, not memorized
              shortcuts.
            </p>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold bg-accent hover:bg-accent-hover text-white rounded-[10px] transition-colors duration-200"
            >
              Get Started
            </a>
          </div>

          {/* Links */}
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Product */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-background/50 mb-4">
                Product
              </h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm text-background/70 hover:text-background transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exams */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-background/50 mb-4">
                Exams
              </h4>
              <ul className="space-y-3">
                {footerLinks.exams.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm text-background/70 hover:text-background transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-background/50 mb-4">
                Company
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm text-background/70 hover:text-background transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/50">
            &copy; {new Date().getFullYear()} PrepAiro. All rights reserved.
          </p>
          <p className="text-xs text-background/50">
            Made with precision for serious CAT aspirants.
          </p>
        </div>
      </div>
    </footer>
  );
}
