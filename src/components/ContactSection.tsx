import { Phone, MessageSquare, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactMethods = [
  {
    icon: Phone,
    label: "Call",
    value: "(619) 401-4000",
    href: "tel:+6194014000",
  },
  {
    icon: MessageSquare,
    label: "Text",
    value: "(619) 933-5738",
    href: "sms:+6199335738",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@eastcountybiz.com",
    href: "mailto:info@eastcountybiz.com",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Gradient bg */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)", opacity: 0.95 }} />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-foreground">
            Call Us to Get Started
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Ready to elevate your business identity? Reach out to us today and discover the perfect office solution.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300 group"
              >
                <method.icon className="h-8 w-8 text-secondary mx-auto mb-3" />
                <p className="text-sm text-primary-foreground/60 mb-1">{method.label}</p>
                <p className="text-primary-foreground font-semibold">{method.value}</p>
              </a>
            ))}
          </div>

          <Button variant="heroCta" size="lg" asChild className="mt-8">
            <a href="https://eastcountybiz.com/contact-us/">Contact Us</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
