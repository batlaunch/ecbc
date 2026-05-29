import Navbar from "@/components/Navbar";
import SubpageHero from "@/components/SubpageHero";
import ServiceStrip from "@/components/ServiceStrip";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import { Button } from "@/components/ui/button";
import { ArrowRight, Monitor, Wifi, Users } from "lucide-react";
import conferenceRoom from "@/assets/conference-room.jpg";

const largePricing = [
  { duration: "1 Hour", price: "$40.00/hour", features: ["Full hour reservation", "Seats 8 around table", "Additional room seating", "Overhead projector available", "Large monitor available"] },
  { duration: "2 Hours", price: "$80.00", features: ["Full 2-hour block", "Seats 8 around table", "Additional room seating", "Overhead projector available", "Large monitor available"] },
  { duration: "Half Day", price: "$100.00", features: ["Full 4-hour half day", "Seats 8 around table", "Additional room seating", "Overhead projector available", "Large monitor available"] },
  { duration: "Full Day", price: "$150.00/day", features: ["Full 8-hour day", "Seats 8 around table", "Additional room seating", "Overhead projector available", "Large monitor available"] },
];


const values = [
  { icon: Monitor, title: "Fully Equipped", body: "Overhead projectors, large monitors, and audio systems ready for any presentation." },
  { icon: Wifi, title: "Wired & Wireless", body: "Reliable high-speed internet and telephone service included with every reservation." },
  { icon: Users, title: "Flexible Seating", body: "From intimate 1-on-1 meetings to seminars seating 20+, we have a room that fits." },
];

const ConferenceRooms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ServiceStrip />
      <SubpageHero />

      {/* Intro: side-by-side image + text */}
      <section className="bg-background py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <span className="text-xs font-semibold tracking-wider uppercase text-secondary">Services</span>
              <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground leading-tight">
                Conference Rooms
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our large conference room is fully equipped for any presentation or meeting. Telephone service and high-speed internet are included with every reservation.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
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
            <div className="relative">
              <img
                src={conferenceRoom}
                alt="Modern conference room with seating for eight"
                className="w-full h-[420px] object-cover rounded-2xl shadow-xl"
                width={1200}
                height={840}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3-icon values strip */}
      <section className="bg-muted py-16 lg:py-20 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {values.map(({ icon: Icon, title, body }) => (
              <div key={title} className="text-center space-y-3">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Large Conference Room */}
      <section className="bg-dark-surface py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="space-y-4 max-w-3xl">
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-dark-surface-foreground">Large Conference Room</h2>
              <p className="text-dark-surface-foreground/80 leading-relaxed">
                This room has 8 chairs around the table and there is room for an additional 20 chairs. We have monitors, overhead projectors and audio systems for PowerPoint or online presentations. This room can also be used for seminars or training classes.
              </p>
              <p className="text-dark-surface-foreground/60 text-sm">
                Reservations should be made in advance and payment must be received at least 48 hours prior to the event.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
              {largePricing.map((plan) => (
                <div key={plan.duration} className="bg-dark-surface-foreground/5 rounded-lg p-6 text-center space-y-3 border border-dark-surface-foreground/10">
                  <p className="font-display font-bold text-dark-surface-foreground">{plan.duration}</p>
                  <p className="text-2xl font-bold text-secondary">{plan.price}</p>
                  <ul className="text-xs text-dark-surface-foreground/70 space-y-1">
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
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="space-y-4 max-w-3xl">
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">Small Conference Rooms</h2>
              <p className="text-muted-foreground leading-relaxed">
                Smaller, more intimate meeting spaces perfect for one-on-one meetings, small team discussions, or private calls.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {smallPricing.map((plan) => (
                <div key={plan.duration} className="bg-muted rounded-lg p-6 text-center space-y-3 border border-border">
                  <p className="font-display font-bold text-foreground">{plan.duration}</p>
                  <p className="text-2xl font-bold text-secondary">{plan.price}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="cta" size="lg" asChild>
                <a href="https://eastcountybiz.com/conference-rooms/#checkout">
                  Reserve a Room <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </Button>
              <Button variant="ctaOutline" size="lg" asChild>
                <a href="tel:+6194014000">Talk to Our Team</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </div>
  );
};

export default ConferenceRooms;
