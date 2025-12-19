import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const partnerCategories = [
  {
    title: "Cloud & Infrastructure",
    partners: ["AWS", "Microsoft Azure", "Google Cloud", "IBM Cloud", "Oracle Cloud"],
  },
  {
    title: "Cybersecurity",
    partners: ["Palo Alto Networks", "CrowdStrike", "Fortinet", "Cisco Security", "SentinelOne"],
  },
  {
    title: "Networking",
    partners: ["Cisco", "Aruba", "Juniper", "Meraki", "Ubiquiti"],
  },
  {
    title: "Customer Experience",
    partners: ["Salesforce", "Zendesk", "RingCentral", "Five9", "Genesys"],
  },
  {
    title: "Managed Services",
    partners: ["ServiceNow", "ConnectWise", "Datto", "Kaseya", "NinjaRMM"],
  },
  {
    title: "AI & Analytics",
    partners: ["Databricks", "Snowflake", "Tableau", "Power BI", "OpenAI"],
  },
];

const Partners = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
        
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-up">
              Our <span className="text-primary">Partners</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-up delay-100">
              We've partnered with 200+ industry-leading technology providers to bring you the best solutions for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Network */}
      <section className="py-24 bg-card/50">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Partner <span className="text-primary">Network</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Access to the best technology providers across every category, ensuring you get the perfect solution for your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerCategories.map((category) => (
              <div key={category.title} className="glass-card p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4 pb-4 border-b border-border">
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.partners.map((partner) => (
                    <div
                      key={partner}
                      className="flex items-center gap-3 py-2 px-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                    >
                      <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
                        <span className="text-xs font-bold text-primary">
                          {partner.charAt(0)}
                        </span>
                      </div>
                      <span className="text-sm text-foreground">{partner}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-24 bg-background">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Our Partners <span className="text-primary">Trust Us</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">200+</div>
                <p className="text-muted-foreground">Technology Partners</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">$50M+</div>
                <p className="text-muted-foreground">Solutions Delivered</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <p className="text-muted-foreground">Vendor-Neutral</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card/50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Become a Partner
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Are you a technology provider looking to expand your reach? Let's discuss partnership opportunities.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact" className="gap-3">
                Partner With Us
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
