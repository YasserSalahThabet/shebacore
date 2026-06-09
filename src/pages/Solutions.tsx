import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  Cloud,
  Wifi,
  Headphones,
  Smartphone,
  Brain,
  Radio,
  ArrowRight,
  Check,
  ArrowRightLeft,
  BarChart3,
  ShoppingCart,
} from "lucide-react";

const solutions = [
  {
    id: "cybersecurity",
    icon: ShieldCheck,
    title: "Cybersecurity & Compliance",
    description: "Protect your business with security controls, monitoring, and compliance guidance that fit your risk profile.",
    features: [
      "Threat detection & response",
      "Security assessments & audits",
      "Compliance readiness",
      "Identity & access management",
      "Endpoint protection",
      "Security awareness training",
    ],
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud & Managed IT Services",
    description: "Modernize infrastructure, reduce operational drag, and keep systems supported as your business grows.",
    features: [
      "Cloud migration & optimization",
      "Infrastructure planning",
      "Managed IT services",
      "Backup & disaster recovery",
      "DevOps & automation",
      "Monitoring & support",
    ],
  },
  {
    id: "networking",
    icon: Wifi,
    title: "Advanced Networking & Managed Wi-Fi",
    description: "Design reliable networks that support daily operations, customer experience, and secure growth.",
    features: [
      "SD-WAN solutions",
      "Managed Wi-Fi services",
      "Network design & optimization",
      "Connectivity solutions",
      "Network security",
      "Performance monitoring",
    ],
  },
  {
    id: "cx",
    icon: Headphones,
    title: "Customer Experience",
    description: "Improve how customers reach you, how teams respond, and how service quality is tracked.",
    features: [
      "VoIP & UCaaS solutions",
      "Contact center platforms",
      "CRM integrations",
      "Omnichannel communication",
      "Customer analytics",
      "AI-powered support tools",
    ],
  },
  {
    id: "mobility",
    icon: Smartphone,
    title: "Mobility & Device Management",
    description: "Support mobile teams with secure device access, management, and remote-work readiness.",
    features: [
      "Mobile device management",
      "Enterprise mobility management",
      "BYOD solutions",
      "Mobile security",
      "App management",
      "Remote work enablement",
    ],
  },
  {
    id: "ai",
    icon: Brain,
    title: "AI, Automation & Data Analytics",
    description: "Turn business processes into smarter workflows with AI assistants, automation, and useful reporting.",
    features: [
      "Workflow automation",
      "AI assistants & chatbots",
      "Business intelligence",
      "Predictive analytics",
      "Data visualization",
      "Prototype development",
    ],
  },
  {
    id: "iot",
    icon: Radio,
    title: "IoT, Surveillance & Smart Infrastructure",
    description: "Connect physical locations, assets, and facilities with practical monitoring and smart infrastructure.",
    features: [
      "IoT sensor networks",
      "Video surveillance systems",
      "Smart building automation",
      "Asset tracking",
      "Environmental monitoring",
      "Access control systems",
    ],
  },
  {
    id: "migration",
    icon: ArrowRightLeft,
    title: "Migration & Onboarding",
    description: "Move to new platforms with less disruption through planning, validation, training, and support.",
    features: [
      "Platform migration planning",
      "Data migration & validation",
      "User onboarding programs",
      "Training & documentation",
      "Change management",
      "Post-migration support",
    ],
  },
  {
    id: "insights",
    icon: BarChart3,
    title: "Insights & Reporting",
    description: "Bring operational data into dashboards and reports that make decisions easier to act on.",
    features: [
      "Custom dashboards",
      "Real-time analytics",
      "Automated reporting",
      "KPI tracking",
      "Data visualization",
      "Executive summaries",
    ],
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: "eCommerce",
    description: "Build or improve online selling with stronger payments, inventory, fulfillment, and customer flows.",
    features: [
      "Platform selection & setup",
      "Payment gateway integration",
      "Inventory management",
      "Order fulfillment",
      "Shipping & logistics",
      "Customer experience optimization",
    ],
  },
];

const Solutions = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-28 pb-14 bg-background relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] bg-primary/5 rounded-full blur-3xl" />
        
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5 animate-fade-up">
              Our <span className="text-primary">Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-up delay-100">
              Practical technology, AI, security, and operations solutions selected around your business goals, budget, and timeline.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions List */}
      <section className="py-16 md:py-20 bg-card/50">
        <div className="section-container">
          <div className="space-y-16">
            {solutions.map((solution, index) => (
              <div
                key={solution.id}
                id={solution.id}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-10 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <solution.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      {solution.title}
                    </h2>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6">
                    {solution.description}
                  </p>
                  <Button variant="hero" asChild>
                    <Link to="/contact" className="gap-2">
                      Discuss This Solution
                      <ArrowRight size={18} />
                    </Link>
                  </Button>
                </div>
                <div className={`glass-card p-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h3 className="text-lg font-semibold text-foreground mb-5">
                    What’s Included
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {solution.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-background">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
              Not Sure Where to Start?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We’ll help you identify the highest-impact technology move, then map a practical prototype or implementation path.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact" className="gap-3">
                Schedule a Free Consultation
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Solutions;
