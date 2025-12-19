import { Search, PenTool, GitCompare, Rocket, Headset } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description: "We analyze your current technology stack, business goals, and pain points.",
  },
  {
    icon: PenTool,
    title: "Design",
    description: "Our experts craft a tailored solution architecture for your specific needs.",
  },
  {
    icon: GitCompare,
    title: "Compare",
    description: "We source quotes from multiple providers to ensure you get the best value.",
  },
  {
    icon: Rocket,
    title: "Implement",
    description: "We manage the entire deployment process, from procurement to go-live.",
  },
  {
    icon: Headset,
    title: "Support",
    description: "Ongoing support and optimization to ensure long-term success.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 md:py-32 bg-card/50">
      <div className="section-container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A simple, streamlined process that takes the complexity out of technology procurement.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
          <div className="hidden lg:block absolute top-1/2 left-0 h-0.5 bg-primary -translate-y-1/2 w-1/5 animate-[slideRight_2s_ease-out]" />

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center z-10">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="relative w-20 h-20 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300 z-10">
                  <step.icon className="w-8 h-8 text-primary" />
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-primary/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
