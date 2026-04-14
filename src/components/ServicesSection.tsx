import { MapPin, Clock, Building2, Mail } from "lucide-react";

const services = [
  {
    icon: MapPin,
    title: "Business Address",
    description: "Establish a prestigious professional business address in San Diego's East County to elevate your brand identity.",
  },
  {
    icon: Clock,
    title: "Part-Time Offices",
    description: "Flexible part-time office solutions perfect for entrepreneurs who need professional space on their schedule.",
  },
  {
    icon: Building2,
    title: "Full-Time Offices",
    description: "Dedicated full-time office spaces with all the amenities you need to run your business effectively.",
  },
  {
    icon: Mail,
    title: "Mail & Package Handling",
    description: "Secure mail receiving and package handling services to keep your business running smoothly.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-accent/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
            Everything You Need for Your Business
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive office solutions tailored to meet the needs of modern businesses.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card rounded-2xl p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-all duration-300 hover:-translate-y-1 border border-border/50 group"
            >
              <div className="h-14 w-14 rounded-xl bg-accent flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <service.icon className="h-7 w-7 text-accent-foreground group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
