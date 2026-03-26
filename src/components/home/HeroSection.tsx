import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />

      {/* Floating Accent Orbs */}
      <motion.div
        className="absolute top-1/4 left-[10%] w-72 h-72 rounded-full bg-primary/8 blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-[15%] w-96 h-96 rounded-full bg-primary/5 blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-10" />

      {/* Content */}
      <div className="relative z-10 section-container py-32 md:py-40">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            AI-Powered Business Transformation
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground"
          >
            More Profit.{" "}
            <span className="text-primary">More Time.</span>
            <br />
            <span className="text-muted-foreground">Less Complexity.</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            We analyze your business, map where AI delivers maximum impact, and build working prototypes — in as little as 14 days.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="hero" size="xl" asChild>
              <a
                href="https://cal.com/shebacore/discovery-call-shebacore"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-3"
              >
                <Calendar size={20} />
                Schedule a Free Consultation
              </a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/solutions" className="gap-3">
                Explore Solutions
                <ArrowRight size={20} />
              </Link>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 pt-8 border-t border-border/30"
          >
            <p className="text-sm text-muted-foreground mb-4">
              Trusted by leading enterprises across industries
            </p>
            <div className="flex flex-wrap justify-center gap-8 opacity-50">
              {["Healthcare", "Retail", "Logistics", "Hospitality", "Public Sector"].map(
                (industry) => (
                  <span
                    key={industry}
                    className="text-sm font-medium text-foreground/60"
                  >
                    {industry}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
}
