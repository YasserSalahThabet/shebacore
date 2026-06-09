import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Store } from "lucide-react";

const segments = [
  { icon: Building2, name: "Small & Medium Businesses", description: "Growing companies ready to scale" },
  { icon: Building2, name: "Enterprise Organizations", description: "Fortune 500 and large corporations" },
  { icon: Store, name: "Multi-Location Businesses", description: "Retail chains and franchises" },
];

export function WhoWeServeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="pt-8 pb-16 md:pt-12 md:pb-20 bg-background">
      <div className="section-container" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Who We <span className="text-primary">Serve</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From startups to enterprises, we deliver tailored technology solutions across diverse industries.
          </p>
        </motion.div>

        {/* Business Segments */}
        <div className="grid md:grid-cols-3 gap-5">
          {segments.map((segment, index) => (
            <motion.div
              key={segment.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 text-center group hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <segment.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {segment.name}
              </h3>
              <p className="text-muted-foreground">{segment.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
