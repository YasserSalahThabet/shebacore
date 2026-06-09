import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 14, suffix: "-Day", label: "Prototype Sprint" },
  { value: 200, suffix: "+", label: "Technology Partners" },
  { value: 100, suffix: "%", label: "Vendor-Neutral" },
  { value: 0, suffix: "$", label: "Upfront Consulting Cost" },
];

function AnimatedCounter({ target, suffix, isInView }: { target: number; suffix: string; isInView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = Math.max(target / (duration / 16), 1);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span className="text-3xl font-bold text-primary md:text-4xl">
      {suffix === "$" ? `${suffix}${count}` : `${count}${suffix}`}
    </span>
  );
}

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="border-y border-border/30 bg-card/30 py-8 md:py-10">
      <div className="section-container" ref={ref}>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <AnimatedCounter target={stat.value} suffix={stat.suffix} isInView={isInView} />
              <p className="mt-1.5 text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
