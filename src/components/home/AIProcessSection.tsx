import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, Map, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Diagnose",
    description:
      "Map the workflow, tools, manual steps, data sources, and decision points that slow the business down.",
    accent: "from-primary/20 to-primary/5",
  },
  {
    icon: Map,
    step: "02",
    title: "Design",
    description:
      "Define the right technology stack, AI agents, automations, controls, and reporting layer for the use case.",
    accent: "from-primary/15 to-primary/5",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Prototype",
    description:
      "Build a working proof of value so you can test the workflow before committing to a full implementation.",
    accent: "from-primary/10 to-primary/5",
  },
];

export function AIProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden bg-background py-14 md:py-16">
      {/* Subtle floating accents */}
      <motion.div
        className="absolute top-12 right-[5%] h-56 w-56 rounded-full bg-primary/5 blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-container relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-8 max-w-3xl text-center"
        >
          <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            A Simple <span className="text-primary">Operating Model</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            The fastest path from business problem to useful AI or technology workflow.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid gap-5 md:grid-cols-3 lg:gap-6">
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
                <div className="absolute top-14 left-[60%] right-[-40%] hidden h-px bg-gradient-to-r from-border to-transparent md:block" />
              )}

              <div className="glass-card relative overflow-hidden p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30">
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

                <div className="relative z-10">
                  {/* Step Number */}
                  <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-primary/60">
                    Step {step.step}
                  </span>

                  {/* Icon */}
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:scale-105 group-hover:bg-primary/20">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="mb-2 text-2xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
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
