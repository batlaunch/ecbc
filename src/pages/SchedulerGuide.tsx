import Navbar from "@/components/Navbar";
import SubpageHero from "@/components/SubpageHero";
import ServiceStrip from "@/components/ServiceStrip";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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

      <section className="bg-background py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="text-center space-y-6">
              <span className="text-xs font-semibold tracking-wider uppercase text-secondary">Resources</span>
              <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground leading-tight">
                How to Use the Scheduler
              </h1>
              <p className="text-lg text-muted-foreground">
                Follow these instructions to access the scheduler for office space bookings.
              </p>
              <Button variant="cta" size="lg" asChild>
                <a href="https://scheduler.eastcountybiz.com/Web/" target="_blank" rel="noopener noreferrer">
                  Open Scheduler <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </Button>
            </div>

            <div className="space-y-8">
              {steps.map((s) => (
                <div key={s.step} className="flex gap-6 items-start">
                  <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <span className="text-primary-foreground font-bold text-lg">{s.step}</span>
                  </div>
                  <div className="space-y-2 pt-1">
                    <h3 className="text-lg font-display font-semibold text-foreground">{s.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SchedulerGuide;
