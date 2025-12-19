import { Shield, Globe, Zap } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Vendor-Neutral Partner",
    description:
      "We work with 200+ leading technology providers to find the perfect fit for your business — no bias, just the best solutions.",
  },
  {
    icon: Globe,
    title: "One Point of Contact",
    description:
      "Eliminate vendor sprawl. We become your single trusted advisor for all technology decisions and implementations.",
  },
  {
    icon: Zap,
    title: "Zero-Cost Consulting",
    description:
      "Our expertise comes at no upfront cost to you. We're compensated by providers, ensuring aligned interests.",
  },
];

export function WhatWeDoSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What We <span className="text-primary">Do</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            ShebaCore is a US-based technology solutions and brokerage firm that helps businesses design, source, and implement the right technology stack — with expertise, not complexity.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-card p-8 group hover:border-primary/30 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
