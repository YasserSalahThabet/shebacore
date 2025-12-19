import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
export function HeroSection() {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroBg})`
    }} />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Content */}
      <div className="relative z-10 section-container py-32 md:py-40">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-medium">
              Zero Upfront Consulting Cost
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-up delay-100">
            Technology, <span className="text-destructive">Simplified.</span>
            <br />
            Power, <span className="text-primary">Delivered.</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up delay-200">
            ShebaCore connects businesses with best-in-class technology solutions — without complexity or upfront cost.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact" className="gap-3">
                <Calendar size={20} />
                Schedule a Free Consultation
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/solutions" className="gap-3">
                Explore Solutions
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-border/30 animate-fade-up delay-400">
            <p className="text-sm text-muted-foreground mb-4">Trusted by leading enterprises across industries</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-50">
              {["Healthcare", "Retail", "Logistics", "Hospitality", "Public Sector"].map(industry => <span key={industry} className="text-sm font-medium text-foreground/60">
                  {industry}
                </span>)}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>;
}