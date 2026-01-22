# SAT PrepAiro - Design Specification

> **For AI Agents**: Read this file before writing any code. This defines the visual identity for the SAT landing page.

---

## Brand Overview

**Product**: PrepAiro - SAT Exam Preparation Platform
**Target Audience**: Undergraduate students (16-22 years) preparing for SAT
**Brand Name**: PrepAiro (same brand, different exam)

---

## Design Philosophy

### Vibe: Playful, Friendly, Trustworthy

Unlike the CAT page (serious, professional), the SAT page should feel:
- **Playful** - Bouncy animations, fun interactions
- **Approachable** - Not intimidating, welcoming to younger students
- **Energetic** - Dynamic, lively, modern
- **Trustworthy** - Still premium quality, but not stuffy

### Inspiration: Preparoo.app
Reference site for visual direction - bouncy animations, neon accents, youthful energy.

---

## Color Palette

### Option A: Dark Theme + Neon (Preparoo Style)
```css
--background: #080808;        /* Near black */
--background-secondary: #111111;  /* Slightly lighter black */
--foreground: #FFFFFF;        /* White text */
--foreground-muted: #9CA3AF;  /* Gray text */
--accent: #CEFF65;            /* Neon lime green - PRIMARY CTA */
--accent-hover: #B8E85A;      /* Darker lime on hover */
--accent-secondary: #8B5CF6;  /* Purple for secondary elements */
--border: #1F2937;            /* Dark gray borders */
--surface: #151515;           /* Cards, elevated surfaces */
```

### Option B: Light Theme + Neon (Alternative)
```css
--background: #FAFAFA;        /* Off-white */
--foreground: #080808;        /* Near black text */
--accent: #84CC16;            /* Lime green */
--accent-secondary: #8B5CF6;  /* Purple */
--surface: #FFFFFF;           /* White cards */
```

**DECISION NEEDED**: Which theme? (Recommend Option A - Dark + Neon for the Gen-Z vibe)

---

## Typography

### Fonts
| Usage | Font | Fallback | Weight |
|-------|------|----------|--------|
| **Headlines** | Coolvetica Condensed | Impact, sans-serif | 700 |
| **Body/UI** | Satoshi | Inter, system-ui | 400, 500, 600, 700 |

### Alternative (if Coolvetica not available)
- Headlines: **Space Grotesk** or **Bebas Neue**
- Body: **Inter** or **DM Sans**

### Scale
```css
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
--text-6xl: 3.75rem;   /* 60px */
--text-hero: 4.5rem;   /* 72px - Hero headlines */
```

---

## Animations & Motion

### Principles
- **Bouncy** - Use spring physics, overshoot
- **Playful** - Subtle wobble, scale effects
- **Fast but smooth** - 200-400ms duration
- **Delightful** - Micro-interactions that spark joy

### Framer Motion Defaults
```javascript
// Bouncy spring for entrances
const bounceIn = {
  type: "spring",
  stiffness: 300,
  damping: 20
};

// Playful hover
const hoverScale = {
  scale: 1.05,
  transition: { type: "spring", stiffness: 400 }
};

// Button press
const tapScale = {
  scale: 0.95
};
```

### Key Animations
| Element | Animation | Description |
|---------|-----------|-------------|
| Hero text | Staggered fade-up | Words appear one by one with bounce |
| CTAs | Glow pulse | Neon glow that pulses subtly |
| Cards | Lift + glow | Rise up with shadow/glow on hover |
| Icons | Bounce | Small bounce on hover |
| Page sections | Fade-in-up | Smooth entrance on scroll |
| Marquee | Smooth scroll | Continuous logo scroll |

### GSAP Opportunities
- Hero text scramble effect
- Smooth scroll with parallax
- Number counter animations
- SVG path animations for illustrations

---

## UI Components

### Buttons
```css
/* Primary CTA - Neon */
.btn-primary {
  background: var(--accent);        /* #CEFF65 */
  color: #080808;                   /* Dark text on neon */
  border-radius: 40px;              /* Pill shape */
  padding: 16px 32px;
  font-weight: 600;
  box-shadow: 0 0 20px rgba(206, 255, 101, 0.3);
}

.btn-primary:hover {
  box-shadow: 0 0 30px rgba(206, 255, 101, 0.5);
  transform: translateY(-2px);
}

/* Secondary */
.btn-secondary {
  background: transparent;
  border: 2px solid var(--accent);
  color: var(--accent);
  border-radius: 40px;
}
```

### Cards
```css
.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 24px;
}

.card:hover {
  border-color: var(--accent);
  box-shadow: 0 0 20px rgba(206, 255, 101, 0.1);
  transform: translateY(-4px);
}
```

### Input Fields
```css
.input {
  background: transparent;
  border: 2px solid var(--border);
  border-radius: 40px;              /* Pill shape */
  padding: 16px 24px;
  color: var(--foreground);
}

.input:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(206, 255, 101, 0.2);
}
```

---

## Layout Patterns

### Page Structure
```
Navbar (sticky, transparent → solid on scroll)
↓
Hero (full viewport, animated text, CTA)
↓
Features (card grid or bento layout)
↓
How It Works (step-by-step with illustrations)
↓
Metrics/Social Proof (animated counters)
↓
Pricing (comparison cards)
↓
Testimonials (carousel or grid)
↓
FAQs (accordion)
↓
Final CTA (full-width banner)
↓
Footer
```

### Spacing Scale
```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
--space-20: 80px;
--space-24: 96px;
```

---

## What TO DO

- Use neon accents sparingly (CTAs, highlights, hover states)
- Add micro-interactions everywhere
- Use generous padding and whitespace
- Make buttons feel "clickable" with hover effects
- Add subtle background patterns or gradients
- Use icons liberally (Lucide React)
- Make mobile experience equally delightful

## What NOT TO DO

- Don't make it look "corporate" or "boring"
- Don't use harsh pure white (#FFFFFF) on dark bg - use slightly off-white
- Don't skip animations - they're essential for the vibe
- Don't use small, cramped layouts
- Don't forget dark mode contrast accessibility
- Don't make text hard to read (WCAG contrast)

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 15+ (App Router) |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion + GSAP |
| Icons | Lucide React |
| Fonts | Google Fonts (Satoshi, Space Grotesk) or local |

---

## Assets Needed

- [ ] PrepAiro logo (dark background version)
- [ ] University logos for social proof
- [ ] Illustrations or graphics for hero/features
- [ ] Testimonial photos (optional)
- [ ] Favicon

---

## Questions to Resolve

1. **Theme choice**: Dark + Neon or Light + Neon?
2. **Hero animation**: What style? Text scramble, typewriter, or simple fade?
3. **Illustrations**: Custom graphics or icon-based?
4. **University logos**: Which universities for SAT social proof?

---

*Last updated: January 2026*
