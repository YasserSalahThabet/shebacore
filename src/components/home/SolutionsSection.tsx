import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  ShieldCheck,
  Cloud,
  Brain,
  ArrowRight,
  BarChart3,
} from "lucide-react";

const capabilities = [
  {
    icon: Brain,
    title: "AI & Automation",
    description: "Agents, workflow automation, dashboards, and prototypes for high-impact use cases.",
    href: "/solutions#ai",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description: "Security controls, endpoint protection, compliance readiness, and risk reduction.",
    href: "/solutions#cybersecurity",
  },
  {
    icon: Cloud,
    title: "Cloud & Managed IT",
    description: "Infrastructure planning, migration, monitoring, backup, and operational support.",
    href: "/solutions#cloud",
  },
  {
    icon: BarChart3,
    title: "Insights & Reporting",
    description: "Executive dashboards, KPI tracking, reporting workflows, and clearer decisions.",
    href: "/solutions#insights",
  },
];

const audiences = ["Healthcare", "Retail", "Hospitality", "Travel agencies", "Accountants", "Service operators"];

export function SolutionsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-card/50 py-14 md:py-16">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-8 max-w-3xl text-center"
        >
          <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Core <span className="text-primary">Capabilities</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Four practical lanes that turn scattered tools into one operating roadmap.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link
                to={capability.href}
                className="glass-card group block h-full p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
              >
                <div className="mb-3.5 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 transition-all duration-300 group-hover:bg-primary/20">
                  <capability.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                  {capability.title}
                </h3>
                <p className="mb-4 text-sm leading-6 text-muted-foreground">
                  {capability.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-primary">
                  View details <ArrowRight size={14} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground"
        >
          <span className="mr-1 text-foreground">Built for</span>
          {audiences.map((audience) => (
            <span key={audience} className="rounded-full border border-border/70 bg-background/50 px-3 py-1">
              {audience}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
