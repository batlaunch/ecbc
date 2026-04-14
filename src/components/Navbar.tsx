import { useState } from "react";
import { Phone, Menu, X, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-sm">
        <div className="container mx-auto flex items-center justify-between py-2 px-4">
          <a href="tel:+6194014000" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Phone className="h-3.5 w-3.5" />
            <span>+1 (619) 401-4000</span>
          </a>
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/ecbiz" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="sticky top-0 z-50 glass shadow-sm">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          <a href="#" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-lg">EC</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-heading font-bold text-foreground text-lg leading-tight block">East County</span>
              <span className="text-muted-foreground text-xs tracking-wider uppercase">Biz Center</span>
            </div>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button variant="hero" size="sm" asChild>
              <a href="https://eastcountybiz.com/contact-us/">Get Started</a>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-card px-4 py-4 space-y-3 animate-fade-in">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button variant="hero" size="sm" className="w-full" asChild>
              <a href="https://eastcountybiz.com/contact-us/">Get Started</a>
            </Button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
