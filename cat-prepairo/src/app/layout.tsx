import type { Metadata } from "next";
import { Lexend, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "PrepAiro CAT Prep | Master What Actually Works",
  description: "AI-powered CAT preparation that builds real problem-solving skills, not memorized tricks. Trusted by 5,000+ CAT aspirants.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexend.variable} ${bricolage.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
