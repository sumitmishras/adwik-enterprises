import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProductRails from "@/components/ProductRails";
import ProductClamps from "@/components/ProductClamps";
import ProductBrackets from "@/components/ProductBrackets";
import MountingStructure from "@/components/MountingStructure";
import StatsCounter from "@/components/StatsCounter";
import WhyUs from "@/components/WhyUs";
import Gallery from "@/components/Gallery";
import ContactSection from "@/components/ContactSection";
import CTABanner from "@/components/CTABanner";
import BlogSection from "@/components/BlogSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProductRails />
      <ProductClamps />
      <ProductBrackets />
      <MountingStructure />
      <StatsCounter />
      <WhyUs />
      <Gallery />
      <ContactSection />
      <CTABanner />
      <BlogSection />
    </>
  );
}
