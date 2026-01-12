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
    description: "Protect your business with enterprise-grade security solutions that safeguard your data, ensure compliance, and give you peace of mind.",
    features: [
      "Threat detection & response",
      "Security assessments & audits",
      "Compliance management (HIPAA, PCI, SOC2)",
      "Identity & access management",
      "Endpoint protection",
      "Security awareness training",
    ],
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud & Managed IT Services",
    description: "Scale your infrastructure with confidence. From cloud migration to fully managed IT, we've got you covered.",
    features: [
      "Cloud migration & optimization",
      "Infrastructure as a Service (IaaS)",
      "Managed IT services",
      "Disaster recovery & backup",
      "DevOps & automation",
      "24/7 monitoring & support",
    ],
  },
  {
    id: "networking",
    icon: Wifi,
    title: "Advanced Networking & Managed Wi-Fi",
    description: "Build reliable, high-performance networks that keep your business connected and productive.",
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
    description: "Elevate every customer interaction with modern communication and engagement solutions.",
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
    description: "Empower your mobile workforce with secure, managed device solutions that boost productivity.",
    features: [
      "Mobile device management (MDM)",
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
    description: "Unlock the power of your data with AI-driven insights and intelligent automation.",
    features: [
      "Business intelligence",
      "Predictive analytics",
      "Process automation",
      "Machine learning solutions",
      "Data visualization",
      "AI chatbots & assistants",
    ],
  },
  {
    id: "iot",
    icon: Radio,
    title: "IoT, Surveillance & Smart Infrastructure",
    description: "Connect your physical world with intelligent IoT solutions and smart building technology.",
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
    description: "Seamlessly transition to new platforms with expert-led migrations and structured onboarding programs.",
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
    description: "Turn data into action with dashboards, analytics, and custom reporting tailored to your business.",
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
    description: "Launch and scale your online store with integrated payment, inventory, and fulfillment solutions.",
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
      <section className="pt-32 pb-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
        
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-up">
              Our <span className="text-primary">Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-up delay-100">
              Comprehensive technology solutions tailored to your business needs. From cybersecurity to AI, we connect you with the best providers.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions List */}
      <section className="py-24 bg-card/50">
        <div className="section-container">
          <div className="space-y-24">
            {solutions.map((solution, index) => (
              <div
                key={solution.id}
                id={solution.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <solution.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      {solution.title}
                    </h2>
                  </div>
                  <p className="text-lg text-muted-foreground mb-8">
                    {solution.description}
                  </p>
                  <Button variant="hero" asChild>
                    <Link to="/contact" className="gap-2">
                      Learn More
                      <ArrowRight size={18} />
                    </Link>
                  </Button>
                </div>
                <div className={`glass-card p-8 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h3 className="text-lg font-semibold text-foreground mb-6">
                    What's Included
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
      <section className="py-24 bg-background">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Not Sure Which Solution is Right?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our experts will help you identify the perfect technology stack for your unique needs — completely free of charge.
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
