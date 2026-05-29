import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import businessAddressImg from "@/assets/business-address.jpg";
import officeInterior from "@/assets/office-interior.jpg";
import conferenceRoom from "@/assets/conference-room.jpg";

const services = [
  {
    image: businessAddressImg,
    title: "Business Address",
    description: "A prestigious San Diego address with professional mail handling, perfect for remote and home-based businesses.",
    primary: { label: "Learn More", href: "/services/business-address" },
    secondary: { label: "Contact Us", href: "https://eastcountybiz.com/contact-us/", external: true },
  },
  {
    image: officeInterior,
    title: "Full-Time Offices",
    description: "Private, fully-furnished offices with utilities, internet, and amenities included. Move in and get to work.",
    primary: { label: "View Offices", href: "/services/full-time-offices" },
    secondary: { label: "Tour the Space", href: "https://eastcountybiz.com/contact-us/", external: true },
  },
  {
    image: conferenceRoom,
    title: "Conference Room",
    description: "A professional meeting space for client presentations, team meetings, and seminars. Book by the hour or by the day.",
    primary: { label: "See Pricing", href: "/services/conference-rooms" },
    secondary: { label: "Reserve Now", href: "https://eastcountybiz.com/conference-rooms/#checkout", external: true },
  },
];

const ServicesGrid = () => {
  return (
    <section id="services" className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-semibold tracking-wider uppercase text-secondary">What We Offer</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground leading-tight">
            Solutions built for every stage of your business
          </h2>
          <p className="text-muted-foreground text-lg">
            From a professional address to a full private office — pick the level of presence that fits today, and scale when you're ready.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <article key={service.title} className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-1 space-y-4">
                <h3 className="text-xl font-display font-bold text-foreground">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Button variant="cta" size="sm" asChild>
                    <Link to={service.primary.href}>
                      {service.primary.label} <ArrowRight className="h-3.5 w-3.5 ml-0.5" />
                    </Link>
                  </Button>
                  <Button variant="ctaOutline" size="sm" asChild>
                    {service.secondary.external ? (
                      <a href={service.secondary.href}>{service.secondary.label}</a>
                    ) : (
                      <Link to={service.secondary.href}>{service.secondary.label}</Link>
                    )}
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
