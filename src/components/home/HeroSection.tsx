import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { HeroBackground } from "./HeroBackground";
import { NetworkDepthVisual } from "./NetworkDepthVisual";

const proofPoints = ["US based", "Serving KSA", "Vendor-neutral", "Prototype first"];

export function HeroSection() {
  return (
    <section className="relative flex min-h-[76vh] items-center overflow-hidden lg:min-h-[82vh]">
      <HeroBackground />
      <NetworkDepthVisual />

      <div className="relative z-10 section-container pt-24 pb-12 md:pt-28 md:pb-16">
        <div className="max-w-3xl lg:max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
          >
            <span className="h-2 w-2 rounded-full bg-primary" />
            AI Operations & Technology Enablement
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="max-w-4xl text-4xl font-bold leading-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Build a cleaner operating core for your business.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl"
          >
            ShebaCore maps your workflows, selects the right technology, and builds AI-powered prototypes before you commit to a full rollout.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
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

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground"
          >
            {proofPoints.map((point) => (
              <span key={point} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
                {point}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
