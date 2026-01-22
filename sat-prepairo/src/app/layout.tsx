import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-satoshi",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "PrepAiro SAT | AI-Powered SAT Prep That Actually Works",
  description:
    "Master the Digital SAT with AI tutoring, adaptive practice tests, and personalized analytics. Trusted by 8,000+ students. Start free today.",
  keywords:
    "SAT prep, Digital SAT, SAT practice tests, SAT tutoring, AI SAT prep, SAT reading, SAT math, SAT writing",
  openGraph: {
    title: "PrepAiro SAT | AI-Powered SAT Prep That Actually Works",
    description:
      "Master the Digital SAT with AI tutoring, adaptive practice tests, and personalized analytics.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${dmSans.variable} font-sans antialiased`}
        style={{ fontFamily: "var(--font-satoshi), system-ui, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
