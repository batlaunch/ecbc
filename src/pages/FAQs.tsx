import { useState } from "react";
import Navbar from "@/components/Navbar";
import ServiceStrip from "@/components/ServiceStrip";
import Footer from "@/components/Footer";
import { ChevronDown } from "lucide-react";

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
    answer: "We offer professional business addresses, part-time and full-time office solutions, mail and package handling, conference rooms, and a suite of tailored services to meet your business identity and office needs.",
  },
  {
    question: "How can I schedule a visit or book an office?",
    answer: "You can use our online Scheduler to book a visit or office time, call us at (619) 401-4000, text us at (619) 933-5738, or email us at info@eastcountybiz.com.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ServiceStrip />

      <section className="bg-background py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <span className="text-xs font-semibold tracking-wider uppercase text-secondary">Resources</span>
              <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground leading-tight">
                Frequently Asked Questions
              </h1>
            </div>

            <div className="divide-y divide-border">
              {faqs.map((faq, index) => (
                <div key={index}>
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between py-6 text-left group"
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

            <div className="text-center pt-12">
              <p className="text-muted-foreground">More questions? Email us, call or stop by!</p>
              <p className="text-muted-foreground text-sm mt-2">
                <a href="mailto:info@eastcountybiz.com" className="text-primary hover:underline">info@eastcountybiz.com</a> · <a href="tel:+6194014000" className="text-primary hover:underline">(619) 401-4000</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQs;
