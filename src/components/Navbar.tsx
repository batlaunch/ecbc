import { useState, useRef, useEffect } from "react";
import { Phone, Menu, X, Facebook, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const serviceItems = [
  { label: "Professional Business Address", href: "/services/business-address" },
  { label: "Virtual Business Address", href: "/services/business-address" },
  { label: "Part-Time Office Space", href: "/services/business-address" },
  { label: "Full-Time Offices", href: "/services/full-time-offices" },
  { label: "Conference Rooms", href: "/services/conference-rooms" },
];

const resourceItems = [
  { label: "General Biz Center Payments", href: "/resources/payments" },
  { label: "How to Use the Scheduler", href: "/resources/scheduler-guide" },
  { label: "FAQ's", href: "/resources/faqs" },
];

interface DropdownProps {
  label: string;
  items: { label: string; href: string }[];
  onClose?: () => void;
}

const NavDropdown = ({ label, items }: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-sm font-medium text-strip-bg hover:text-foreground transition-colors"
      >
        {label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-lg py-2 z-50">
          {items.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xs">EC</span>
          </div>
          <span className="font-display font-bold text-xl text-foreground tracking-tight">
            East County Biz
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavDropdown label="Services" items={serviceItems} />
          <NavDropdown label="Resources" items={resourceItems} />
          <Link
            to="/#about"
            className="text-sm font-medium text-strip-bg hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link
            to="/#contact"
            className="text-sm font-medium text-strip-bg hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Desktop right side */}
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+6194014000" className="flex items-center gap-2 text-sm text-strip-bg hover:text-foreground transition-colors">
            <Phone className="h-4 w-4" />
            <span>+1 (619) 401-4000</span>
          </a>
          <Button variant="cta" asChild>
            <a href="https://eastcountybiz.com/contact-us/">Contact us</a>
          </Button>
          <a href="https://www.facebook.com/ecbiz" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Facebook className="h-4 w-4" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 py-4 space-y-1">
          {/* Services accordion */}
          <button
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            className="w-full flex items-center justify-between text-sm font-medium text-muted-foreground hover:text-foreground py-3"
          >
            Services
            <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
          </button>
          {mobileServicesOpen && (
            <div className="pl-4 space-y-1">
              {serviceItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="block text-sm text-muted-foreground hover:text-foreground py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          {/* Resources accordion */}
          <button
            onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
            className="w-full flex items-center justify-between text-sm font-medium text-muted-foreground hover:text-foreground py-3"
          >
            Tenant & Client Resources
            <ChevronDown className={`h-4 w-4 transition-transform ${mobileResourcesOpen ? "rotate-180" : ""}`} />
          </button>
          {mobileResourcesOpen && (
            <div className="pl-4 space-y-1">
              {resourceItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="block text-sm text-muted-foreground hover:text-foreground py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          <Link to="/#about" className="block text-sm font-medium text-muted-foreground hover:text-foreground py-3" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="/#contact" className="block text-sm font-medium text-muted-foreground hover:text-foreground py-3" onClick={() => setIsOpen(false)}>
            Contact
          </Link>

          <a href="tel:+6194014000" className="block text-sm text-muted-foreground py-3">
            <Phone className="h-4 w-4 inline mr-2" />+1 (619) 401-4000
          </a>
          <Button variant="cta" className="w-full" asChild>
            <a href="https://eastcountybiz.com/contact-us/">Contact us</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
