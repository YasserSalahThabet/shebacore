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
    icon: ShieldCheck,
    title: "Cybersecurity & Compliance",
    description: "Protect your business with enterprise-grade security, threat detection, and regulatory compliance solutions.",
    href: "/solutions#cybersecurity",
  },
  {
    icon: Cloud,
    title: "Cloud & Managed IT Services",
    description: "Scale effortlessly with cloud infrastructure, managed services, and IT operations support.",
    href: "/solutions#cloud",
  },
  {
    icon: Wifi,
    title: "Advanced Networking & Managed Wi-Fi",
    description: "Build reliable, high-performance networks with SD-WAN, managed Wi-Fi, and connectivity solutions.",
    href: "/solutions#networking",
  },
  {
    icon: Headphones,
    title: "Customer Experience",
    description: "Elevate customer interactions with VoIP, contact centers, CRM integrations, and omnichannel solutions.",
    href: "/solutions#cx",
  },
  {
    icon: Smartphone,
    title: "Mobility & Device Management",
    description: "Enable your mobile workforce with MDM, EMM, and secure device management solutions.",
    href: "/solutions#mobility",
  },
  {
    icon: Brain,
    title: "AI, Automation & Analytics",
    description: "Unlock insights and efficiency with AI-powered automation, data analytics, and machine learning.",
    href: "/solutions#ai",
  },
  {
    icon: Radio,
    title: "IoT & Smart Infrastructure",
    description: "Connect your physical assets with IoT sensors, surveillance systems, and smart building technology.",
    href: "/solutions#iot",
  },
  {
    icon: ArrowRightLeft,
    title: "Migration & Onboarding",
    description: "Seamlessly transition to new platforms with expert-led migrations and structured onboarding programs.",
    href: "/solutions#migration",
  },
  {
    icon: BarChart3,
    title: "Insights & Reporting",
    description: "Turn data into action with dashboards, analytics, and custom reporting tailored to your business.",
    href: "/solutions#insights",
  },
  {
    icon: ShoppingCart,
    title: "eCommerce",
    description: "Launch and scale your online store with integrated payment, inventory, and fulfillment solutions.",
    href: "/solutions#ecommerce",
  },
];

export function SolutionsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 md:py-32 bg-card/50">
      <div className="section-container" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Solutions We <span className="text-primary">Offer</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From cybersecurity to AI, we provide access to best-in-class technology solutions tailored to your business needs.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link
                to={solution.href}
                className="glass-card p-6 group hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 block h-full"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <solution.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {solution.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {solution.description}
                </p>
                <div className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight size={14} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
