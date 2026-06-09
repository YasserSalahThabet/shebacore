import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Calculator,
  Calendar,
  Hotel,
  Landmark,
  Plane,
  Stethoscope,
  Store,
  Truck,
} from "lucide-react";
import { motion } from "framer-motion";
import { HeroBackground } from "./HeroBackground";

const industries = [
  { icon: Stethoscope, name: "Healthcare" },
  { icon: Store, name: "Retail" },
  { icon: Truck, name: "Logistics" },
  { icon: Hotel, name: "Hospitality" },
  { icon: Landmark, name: "Public Sector" },
  { icon: Plane, name: "Travel Agencies" },
  { icon: Calculator, name: "Accountants" },
];

export function HeroSection() {
  return (
    <section className="relative flex min-h-[78vh] items-center justify-center overflow-hidden lg:min-h-[82vh]">
      <HeroBackground />

      {/* Content */}
      <div className="relative z-10 section-container pt-24 pb-10 md:pt-28 md:pb-16">
        <div className="mx-auto max-w-5xl text-center">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
          >
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            AI Operations & Technology Enablement
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-4 text-4xl font-bold text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
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
            className="mx-auto mb-7 max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            ShebaCore maps your workflows, selects the right technology, and builds AI-powered prototypes that turn operations into measurable systems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col justify-center gap-3 sm:flex-row"
          >
            <Button variant="hero" size="xl" asChild>
              <a
                href="https://cal.com/shebacore/discovery-call-shebacore"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-3"
              >
                <Calendar size={20} />
                Book a Strategy Call
              </a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/solutions" className="gap-3">
                View Capabilities
                <ArrowRight size={20} />
              </Link>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 border-t border-border/30 pt-5 md:mt-10"
          >
            <div className="mb-4 flex items-center justify-center gap-3 text-sm text-muted-foreground">
              <span>US Based</span>
              <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
              <span>Operating in KSA</span>
            </div>
            <h2 className="mb-3 text-base font-semibold text-foreground">
              Industries We Specialize In
            </h2>
            <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-2.5">
              {industries.map((industry) => (
                <div
                  key={industry.name}
                  className="flex items-center gap-2 rounded-full border border-border/70 bg-secondary/40 px-3.5 py-2 text-sm font-medium text-foreground backdrop-blur transition-colors hover:border-primary/40"
                >
                  <industry.icon className="h-4 w-4 text-primary" />
                  <span>{industry.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
