import Navbar from "@/components/Navbar";
import SubpageHero from "@/components/SubpageHero";
import ServiceStrip from "@/components/ServiceStrip";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import { Button } from "@/components/ui/button";
import { ArrowRight, CreditCard, ShieldCheck, Clock, Phone } from "lucide-react";
import officeInterior from "@/assets/office-interior.jpg";

const values = [
  { icon: ShieldCheck, title: "Secure Checkout", body: "All online payments are processed through a secure, encrypted payment portal." },
  { icon: Clock, title: "Pay Anytime", body: "Make payments 24/7 online, or by phone during business hours — whatever works best." },
  { icon: CreditCard, title: "Multiple Methods", body: "We accept all major credit cards (Visa, Mastercard, Amex) and PayPal." },
];

const methods = [
  { title: "Pay Online", desc: "Use our secure payment portal to pay your invoice with a credit card or PayPal in just a few clicks.", cta: "Pay Online", href: "https://eastcountybiz.com/general-biz-center-payments/", external: true },
  { title: "Pay by Phone", desc: "Call our office and a team member will walk you through a secure phone payment during business hours.", cta: "Call (619) 401-4000", href: "tel:+6194014000", external: false },
  { title: "Pay in Person", desc: "Stop by our East County, San Diego office and pay at the front desk during regular business hours.", cta: "Get Directions", href: "https://maps.google.com/?q=East+County+Biz+Center+San+Diego", external: true },
];

const Payments = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ServiceStrip />
      <SubpageHero />

      {/* Intro: side-by-side text + image */}
      <section className="bg-background py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <span className="text-xs font-semibold tracking-wider uppercase text-secondary">Resources</span>
              <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground leading-tight">
                General Biz Center Payments
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Make a payment for your East County Biz Center services online, by phone, or in person. Choose the option that works best for you.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button variant="cta" size="lg" asChild>
                  <a href="https://eastcountybiz.com/general-biz-center-payments/" target="_blank" rel="noopener noreferrer">
                    Make a Payment <ArrowRight className="h-4 w-4 ml-1" />
                  </a>
                </Button>
                <Button variant="ctaOutline" size="lg" asChild>
                  <a href="tel:+6194014000"><Phone className="h-4 w-4" /> (619) 401-4000</a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={officeInterior}
                alt="East County Biz Center office reception"
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

      {/* Ways to pay */}
      <section className="bg-dark-surface py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-dark-surface-foreground">
              Ways to Pay
            </h2>
            <p className="text-dark-surface-foreground/70">
              Pick the payment method that fits your day. We're happy to help with whichever you choose.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {methods.map((m) => (
              <div key={m.title} className="bg-dark-surface-foreground/5 rounded-2xl p-8 border border-dark-surface-foreground/10 flex flex-col gap-4">
                <h3 className="text-xl font-display font-semibold text-dark-surface-foreground">{m.title}</h3>
                <p className="text-dark-surface-foreground/70 text-sm leading-relaxed flex-1">{m.desc}</p>
                <Button variant="cta" size="lg" asChild className="mt-2 w-full">
                  <a href={m.href} {...(m.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                    {m.cta} <ArrowRight className="h-4 w-4 ml-1" />
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </div>
  );
};

export default Payments;
