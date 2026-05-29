import { MapPin, Clock, Building2, Mail, Calendar, BookOpen } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

type Service = {
  icon: typeof MapPin;
  label: string;
  to?: string;
  hash?: string;
  href?: string;
};

const services: Service[] = [
  { icon: MapPin, label: "Business Address", to: "/services/business-address" },
  { icon: Clock, label: "Conference Room", to: "/services/conference-rooms" },
  { icon: Building2, label: "Full-Time Offices", to: "/services/full-time-offices" },
  { icon: Mail, label: "Mail Handling", to: "/services/business-address", hash: "mail-handling" },
  { icon: Calendar, label: "Scheduler", href: "https://scheduler.eastcountybiz.com/Web/" },
  { icon: BookOpen, label: "Directory", href: "https://directory.eastcountybiz.com/" },
];

const ServiceStrip = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to hash target after navigation
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      // wait for paint
      const t = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
      return () => clearTimeout(t);
    }
  }, [location]);

  const handleHashClick = (e: React.MouseEvent, to: string, hash: string) => {
    e.preventDefault();
    if (location.pathname === to) {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate(`${to}#${hash}`);
    }
  };

  return (
    <div className="bg-strip overflow-x-auto">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-0 min-w-max">
          {services.map((service) => {
            const content = (
              <div className="flex flex-col items-center gap-2 px-6 py-4 text-strip-foreground/70 hover:text-strip-foreground hover:bg-strip-foreground/5 transition-colors cursor-pointer">
                <service.icon className="h-5 w-5" />
                <span className="text-xs font-medium whitespace-nowrap">{service.label}</span>
              </div>
            );

            if (service.href) {
              return (
                <a key={service.label} href={service.href} target="_blank" rel="noopener noreferrer">
                  {content}
                </a>
              );
            }
            if (service.hash && service.to) {
              return (
                <a
                  key={service.label}
                  href={`${service.to}#${service.hash}`}
                  onClick={(e) => handleHashClick(e, service.to!, service.hash!)}
                >
                  {content}
                </a>
              );
            }
            return (
              <Link key={service.label} to={service.to!}>
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceStrip;
