import Navbar from "@/components/Navbar";
import SubpageHero from "@/components/SubpageHero";
import ServiceStrip from "@/components/ServiceStrip";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Briefcase, Phone, Users } from "lucide-react";
import officeInterior from "@/assets/office-interior.jpg";

const values = [
  { icon: Briefcase, title: "Professional Office", body: "A fully furnished, private office in a prestigious building with lobby directory listing." },
  { icon: Phone, title: "Reception & Phone", body: "On-site receptionist answers your business phone and coordinates client visits." },
  { icon: Users, title: "Conference Room", body: "Access to our large conference room for client presentations, meetings, and seminars." },
];

const benefits = [
  { title: "On-Site Receptionist", desc: "Our professional staff greets your clients, coordinates document pick-up and drop-off, and can even collect client payments on your behalf." },
  { title: "Business Phone Answering", desc: "A dedicated receptionist answers your business line, takes messages, and routes calls — so you never miss an opportunity." },
  { title: "Client Meeting Space", desc: "Impress visitors with a professional reception lobby and access to our fully equipped conference room for meetings and presentations." },
  { title: "Everything Included", desc: "Utilities, parking, high-speed internet, copy and fax services, and voice mail — all bundled into one predictable monthly rate." },
  { title: "24/7 Building Access", desc: "Work on your own schedule with secure round-the-clock access to your office and the building." },
  { title: "A Community That Cares", desc: "We go beyond the typical landlord relationship, helping promote your business through press releases, referrals, and networking events." },
];

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

      {/* Intro: side-by-side image + text */}
      <section className="bg-background py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <span className="text-xs font-semibold tracking-wider uppercase text-secondary">Services</span>
              <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground leading-tight">
                Full Service Offices
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ideal for independent business owners looking for quality, affordable, well-located offices with reception and telephone answering services included.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
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
            <div className="relative">
              <img
                src={officeInterior}
                alt="Professional full-time office interior"
                className="w-full h-[420px] object-cover rounded-2xl shadow-xl"
                width={1200}
                height={840}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3-icon values strip */}
      <section className="bg-muted py-16 lg:py-20 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {values.map(({ icon: Icon, title, body }) => (
              <div key={title} className="text-center space-y-3">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Full Service Offices */}
      <section className="bg-dark-surface py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-dark-surface-foreground mb-6 text-center">
            More Than Just an Office
          </h2>
          <p className="text-dark-surface-foreground/70 text-center mb-16 max-w-2xl mx-auto">
            Our goal is to exceed your expectations, creating a professional, successful, and fun environment for your business to thrive.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((b) => (
              <div key={b.title} className="space-y-3">
                <h3 className="text-lg font-display font-semibold text-dark-surface-foreground">{b.title}</h3>
                <p className="text-dark-surface-foreground/70 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features + Pricing */}
      <section className="bg-background py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            <div className="space-y-6">
              <span className="text-xs font-semibold tracking-wider uppercase text-secondary">Features Included</span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground leading-tight">
                Everything You Need
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
            <div className="bg-muted rounded-2xl p-10 text-center space-y-4 shadow-lg sticky top-24">
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

      <CtaBanner />
      <Footer />
    </div>
  );
};

export default FullTimeOffices;
