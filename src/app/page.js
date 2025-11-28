import Image from "next/image";
import { HeroSection } from "./components/HeroSection";
import { Features } from "./components/Features";
import { HighlightsSection } from "./components/HighlightsSection";
import { PricingSection } from "./components/PricingSection";
import { Footer } from "react-day-picker";
import { FooterSection } from "./components/FooterSection";

export default function Home() {
  return (
    <div className="bg-background">
      <HeroSection></HeroSection>
      <Features></Features>
      <HighlightsSection></HighlightsSection>
      <PricingSection></PricingSection>
      <FooterSection></FooterSection>
    </div>
  );
}
