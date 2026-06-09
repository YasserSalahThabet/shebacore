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
            Built for <span className="text-primary">Operational Teams</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            The best fit is a business with clear work to improve, automate, secure, or measure.
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
