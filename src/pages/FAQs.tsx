import { useState } from "react";
import Navbar from "@/components/Navbar";
import SubpageHero from "@/components/SubpageHero";
import ServiceStrip from "@/components/ServiceStrip";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import businessAddress from "@/assets/business-address.jpg";

const faqs = [
  {
    question: "What are dimensions for the name plate slots on the doors?",
    answer: "The door signs are 2\" X 10\". We often use El Cajon Print/Class A Trophies on Broadway in El Cajon. You can order your sign directly from them or we can order it and add it to your bill.",
  },
  {
    question: "When I start my part-time office next month, what will my phone number be?",
    answer: "We will issue you a number from our bank of phone numbers. You can then forward your current number or just use the number we issue you. Most of our clients like to transition over by forwarding their existing number for a while until their clients get used to using the new number. There are lots of options with the phone system. Email us or ask the receptionist if you have questions.",
  },
  {
    question: "Do I need to stop by and sign another contract to get started?",
    answer: "We will draft a new contract for you and email it over to you for review and signature.",
  },
  {
    question: "Does it take a few days to get set up, or can I start using rooms the same day?",
    answer: "You can start using the offices same day. We will have you in the system in a matter of hours (or less).",
  },
  {
    question: "Will I have a separate suite number?",
    answer: "Yes, you will have a suite number. We have found that Google My Business and other platforms now prefer a separate suite number for verification purposes.",
  },
  {
    question: "What services does East County Biz Center offer?",
    answer: "We offer professional business addresses, part-time and full-time office solutions, mail and package handling, a conference room, and a suite of tailored services to meet your business identity and office needs.",
  },
  {
    question: "How can I schedule a visit or book an office?",
    answer: "You can use our online Scheduler to book a visit or office time, call us at (619) 401-4000, text us at (619) 933-5738, or email us at info@eastcountybiz.com.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
                Frequently Asked Questions
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Answers to the questions we hear most often — from setup and phone numbers to scheduling, suite numbers, and everything in between.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button variant="cta" size="lg" asChild>
                  <a href="mailto:info@eastcountybiz.com">
                    Email Us <ArrowRight className="h-4 w-4 ml-1" />
                  </a>
                </Button>
                <Button variant="ctaOutline" size="lg" asChild>
                  <a href="tel:+6194014000"><Phone className="h-4 w-4" /> (619) 401-4000</a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={businessAddress}
                alt="East County Biz Center building entrance"
                className="w-full h-[420px] object-cover rounded-2xl shadow-xl"
                width={1200}
                height={840}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ accordion */}
      <section className="bg-muted py-20 lg:py-28 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <span className="text-xs font-semibold tracking-wider uppercase text-secondary">Common Questions</span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground leading-tight">
                Everything You Need to Know
              </h2>
            </div>

            <div className="divide-y divide-border bg-background rounded-2xl shadow-sm px-6 sm:px-8">
              {faqs.map((faq, index) => (
                <div key={index}>
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between py-6 text-left group"
                    aria-expanded={openIndex === index}
                  >
                    <span className="text-base font-medium text-foreground pr-8 group-hover:text-primary transition-colors">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-200 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openIndex === index && (
                    <div className="pb-6 pr-12">
                      <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Contact callout */}
            <div className="grid sm:grid-cols-3 gap-4 mt-12">
              <a href="tel:+6194014000" className="bg-background rounded-xl p-6 text-center space-y-2 hover:shadow-md transition-shadow">
                <Phone className="h-5 w-5 text-secondary mx-auto" />
                <p className="text-sm font-semibold text-foreground">Call</p>
                <p className="text-xs text-muted-foreground">(619) 401-4000</p>
              </a>
              <a href="mailto:info@eastcountybiz.com" className="bg-background rounded-xl p-6 text-center space-y-2 hover:shadow-md transition-shadow">
                <Mail className="h-5 w-5 text-secondary mx-auto" />
                <p className="text-sm font-semibold text-foreground">Email</p>
                <p className="text-xs text-muted-foreground">info@eastcountybiz.com</p>
              </a>
              <div className="bg-background rounded-xl p-6 text-center space-y-2">
                <MapPin className="h-5 w-5 text-secondary mx-auto" />
                <p className="text-sm font-semibold text-foreground">Visit</p>
                <p className="text-xs text-muted-foreground">East County, San Diego</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </div>
  );
};

export default FAQs;
