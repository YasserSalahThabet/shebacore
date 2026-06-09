import { useRef } from "react";
import { motion, useInView } from "framer-motion";
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
    title: "AI-First Approach",
    description:
      "We identify where AI and automation can drive the biggest impact, then build it — fast.",
  },
];

export function WhatWeDoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 md:py-24 bg-card/50">
      <div className="section-container" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What We <span className="text-primary">Do</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            ShebaCore is a US-based technology solutions firm operating in the Middle East, helping businesses design, source, and implement the right technology stack — with expertise, not complexity.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 group hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
