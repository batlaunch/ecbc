import { CheckSquare, Users, HeartHandshake, Network } from "lucide-react";

const features = [
  {
    icon: CheckSquare,
    title: "Designed for productivity",
    description: "Settle into a thoughtfully designed workspace that fosters focus and creativity. Every office is built to support your best work.",
  },
  {
    icon: Users,
    title: "Tailored for your needs",
    description: "Customize your office space to match your style and workflow. Flexible arrangements adapt easily as your business evolves.",
  },
  {
    icon: HeartHandshake,
    title: "Professional support",
    description: "Benefit from seamless support services, ensuring you can focus on the bigger picture. Our friendly team handles the details.",
  },
  {
    icon: Network,
    title: "Community & networking",
    description: "Join a vibrant community of professionals, with opportunities to connect, collaborate, and grow your business.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="services" className="bg-dark-surface py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-dark-surface-foreground mb-16 max-w-2xl leading-tight">
          Your private, inspiring workplace in East County
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature) => (
            <div key={feature.title} className="space-y-4">
              <div className="h-14 w-14 rounded-full bg-dark-surface-foreground/10 flex items-center justify-center">
                <feature.icon className="h-6 w-6 text-dark-surface-foreground" />
              </div>
              <h3 className="text-lg font-display font-semibold text-dark-surface-foreground">
                {feature.title}
              </h3>
              <p className="text-dark-surface-foreground/80 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
