import Navbar from "@/components/Navbar";
import SubpageHero from "@/components/SubpageHero";
import ServiceStrip from "@/components/ServiceStrip";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, UserPlus, CheckCircle2 } from "lucide-react";
import subpageHero from "@/assets/subpage-hero.jpg";

const values = [
  { icon: UserPlus, title: "Quick Sign-Up", body: "Create your scheduler account in minutes — username, password, and a few profile details." },
  { icon: Calendar, title: "Book Anytime", body: "Reserve offices and the conference room online 24/7, on your schedule." },
  { icon: CheckCircle2, title: "Confirmed Bookings", body: "Our receptionist reviews reservations the next morning to confirm there are no conflicts." },
];

const steps = [
  { step: "1", title: "Access the Scheduler", desc: "Click the Scheduler button or visit scheduler.eastcountybiz.com to get started." },
  { step: "2", title: "Create an Account", desc: "If this is your first time, click 'Create Account' and follow the prompts. Pick a username, enter a password, set your default home page to 'Schedule', and fill in your profile details (name, email, timezone)." },
  { step: "3", title: "Log In", desc: "If you already have an account, enter your username and password to log in." },
  { step: "4", title: "Make a Booking", desc: "Select the 'Schedule' tab, then 'Bookings' from the dropdown. Select the day and office/conference room, click on your start time, fill in your stop time, and click the green 'Create' button." },
  { step: "5", title: "Confirmation", desc: "The system will pop up a reservation confirmation number. The receptionist will review reservations the next morning to confirm there are no conflicts." },
];

const SchedulerGuide = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ServiceStrip />
      <SubpageHero />

      {/* Intro: side-by-side text + image */}
      <section className="bg-background py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <span className="text-xs font-semibold tracking-wider uppercase text-secondary">Resources</span>
              <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground leading-tight">
                How to Use the Scheduler
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Follow these simple instructions to access the scheduler and book office space or the conference room online, anytime.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button variant="cta" size="lg" asChild>
                  <a href="https://scheduler.eastcountybiz.com/Web/" target="_blank" rel="noopener noreferrer">
                    Open Scheduler <ArrowRight className="h-4 w-4 ml-1" />
                  </a>
                </Button>
                <Button variant="ctaOutline" size="lg" asChild>
                  <a href="tel:+6194014000">Need Help? Call Us</a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={subpageHero}
                alt="Booking and scheduling at East County Biz Center"
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

      {/* Step-by-step */}
      <section className="bg-dark-surface py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-dark-surface-foreground">
              Five Steps to Your First Booking
            </h2>
            <p className="text-dark-surface-foreground/70">
              From account creation to confirmation, here's exactly what to expect.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-8">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-6 items-start">
                <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <span className="text-secondary-foreground font-bold text-lg">{s.step}</span>
                </div>
                <div className="space-y-2 pt-1">
                  <h3 className="text-lg font-display font-semibold text-dark-surface-foreground">{s.title}</h3>
                  <p className="text-dark-surface-foreground/70 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </div>
  );
};

export default SchedulerGuide;
