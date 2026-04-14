import Navbar from "@/components/Navbar";
import ServiceStrip from "@/components/ServiceStrip";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const largePricing = [
  { duration: "1 Hour", price: "$40.00/hour", features: ["Full hour reservation", "Seats 8 around table", "Additional room seating", "Overhead projector available", "Large monitor available"] },
  { duration: "2 Hours", price: "$80.00", features: ["Full 2-hour block", "Seats 8 around table", "Additional room seating", "Overhead projector available", "Large monitor available"] },
  { duration: "Half Day", price: "$100.00", features: ["Full 4-hour half day", "Seats 8 around table", "Additional room seating", "Overhead projector available", "Large monitor available"] },
  { duration: "Full Day", price: "$150.00/day", features: ["Full 8-hour day", "Seats 8 around table", "Additional room seating", "Overhead projector available", "Large monitor available"] },
];

const smallPricing = [
  { duration: "1 Hour", price: "$20.00/hour" },
  { duration: "2 Hours", price: "$40.00" },
  { duration: "Half Day", price: "$50.00" },
  { duration: "Full Day", price: "$75.00/day" },
];

const ConferenceRooms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ServiceStrip />

      {/* Hero */}
      <section className="bg-background py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-xs font-semibold tracking-wider uppercase text-secondary">Services</span>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground leading-tight">
              Conference Rooms
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Different meeting rooms to meet your needs. Each meeting room includes telephone service and internet. Our conference rooms offer a variety of seating and room spaces.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button variant="cta" size="lg" asChild>
                <a href="https://eastcountybiz.com/conference-rooms/#checkout">
                  Reserve Now <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </Button>
              <Button variant="ctaOutline" size="lg" asChild>
                <a href="tel:+6194014000">Call for Availability</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Large Conference Room */}
      <section className="bg-dark-surface py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-display font-bold text-dark-surface-foreground">Large Conference Room</h2>
            <p className="text-dark-muted leading-relaxed">
              This room has 8 chairs around the table and there is room for an additional 20 chairs. We have monitors, overhead projectors and audio systems for PowerPoint or online presentations. This room can also be used for seminars or training classes.
            </p>
            <p className="text-dark-muted text-sm">
              Reservations should be made in advance and payment must be received at least 48 hours prior to the event.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
              {largePricing.map((plan) => (
                <div key={plan.duration} className="bg-dark-surface-foreground/5 rounded-lg p-6 text-center space-y-3 border border-dark-surface-foreground/10">
                  <p className="font-display font-bold text-dark-surface-foreground">{plan.duration}</p>
                  <p className="text-2xl font-bold text-secondary">{plan.price}</p>
                  <ul className="text-xs text-dark-muted space-y-1">
                    {plan.features.map((f) => <li key={f}>{f}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Small Conference Rooms */}
      <section className="bg-background py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-display font-bold text-foreground">Small Conference Rooms</h2>
            <p className="text-muted-foreground leading-relaxed">
              Smaller, more intimate meeting spaces perfect for one-on-one meetings, small team discussions, or private calls.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {smallPricing.map((plan) => (
                <div key={plan.duration} className="bg-muted rounded-lg p-6 text-center space-y-3 border border-border">
                  <p className="font-display font-bold text-foreground">{plan.duration}</p>
                  <p className="text-2xl font-bold text-secondary">{plan.price}</p>
                </div>
              ))}
            </div>
            <div className="text-center pt-4">
              <Button variant="cta" size="lg" asChild>
                <a href="https://eastcountybiz.com/conference-rooms/#checkout">
                  Reserve a Room <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConferenceRooms;
