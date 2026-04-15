import Navbar from "@/components/Navbar";
import SubpageHero from "@/components/SubpageHero";
import ServiceStrip from "@/components/ServiceStrip";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const features = [
  "On-site receptionist to coordinate document pick-up and drop off",
  "Client payments can be coordinated with receptionist",
  "On-site receptionist to answer your business phone",
  "Reception lobby",
  "Voice mail (retrievable from any location)",
  "Copy and fax services",
  "On-site high speed wireless and direct Internet connections",
  "Conference room",
  "Utilities included",
  "Parking included",
  "24 hour access",
  "Mail services",
];

const FullTimeOffices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ServiceStrip />
      <SubpageHero />

      {/* Hero */}
      <section className="bg-background py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-xs font-semibold tracking-wider uppercase text-secondary">Services</span>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground leading-tight">
              Full Service Offices
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our Full Service Offices are ideal for independent business owners looking for quality, affordable, well located offices with reception and telephone answering services included.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button variant="cta" size="lg" asChild>
                <a href="https://eastcountybiz.com/full-service-offices/#checkout">
                  Get Started <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </Button>
              <Button variant="ctaOutline" size="lg" asChild>
                <a href="tel:+6194014000">Call (619) 401-4000</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-dark-surface py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-display font-bold text-dark-surface-foreground">More Than Just an Office</h2>
            <p className="text-dark-muted leading-relaxed">
              If the client wishes, our staff will work with them to promote their business. This service includes press releases, referral connections, scheduled events and more! We offer our clients far more than the normal landlord/tenant relationship.
            </p>
            <p className="text-dark-muted leading-relaxed">
              Our goal is to exceed our client's expectations creating successful businesses in an office environment that is professional, successful and fun!
            </p>
            <p className="text-dark-muted leading-relaxed">
              Our clients include consultants, counselors, brokers, attorneys, CPAs, tax preparers, corporate representatives, software developers, web site developers and a wide variety of professional independent entrepreneurs.
            </p>
          </div>
        </div>
      </section>

      {/* Features & Pricing */}
      <section className="bg-background py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <span className="text-xs font-semibold tracking-wider uppercase text-secondary">Features Included</span>
              <h2 className="text-3xl font-display font-bold text-foreground">Everything You Need</h2>
              <div className="space-y-4 pt-4">
                {features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-muted rounded-lg p-10 text-center space-y-4 sticky top-24">
              <p className="text-xs font-semibold tracking-wider uppercase text-secondary">Starting at</p>
              <p className="text-5xl font-display font-bold text-foreground">$450<span className="text-lg text-muted-foreground">/month</span></p>
              <p className="text-sm text-muted-foreground">Full service offices are available now.</p>
              <Button variant="cta" size="lg" asChild className="mt-4">
                <a href="https://eastcountybiz.com/full-service-offices/#checkout">
                  Get Started <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </Button>
              <p className="text-xs text-muted-foreground pt-2">
                Call Lee or John at (619) 401-4000 for availability, prices, and pictures.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FullTimeOffices;
