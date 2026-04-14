import officeInterior from "@/assets/office-interior.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-elevated)]">
              <img
                src={officeInterior}
                alt="East County Biz Center office space"
                className="w-full h-[450px] object-cover"
                loading="lazy"
                width={1280}
                height={854}
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-6 shadow-[var(--shadow-card)] border border-border">
              <p className="text-3xl font-heading font-bold text-primary">20+</p>
              <p className="text-sm text-muted-foreground">Years Serving<br/>San Diego</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <span className="text-sm font-semibold text-secondary uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
              Solve Your Office Solutions
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Discover how effortlessly you can acquire a prestigious business address and a suite of tailored services with East County Biz Center. With over two decades of dedicated support to local entrepreneurs and business owners, we have become San Diego's trusted destination for personalized office solutions.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Take the next step towards enhancing your professional image and explore our exceptional facilities and resources.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
