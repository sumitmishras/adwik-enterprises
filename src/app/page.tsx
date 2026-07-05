import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProductCategories from "@/components/ProductCategories";
import StatsCounter from "@/components/StatsCounter";
import WhyUs from "@/components/WhyUs";
import ContactSection from "@/components/ContactSection";
import CTABanner from "@/components/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProductCategories />
      <StatsCounter />
      <WhyUs />
      <ContactSection />
      <CTABanner />
    </>
  );
}
