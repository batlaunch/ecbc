import Navbar from "@/components/Navbar";
import SubpageHero from "@/components/SubpageHero";
import ServiceStrip from "@/components/ServiceStrip";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CreditCard } from "lucide-react";

const Payments = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ServiceStrip />
      <SubpageHero />

      <section className="bg-background py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <span className="text-xs font-semibold tracking-wider uppercase text-secondary">Resources</span>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground leading-tight">
              General Biz Center Payments
            </h1>
            <div className="h-20 w-20 rounded-full bg-accent flex items-center justify-center mx-auto">
              <CreditCard className="h-10 w-10 text-accent-foreground" />
            </div>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Make payments for your East County Biz Center services. You can pay online through our secure payment portal, by phone, or in person at our office.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="cta" size="lg" asChild>
                <a href="https://eastcountybiz.com/general-biz-center-payments/" target="_blank" rel="noopener noreferrer">
                  Make a Payment <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </Button>
              <Button variant="ctaOutline" size="lg" asChild>
                <a href="tel:+6194014000">Call (619) 401-4000</a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">We accept credit cards (Visa, Mastercard, Amex) and PayPal.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Payments;
