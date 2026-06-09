import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";

const benefits = [
  {
    title: "Prototype Before You Commit",
    description: "Validate the workflow with a working proof of value before investing in a full rollout.",
  },
  {
    title: "AI + Infrastructure Thinking",
    description: "We connect automation ideas with the systems, data, security, and vendors needed to support them.",
  },
  {
    title: "Vendor-Neutral Roadmaps",
    description: "Recommendations are based on fit, budget, risk, and operational value, not a single vendor agenda.",
  },
  {
    title: "One Operating View",
    description: "The goal is not more tools. The goal is a clearer system your team can run and measure.",
  },
];

export function WhyShebaCore() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="pt-8 pb-16 md:pt-12 md:pb-20 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-container relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Why <span className="text-primary">ShebaCore?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We combine the clarity of a SaaS operating model with the flexibility of vendor-neutral technology delivery.
            </p>

            <div className="space-y-5">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-6 md:p-8"
          >
            <div className="grid grid-cols-2 gap-5">
              {[
                { value: "01", label: "Workflow Map" },
                { value: "02", label: "Technology Stack" },
                { value: "03", label: "AI Prototype" },
                { value: "04", label: "Rollout Plan" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="text-center p-5 rounded-xl bg-secondary/50"
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
