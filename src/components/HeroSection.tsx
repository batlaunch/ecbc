import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-office.jpg";

const HeroSection = () => {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-display font-bold text-foreground leading-[1.1] tracking-tight">
              Office Solutions in San Diego
            </h1>

            <div className="flex items-center gap-3">
              <span className="px-3 py-1 text-xs font-semibold tracking-wider uppercase border border-border rounded-sm text-muted-foreground">
                20+ Years
              </span>
              <span className="text-muted-foreground text-sm">
                Trusted office solutions in East County
              </span>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Professional business addresses, part time office solutions, and full time offices to meet your business identity and office needs.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button variant="cta" size="lg" asChild>
                <a href="https://eastcountybiz.com/contact-us/">
                  Contact Us <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </Button>
              <Button variant="ctaOutline" size="lg" asChild>
                <a href="tel:+6194014000">
                  <span>+1 (619) 401-4000</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative">
            <img
              src={heroImage}
              alt="East County Business Center office building"
              className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg"
              width={1920}
              height={1080}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
