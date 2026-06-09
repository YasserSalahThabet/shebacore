import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Target, Users, Award, Globe, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Outcome First",
    description: "Every recommendation starts with the business result it needs to create.",
  },
  {
    icon: Users,
    title: "Transparent Guidance",
    description: "Clear options, honest tradeoffs, and no hidden agenda behind the recommendation.",
  },
  {
    icon: Award,
    title: "Practical Excellence",
    description: "We focus on solutions that can be implemented, supported, and measured in the real world.",
  },
  {
    icon: Globe,
    title: "Modern Thinking",
    description: "We bring AI, automation, and trusted technology providers into one focused plan.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-28 pb-14 bg-background relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] bg-primary/5 rounded-full blur-3xl" />
        
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5 animate-fade-up">
              About <span className="text-primary">ShebaCore</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-up delay-100">
              ShebaCore helps businesses choose, prototype, and implement technology with less noise, clearer decisions, and a stronger operational core.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-20 bg-card/50">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
                Our <span className="text-primary">Story</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                ShebaCore was built for companies that need serious technology without unnecessary complexity. We combine hands-on technical experience, vendor-neutral guidance, and practical AI thinking to help clients move from idea to working solution. The goal is simple: understand the business, choose the right tools, build a useful prototype, and create a path that can scale.
              </p>
            </div>
            <div className="glass-card p-6 md:p-8">
              <div className="grid grid-cols-2 gap-5">
                <div className="text-center p-5 rounded-xl bg-secondary/50">
                  <div className="text-4xl font-bold text-primary mb-2">200+</div>
                  <div className="text-sm text-muted-foreground">Technology Partners</div>
                </div>
                <div className="text-center p-5 rounded-xl bg-secondary/50">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Clients Served</div>
                </div>
                <div className="text-center p-5 rounded-xl bg-secondary/50">
                  <div className="text-4xl font-bold text-primary mb-2">14</div>
                  <div className="text-sm text-muted-foreground">Day Prototypes</div>
                </div>
                <div className="text-center p-5 rounded-xl bg-secondary/50">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Vendor-Neutral</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-20 bg-background">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
              Our <span className="text-primary">Mission</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              To make strong technology decisions easier for growing businesses by combining expert guidance, practical implementation, and AI-powered workflow design.
            </p>
            <div className="glass-card p-6 md:p-8 inline-block">
              <p className="text-lg text-foreground italic">
                "Technology should make the business easier to run, not harder to understand."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 bg-card/50">
        <div className="section-container">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
              Our <span className="text-primary">Values</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((value) => (
              <div key={value.title} className="glass-card p-6 text-center group hover:border-primary/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
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
              Ready to Build a Stronger Core?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let’s map the next practical step for your technology, AI, or automation needs.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact" className="gap-3">
                Start the Conversation
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
