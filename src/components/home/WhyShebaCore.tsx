import { Check } from "lucide-react";

const benefits = [
  {
    title: "Vendor-Neutral Recommendations",
    description: "Unbiased guidance from 200+ technology providers to find your perfect fit.",
  },
  {
    title: "No Upfront Cost to Clients",
    description: "Access expert consulting and solution design without any initial investment.",
  },
  {
    title: "Access to Top US & Global Providers",
    description: "Leverage our partnerships with industry-leading technology vendors worldwide.",
  },
  {
    title: "Scalable Solutions for SMB & Enterprise",
    description: "Whether you're a startup or Fortune 500, we design solutions that grow with you.",
  },
  {
    title: "Trusted Advisor Model",
    description: "We act as your long-term technology partner, not just a one-time vendor.",
  },
];

export function WhyShebaCore() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Why <span className="text-primary">ShebaCore?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              We're not just another technology consultant. We're your strategic partner in navigating the complex technology landscape.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="flex gap-4 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Card */}
          <div className="glass-card p-8 md:p-12">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center p-6 rounded-xl bg-secondary/50">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">200+</div>
                <div className="text-sm text-muted-foreground">Technology Partners</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-secondary/50">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">$0</div>
                <div className="text-sm text-muted-foreground">Upfront Cost</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-secondary/50">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Expert Support</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-secondary/50">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Vendor-Neutral</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
