import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import ctaImage from "@/assets/cta-banner.jpg";

const CtaBanner = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <img
        src={ctaImage}
        alt="San Diego skyline at golden hour"
        loading="lazy"
        width={1920}
        height={800}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 to-foreground/65" />

      <div className="relative container mx-auto px-4 py-20 lg:py-28">
        <div className="max-w-2xl space-y-6 text-background">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight">
            Ready to elevate your business presence?
          </h2>
          <p className="text-lg text-background/85 leading-relaxed">
            Talk with our team about the office solution that fits your business — no pressure, just clear answers.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button variant="cta" size="lg" asChild>
              <a href="https://eastcountybiz.com/contact-us/">
                Contact Us <ArrowRight className="h-4 w-4 ml-1" />
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
    </section>
  );
};

export default CtaBanner;
