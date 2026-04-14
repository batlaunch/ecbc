import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services does East County Biz Center offer?",
    answer: "We offer professional business addresses, part-time and full-time office solutions, mail and package handling, and a suite of tailored services to meet your business identity and office needs.",
  },
  {
    question: "How long has East County Biz Center been in business?",
    answer: "With over two decades of dedicated support to local entrepreneurs and business owners, we have become San Diego's trusted destination for personalized office solutions.",
  },
  {
    question: "How can I schedule a visit or book an office?",
    answer: "You can use our online Scheduler to book a visit or office time, call us at (619) 401-4000, text us at (619) 933-5738, or email us at info@eastcountybiz.com.",
  },
  {
    question: "Do you offer flexible office arrangements?",
    answer: "Yes! We offer both part-time and full-time office solutions. Our flexible arrangements adapt easily as your business evolves, from a simple business address to a dedicated office space.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-12">
            Frequently asked questions
          </h2>

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
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
