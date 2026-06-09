import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Bot, Workflow, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Workflow,
    title: "Workflow Mapping",
    description:
      "We turn messy manual processes into clear maps, priorities, and implementation steps.",
  },
  {
    icon: Bot,
    title: "AI Prototype Builds",
    description:
      "We build focused AI agents and automations that prove value before a larger rollout.",
  },
  {
    icon: ShieldCheck,
    title: "Technology Enablement",
    description:
      "We connect the right systems, security, cloud, and vendor ecosystem around the workflow.",
  },
];

export function WhatWeDoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-card/50 py-14 md:py-16">
      <div className="section-container" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-8 max-w-3xl text-center"
        >
          <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            What We <span className="text-primary">Build</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            ShebaCore helps teams move from scattered tools and manual work to smarter, measurable operating systems.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid gap-5 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card group p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:scale-105 group-hover:bg-primary/20">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">
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
