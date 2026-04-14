import officeInterior from "@/assets/office-interior.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div>
            <img
              src={officeInterior}
              alt="East County Biz Center interior workspace"
              className="w-full h-[400px] object-cover rounded-lg"
              loading="lazy"
              width={1280}
              height={854}
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <span className="text-xs font-semibold tracking-wider uppercase text-secondary">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground leading-tight">
              Solve Your Office Solutions
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              Discover how effortlessly you can acquire a prestigious business address and a suite of tailored services with East County Biz Center. With over two decades of dedicated support to local entrepreneurs and business owners, we have become San Diego's trusted destination for personalized office solutions.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              Take the next step towards enhancing your professional image and explore our exceptional facilities and resources.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
