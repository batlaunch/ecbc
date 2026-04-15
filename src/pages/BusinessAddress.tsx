import Navbar from "@/components/Navbar";
import SubpageHero from "@/components/SubpageHero";
import ServiceStrip from "@/components/ServiceStrip";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const benefits = [
  { title: "Elevate Your Image", desc: "Your business deserves to shine with professionalism. A professional business address is your ticket to instant credibility among customers and partners." },
  { title: "Safeguard Your Privacy", desc: "Keep your personal life separate from your business affairs. A dedicated business address ensures your safety and security." },
  { title: "Maximize Your Marketing Impact", desc: "Leverage a professional business address to boost your brand. Showcase it on your website, business cards, and marketing materials." },
  { title: "Streamlined Mail Handling", desc: "Efficiently manage your mail by choosing to have it forwarded to your desired location or even scanned and emailed directly to you." },
  { title: "Exclusive Meeting Spaces", desc: "Elevate your client interactions with access to private meeting spaces designed to impress." },
  { title: "Legal Compliance Made Simple", desc: "Some states mandate a physical address for business registration — and we've got you covered." },
  { title: "Networking Opportunities", desc: "A professional business address opens doors to valuable local networking opportunities." },
  { title: "Unmatched Flexibility", desc: "Enjoy the freedom to relocate without the hassle of updating your address." },
  { title: "Cost-Effective Excellence", desc: "More affordable and practical than renting dedicated office space." },
];

const features = [
  "Prestigious business address with seamless mail handling",
  "Prominent directory listing in the building lobby",
  "Reliable forwarding service",
  "Precision mail sorting and delivery notifications",
  "Scalability with address continuity",
  "24/7 access for your convenience",
  "Flexible month-to-month agreement",
  "Effortless, complimentary parking",
];

const BusinessAddress = () => {
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
              Professional Business Address
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Perfect for people who want to start a business or have a business that needs a business address with mailbox services.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button variant="cta" size="lg" asChild>
                <a href="https://eastcountybiz.com/business-address-mailbox-services/#checkout">
                  Sign Up Now <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </Button>
              <Button variant="ctaOutline" size="lg" asChild>
                <a href="tel:+6194014000">Call (619) 401-4000</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Get a Business Address */}
      <section className="bg-dark-surface py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-dark-surface-foreground mb-6 text-center">
            Why Get a Professional Business Address?
          </h2>
          <p className="text-dark-muted text-center mb-16 max-w-2xl mx-auto">
            Unlock the power of a professional business address at the East County Business Center.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="space-y-3">
                <h3 className="text-lg font-display font-semibold text-dark-surface-foreground">{b.title}</h3>
                <p className="text-dark-muted text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-background py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-xs font-semibold tracking-wider uppercase text-secondary">Features</span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground leading-tight">
                Exceptional Benefits of Our Business Address & Mailbox Service
              </h2>
              <div className="space-y-4 pt-4">
                {features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-muted rounded-lg p-10 text-center space-y-4">
              <p className="text-xs font-semibold tracking-wider uppercase text-secondary">Starting at</p>
              <p className="text-5xl font-display font-bold text-foreground">$45<span className="text-lg text-muted-foreground">/month</span></p>
              <p className="text-sm text-muted-foreground">A key deposit may be necessary depending on access details.</p>
              <Button variant="cta" size="lg" asChild className="mt-4">
                <a href="https://eastcountybiz.com/business-address-mailbox-services/#checkout">
                  Sign Up Now <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 text-center space-y-4">
          <h2 className="text-2xl font-display font-bold text-foreground">Location</h2>
          <p className="text-muted-foreground">East County Biz Center</p>
          <p className="text-muted-foreground">270 E Douglas Ave, El Cajon, CA 92020</p>
          <p className="text-muted-foreground">(619) 401-4000</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BusinessAddress;
