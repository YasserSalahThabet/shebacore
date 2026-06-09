import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  ShieldCheck,
  Cloud,
  Wifi,
  Headphones,
  Smartphone,
  Brain,
  Radio,
  ArrowRight,
  ArrowRightLeft,
  BarChart3,
  ShoppingCart,
} from "lucide-react";

const solutions = [
  {
    icon: Brain,
    title: "AI, Automation & Analytics",
    description: "AI agents, workflow automation, dashboards, and prototypes for high-impact use cases.",
    href: "/solutions#ai",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity & Compliance",
    description: "Security controls, monitoring, endpoint protection, and compliance readiness.",
    href: "/solutions#cybersecurity",
  },
  {
    icon: Cloud,
    title: "Cloud & Managed IT Services",
    description: "Cloud planning, migration, managed IT, backup, monitoring, and support.",
    href: "/solutions#cloud",
  },
  {
    icon: Wifi,
    title: "Advanced Networking & Managed Wi-Fi",
    description: "Reliable connectivity, SD-WAN, managed Wi-Fi, optimization, and network security.",
    href: "/solutions#networking",
  },
  {
    icon: Headphones,
    title: "Customer Experience",
    description: "Modern communication, contact center, CRM, and AI-powered customer support flows.",
    href: "/solutions#cx",
  },
  {
    icon: BarChart3,
    title: "Insights & Reporting",
    description: "Executive dashboards, KPI tracking, real-time analytics, and automated reporting.",
    href: "/solutions#insights",
  },
  {
    icon: ArrowRightLeft,
    title: "Migration & Onboarding",
    description: "Platform moves, data validation, training, documentation, and change support.",
    href: "/solutions#migration",
  },
  {
    icon: ShoppingCart,
    title: "eCommerce",
    description: "Payments, inventory, fulfillment, shipping, and customer journey optimization.",
    href: "/solutions#ecommerce",
  },
  {
    icon: Smartphone,
    title: "Mobility & Device Management",
    description: "MDM, mobile security, app management, BYOD, and remote-work enablement.",
    href: "/solutions#mobility",
  },
  {
    icon: Radio,
    title: "IoT & Smart Infrastructure",
    description: "Sensors, surveillance, access control, asset tracking, and smart building systems.",
    href: "/solutions#iot",
  },
];

export function SolutionsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="pt-8 pb-16 md:pt-12 md:pb-20 bg-card/50">
      <div className="section-container" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Capability <span className="text-primary">Modules</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Pick the module that matches the problem, then connect it into one practical roadmap.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link
                to={solution.href}
                className="glass-card p-5 group hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 block h-full"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <solution.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {solution.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                  {solution.description}
                </p>
                <div className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  View module <ArrowRight size={14} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
