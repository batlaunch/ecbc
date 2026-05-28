import { Facebook, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast({
      title: "Thanks for subscribing!",
      description: "We'll keep you posted on news and offers from East County Biz Center.",
    });
    setEmail("");
  };

  return (
    <footer className="bg-dark-surface text-dark-surface-foreground/60">
      {/* Newsletter top */}
      <div className="border-b border-dark-surface-foreground/10">
        <div className="container mx-auto px-4 py-14">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-dark-surface-foreground leading-tight">
                Stay in the loop
              </h3>
              <p className="text-dark-surface-foreground/70 text-base">
                Get occasional updates on new office space, events, and resources for San Diego entrepreneurs.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 lg:justify-end">
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="bg-dark-surface-foreground/10 border-dark-surface-foreground/20 text-dark-surface-foreground placeholder:text-dark-surface-foreground/50 h-12 sm:max-w-xs"
                aria-label="Email address"
              />
              <Button type="submit" variant="cta" size="lg">
                Subscribe <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xs">EC</span>
              </div>
              <span className="font-display font-bold text-dark-surface-foreground text-lg">
                East County Biz
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              San Diego's trusted destination for professional business identity and office solutions since 2000.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-dark-surface-foreground text-sm uppercase tracking-wider">Site Map</h4>
            <div className="space-y-2 text-sm">
              <Link to="/" className="block hover:text-dark-surface-foreground transition-colors">Home</Link>
              <Link to="/services/business-address" className="block hover:text-dark-surface-foreground transition-colors">Business Address</Link>
              <Link to="/services/full-time-offices" className="block hover:text-dark-surface-foreground transition-colors">Full-Time Offices</Link>
              <Link to="/services/conference-rooms" className="block hover:text-dark-surface-foreground transition-colors">Conference Rooms</Link>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-dark-surface-foreground text-sm uppercase tracking-wider">Resources</h4>
            <div className="space-y-2 text-sm">
              <a href="https://scheduler.eastcountybiz.com/Web/" className="block hover:text-dark-surface-foreground transition-colors">Scheduler</a>
              <a href="https://directory.eastcountybiz.com/" className="block hover:text-dark-surface-foreground transition-colors">Directory</a>
              <a href="https://eastcountybiz.com/my-account/" className="block hover:text-dark-surface-foreground transition-colors">My Account</a>
              <Link to="/resources/faqs" className="block hover:text-dark-surface-foreground transition-colors">FAQs</Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-dark-surface-foreground text-sm uppercase tracking-wider">Contact</h4>
            <div className="space-y-3 text-sm">
              <a href="tel:+6194014000" className="flex items-center gap-2 hover:text-dark-surface-foreground transition-colors">
                <Phone className="h-4 w-4 shrink-0" /> (619) 401-4000
              </a>
              <a href="mailto:info@eastcountybiz.com" className="flex items-center gap-2 hover:text-dark-surface-foreground transition-colors">
                <Mail className="h-4 w-4 shrink-0" /> info@eastcountybiz.com
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" /> East County, San Diego, CA
              </div>
            </div>
            <a href="https://www.facebook.com/ecbiz" target="_blank" rel="noopener noreferrer" className="inline-flex hover:text-dark-surface-foreground transition-colors mt-2">
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-dark-surface-foreground/10 mt-12 pt-8 text-center text-xs">
          © {new Date().getFullYear()} East County Business Center. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
