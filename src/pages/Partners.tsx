import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const partnerCategories = [
  {
    title: "Cloud & Infrastructure",
    capabilities: ["Cloud architecture", "Hosting", "Backup", "Monitoring", "Disaster recovery"],
  },
  {
    title: "Cybersecurity",
    capabilities: ["Endpoint security", "Threat response", "Identity", "Compliance", "Security awareness"],
  },
  {
    title: "Networking",
    capabilities: ["SD-WAN", "Managed Wi-Fi", "Connectivity", "Optimization", "Network security"],
  },
  {
    title: "Customer Experience",
    capabilities: ["VoIP", "Contact centers", "CRM", "Omnichannel", "Customer analytics"],
  },
  {
    title: "Operations & Managed Services",
    capabilities: ["IT support", "Automation", "Device management", "Documentation", "Service workflows"],
  },
  {
    title: "AI, Data & Analytics",
    capabilities: ["AI agents", "Dashboards", "Reporting", "Data workflows", "Prototype builds"],
  },
];

const Partners = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-28 pb-14 bg-background relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] bg-primary/5 rounded-full blur-3xl" />
        
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5 animate-fade-up">
              Technology <span className="text-primary">Ecosystem</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-up delay-100">
              ShebaCore stays vendor-neutral while helping clients choose the right providers, platforms, and implementation path for each workflow.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Network */}
      <section className="py-16 md:py-20 bg-card/50">
        <div className="section-container">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
              Ecosystem <span className="text-primary">Categories</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We evaluate providers by fit, risk, budget, integration needs, and long-term support, not by a fixed vendor list.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerCategories.map((category) => (
              <div key={category.title} className="glass-card p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4 pb-4 border-b border-border">
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.capabilities.map((capability) => (
                    <div
                      key={capability}
                      className="flex items-center gap-3 rounded-lg bg-secondary/30 px-3 py-2 transition-colors hover:bg-secondary/50"
                    >
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-sm text-foreground">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-16 md:py-20 bg-background">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
                How We <span className="text-primary">Select Providers</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass-card p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">01</div>
                <p className="font-semibold text-foreground mb-2">Fit</p>
                <p className="text-sm text-muted-foreground">The provider must match the workflow, team, and technical environment.</p>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">02</div>
                <p className="font-semibold text-foreground mb-2">Risk</p>
                <p className="text-sm text-muted-foreground">Security, compliance, support, and continuity matter before rollout.</p>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">03</div>
                <p className="font-semibold text-foreground mb-2">Value</p>
                <p className="text-sm text-muted-foreground">The solution should create measurable operational value, not extra tool sprawl.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-card/50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
              Need the Right Stack?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We can help compare providers and design a practical stack around your workflow.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact" className="gap-3">
                Discuss Your Stack
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Partners;
