import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Target, Users, Award, Globe, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Client-Centric",
    description: "Your success is our success. We prioritize your business outcomes above all else.",
  },
  {
    icon: Users,
    title: "Transparency",
    description: "No hidden agendas. We provide honest, unbiased recommendations every time.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We hold ourselves to the highest standards in everything we do.",
  },
  {
    icon: Globe,
    title: "Innovation",
    description: "We stay at the forefront of technology to bring you cutting-edge solutions.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
        
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-up">
              About <span className="text-primary">ShebaCore</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-up delay-100">
              We're a technology solutions and brokerage firm on a mission to simplify how businesses access and implement enterprise technology.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-card/50">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our <span className="text-primary">Story</span>
              </h2>
              <p className="text-muted-foreground">
                ShebaCore was founded by a technology professional with a passion for building practical, reliable solutions for small and growing businesses. Backed by a close-knit team of friends and collaborators with experience across different technology companies and disciplines, we combine real-world expertise with a hands-on approach. Our focus is simple: deliver clear, effective, and scalable technology solutions while providing an exceptional experience for every client. We believe small businesses deserve enterprise-level thinking, without the complexity.
              </p>
            </div>
            <div className="glass-card p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 rounded-xl bg-secondary/50">
                  <div className="text-4xl font-bold text-primary mb-2">200+</div>
                  <div className="text-sm text-muted-foreground">Technology Partners</div>
                </div>
                <div className="text-center p-6 rounded-xl bg-secondary/50">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Clients Served</div>
                </div>
                <div className="text-center p-6 rounded-xl bg-secondary/50">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Industries</div>
                </div>
                <div className="text-center p-6 rounded-xl bg-secondary/50">
                  <div className="text-4xl font-bold text-primary mb-2">99%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-background">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Mission</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              To democratize access to enterprise-grade technology by providing expert guidance, vendor-neutral recommendations, and seamless implementation — all without upfront cost.
            </p>
            <div className="glass-card p-8 inline-block">
              <p className="text-lg text-foreground italic">
                "Technology should empower businesses, not overwhelm them."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-card/50">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Values</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="glass-card p-6 text-center group hover:border-primary/30 transition-all">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
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
              Ready to Work Together?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how ShebaCore can help transform your technology landscape.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact" className="gap-3">
                Get in Touch
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
