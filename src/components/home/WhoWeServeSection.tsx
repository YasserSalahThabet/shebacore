import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Store, Briefcase } from "lucide-react";

const segments = [
  { icon: Building2, name: "Growing Businesses", description: "Teams that need better systems without adding operational complexity" },
  { icon: Briefcase, name: "Service Operators", description: "Consultancies, agencies, accountants, and professional service teams" },
  { icon: Store, name: "Multi-Location Teams", description: "Retail, hospitality, travel, and distributed teams that need consistency" },
];

export function WhoWeServeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-background pt-0 pb-14 md:pt-2 md:pb-16">
      <div className="section-container" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-8 max-w-3xl text-center"
        >
          <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Built for <span className="text-primary">Operational Teams</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            The best fit is a business with clear work to improve, automate, secure, or measure.
          </p>
        </motion.div>

        {/* Business Segments */}
        <div className="grid gap-5 md:grid-cols-3">
          {segments.map((segment, index) => (
            <motion.div
              key={segment.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card group p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:scale-105 group-hover:bg-primary/20">
                <segment.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">
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
