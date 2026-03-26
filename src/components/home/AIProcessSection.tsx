import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, Map, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Analyze",
    description:
      "Deep dive into your existing data infrastructure to uncover insights and opportunities.",
    accent: "from-primary/20 to-primary/5",
  },
  {
    icon: Map,
    step: "02",
    title: "Map",
    description:
      "Comprehensive mapping of your workflows to pinpoint where AI delivers maximum impact.",
    accent: "from-primary/15 to-primary/5",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Prototype",
    description:
      "Working prototype demonstrating exactly how AI will work in your business — ready in 7–14 days.",
    accent: "from-primary/10 to-primary/5",
  },
];

export function AIProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Subtle floating accents */}
      <motion.div
        className="absolute top-20 right-[5%] w-64 h-64 rounded-full bg-primary/5 blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-container relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How We <span className="text-primary">Transform</span> Your Business
          </h2>
          <p className="text-lg text-muted-foreground">
            A clear, results-driven process that turns your data into competitive advantage.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              {/* Connection line (desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] right-[-40%] h-px bg-gradient-to-r from-border to-transparent" />
              )}

              <div className="glass-card p-8 lg:p-10 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  {/* Step Number */}
                  <span className="text-xs font-bold tracking-[0.2em] text-primary/60 uppercase mb-4 block">
                    Step {step.step}
                  </span>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
