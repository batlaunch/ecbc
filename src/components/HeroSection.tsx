import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-office.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full">
      <div className="relative h-[560px] lg:h-[640px] w-full overflow-hidden">
        <img
          src={heroImage}
          alt="East County Business Center office building"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        {/* Dark overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />

        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl space-y-6 text-background">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase border border-background/40 rounded-sm text-background/90">
              Trusted in San Diego since 2000
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.05] tracking-tight">
              Office Solutions in San Diego
            </h1>
            <p className="text-lg lg:text-xl text-background/85 leading-relaxed max-w-xl">
              Professional business addresses, part-time office solutions, and full-time offices to elevate your business identity.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button variant="cta" size="lg" asChild>
                <a href="https://eastcountybiz.com/contact-us/">
                  Get Started <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </Button>
              <Button variant="ctaOutline" size="lg" asChild className="border-background text-background hover:bg-background hover:text-foreground">
                <a href="tel:+6194014000">
                  <Phone className="h-4 w-4" /> (619) 401-4000
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
