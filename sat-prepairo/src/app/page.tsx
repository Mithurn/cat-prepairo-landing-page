import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Metrics from "@/components/Metrics";
import Pricing from "@/components/Pricing";
import Universities from "@/components/Universities";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Navbar />
      <Hero />
      <Universities />
      <Features />
      <Metrics />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
