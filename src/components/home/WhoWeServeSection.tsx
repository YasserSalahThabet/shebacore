import {
  Building2,
  Store,
  Truck,
  Stethoscope,
  Hotel,
  Landmark,
} from "lucide-react";

const segments = [
  { icon: Building2, name: "Small & Medium Businesses", description: "Growing companies ready to scale" },
  { icon: Building2, name: "Enterprise Organizations", description: "Fortune 500 and large corporations" },
  { icon: Store, name: "Multi-Location Businesses", description: "Retail chains and franchises" },
];

const industries = [
  { icon: Stethoscope, name: "Healthcare" },
  { icon: Store, name: "Retail" },
  { icon: Truck, name: "Logistics" },
  { icon: Hotel, name: "Hospitality" },
  { icon: Landmark, name: "Public Sector" },
];

export function WhoWeServeSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Who We <span className="text-primary">Serve</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From startups to enterprises, we deliver tailored technology solutions across diverse industries.
          </p>
        </div>

        {/* Business Segments */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {segments.map((segment) => (
            <div
              key={segment.name}
              className="glass-card p-8 text-center group hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <segment.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {segment.name}
              </h3>
              <p className="text-muted-foreground">{segment.description}</p>
            </div>
          ))}
        </div>

        {/* Industries */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-foreground mb-8">
            Industries We Specialize In
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="flex items-center gap-3 px-6 py-3 rounded-full bg-secondary/50 border border-border hover:border-primary/30 transition-colors"
              >
                <industry.icon className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">{industry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
