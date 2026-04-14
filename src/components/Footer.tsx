import { Facebook, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark-surface text-dark-surface-foreground/60 py-16">
      <div className="container mx-auto px-4">
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
            <h4 className="font-semibold text-dark-surface-foreground text-sm uppercase tracking-wider">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-dark-surface-foreground transition-colors">Home</a>
              <a href="#services" className="block hover:text-dark-surface-foreground transition-colors">Services</a>
              <a href="#about" className="block hover:text-dark-surface-foreground transition-colors">About</a>
              <a href="#contact" className="block hover:text-dark-surface-foreground transition-colors">Contact</a>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-dark-surface-foreground text-sm uppercase tracking-wider">Resources</h4>
            <div className="space-y-2 text-sm">
              <a href="https://scheduler.eastcountybiz.com/Web/" className="block hover:text-dark-surface-foreground transition-colors">Scheduler</a>
              <a href="https://directory.eastcountybiz.com/" className="block hover:text-dark-surface-foreground transition-colors">Directory</a>
              <a href="https://eastcountybiz.com/my-account/" className="block hover:text-dark-surface-foreground transition-colors">My Account</a>
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
