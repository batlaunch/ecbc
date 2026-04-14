import { Phone, MessageSquare, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactMethods = [
  { icon: Phone, label: "Call", value: "(619) 401-4000", href: "tel:+6194014000" },
  { icon: MessageSquare, label: "Text", value: "(619) 933-5738", href: "sms:+6199335738" },
  { icon: Mail, label: "Email", value: "info@eastcountybiz.com", href: "mailto:info@eastcountybiz.com" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="bg-muted py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <span className="text-xs font-semibold tracking-wider uppercase text-secondary">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground leading-tight">
            Call Us to Get Started
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Ready to elevate your business identity? Reach out to us today and discover the perfect office solution.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 pt-8">
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                className="bg-background rounded-lg p-6 border border-border hover:shadow-md transition-all group text-center"
              >
                <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <method.icon className="h-5 w-5 text-accent-foreground group-hover:text-primary-foreground transition-colors" />
                </div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{method.label}</p>
                <p className="font-semibold text-foreground text-sm">{method.value}</p>
              </a>
            ))}
          </div>

          <Button variant="cta" size="lg" asChild className="mt-4">
            <a href="https://eastcountybiz.com/contact-us/">
              Contact Us <ArrowRight className="h-4 w-4 ml-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
