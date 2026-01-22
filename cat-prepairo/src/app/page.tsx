import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import Features from "@/components/Features";
import Metrics from "@/components/Metrics";
import Pricing from "@/components/Pricing";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <Features />
        <Metrics />
        <Pricing />
        <SocialProof />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
