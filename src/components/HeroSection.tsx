import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-office.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="East County Business Center" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)", opacity: 0.88 }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-2xl space-y-8">
          <div className="space-y-2 animate-fade-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-medium backdrop-blur-sm border border-secondary/30">
              San Diego's Trusted Office Solutions
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Business Identity &<br />
            <span className="text-secondary">Office Solutions</span><br />
            for the New Economy
          </h1>

          <p className="text-lg text-primary-foreground/80 max-w-lg animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Professional business addresses, part time office solutions, and full time offices to meet your business identity and office needs.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="heroCta" size="lg" asChild>
              <a href="https://eastcountybiz.com/contact-us/">Give Us A Call</a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="https://eastcountybiz.com/contact-us/">Write Us</a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="https://scheduler.eastcountybiz.com/Web/">Scheduler</a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="https://directory.eastcountybiz.com/">Directory</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative shapes */}
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-secondary/20 blur-3xl" />
      <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-primary-foreground/5 blur-3xl" />
    </section>
  );
};

export default HeroSection;
