import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import AppShowcase from "@/components/sections/AppShowcase";
import WhyChoose from "@/components/sections/WhyChoose";
import Reviews from "@/components/sections/Reviews";
import DownloadCTA from "@/components/sections/DownloadCTA";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Features />
      <HowItWorks />
      <AppShowcase />
      <WhyChoose />
      <Reviews />
      <DownloadCTA />
      <FAQ />
    </>
  );
}
