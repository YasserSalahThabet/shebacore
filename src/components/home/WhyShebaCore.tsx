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
    <section className="relative overflow-hidden bg-background pt-6 pb-8 md:pt-8 md:pb-10">
      {/* Background Glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-container relative z-10" ref={ref}>
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Why <span className="text-primary">ShebaCore?</span>
            </h2>
            <p className="mb-6 text-lg text-muted-foreground">
              We combine the clarity of a SaaS operating model with the flexibility of vendor-neutral technology delivery.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="group flex gap-4"
                >
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-foreground">
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
            className="glass-card p-5 md:p-6"
          >
            <div className="grid grid-cols-2 gap-4">
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
                  className="rounded-xl bg-secondary/50 p-4 text-center"
                >
                  <div className="mb-1.5 text-3xl font-bold text-primary md:text-4xl">
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
