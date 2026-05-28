import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "East County Biz Center gave us a professional address and a quiet place to meet clients without the overhead of a full lease. It made our small business look established from day one.",
    name: "Jessica R.",
    title: "Marketing Consultant",
  },
  {
    quote: "I've been here for over five years. The team handles my mail, greets my visitors, and feels like an extension of my own company. I genuinely couldn't run my practice without them.",
    name: "Daniel M.",
    title: "Independent Attorney",
  },
  {
    quote: "The conference rooms are spotless and easy to book. Whenever I need to host a client meeting in San Diego, this is my first call. Highly recommended.",
    name: "Priya S.",
    title: "Real Estate Broker",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-muted py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-semibold tracking-wider uppercase text-secondary">Client Stories</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground leading-tight">
            Trusted by San Diego's small businesses
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="bg-background border border-border rounded-xl p-8 shadow-sm flex flex-col space-y-5"
            >
              <Quote className="h-7 w-7 text-secondary" />
              <blockquote className="text-foreground/90 leading-relaxed text-base flex-1">
                "{t.quote}"
              </blockquote>
              <figcaption>
                <p className="font-display font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
