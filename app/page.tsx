import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import ProductsSection from "@/components/sections/ProductsSection";
import BrandValueSection from "@/components/sections/BrandValueSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ApplicationSection from "@/components/sections/ApplicationSection";
import TrustSection from "@/components/sections/TrustSection";
import ServiceAreasSection from "@/components/sections/ServiceAreasSection";
import QualitySection from "@/components/sections/QualitySection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProductsSection />
        <BrandValueSection />
        <ExpertiseSection />
        <ProcessSection />
        <ApplicationSection />
        <TrustSection />
        <ServiceAreasSection />
        <QualitySection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <MobileBar />
      <div className="h-16 md:hidden" aria-hidden="true" />
    </>
  );
}
