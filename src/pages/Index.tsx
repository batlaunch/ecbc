import Navbar from "@/components/Navbar";
import ServiceStrip from "@/components/ServiceStrip";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import FeaturesSection from "@/components/FeaturesSection";
import AboutSection from "@/components/AboutSection";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ServiceStrip />
      <HeroSection />
      <ServicesGrid />
      <FeaturesSection />
      <AboutSection />
      <Testimonials />
      <CtaBanner />
      <Footer />
    </div>
  );
};

export default Index;
