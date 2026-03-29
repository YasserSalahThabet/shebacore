import { motion } from "framer-motion";

export function HeroBackground() {
  return (
    <>
      {/* Deep dark base */}
      <div className="absolute inset-0 bg-background" />

      {/* Animated gradient mesh */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 50%, hsl(0 84% 60% / 0.15), transparent)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating 3D-like orbs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, hsl(0 84% 60% / 0.12) 0%, transparent 70%)",
          top: "10%",
          left: "15%",
        }}
        animate={{
          y: [0, -40, 0],
          x: [0, 20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, hsl(220 20% 30% / 0.15) 0%, transparent 70%)",
          bottom: "5%",
          right: "10%",
        }}
        animate={{
          y: [0, 30, 0],
          x: [0, -25, 0],
          scale: [1.1, 1, 1.1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle grid lines */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(0 0% 100% / 0.1) 1px, transparent 1px),
            linear-gradient(90deg, hsl(0 0% 100% / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/30"
          style={{
            top: `${15 + i * 15}%`,
            left: `${10 + i * 16}%`,
          }}
          animate={{
            y: [0, -30 - i * 10, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 5 + i * 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8,
          }}
        />
      ))}

      {/* 3D Hexagon — logo echo with circuit pattern */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="relative"
          style={{ perspective: "600px" }}
          animate={{
            rotateY: [0, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <motion.svg
            width="380"
            height="380"
            viewBox="0 0 120 120"
            className="opacity-[0.14]"
            style={{
              transformStyle: "preserve-3d",
              filter: "drop-shadow(0 0 25px hsl(0 84% 60% / 0.18))",
            }}
            animate={{
              rotateX: [0, 18, 0, -18, 0],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Outer hexagon */}
            <polygon
              points="60,5 108,30 108,90 60,115 12,90 12,30"
              fill="hsl(0 84% 60% / 0.03)"
              stroke="hsl(0 84% 60%)"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            {/* Inner hexagon border */}
            <polygon
              points="60,18 96,38 96,82 60,102 24,82 24,38"
              fill="none"
              stroke="hsl(0 84% 60% / 0.7)"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />

            {/* Circuit lines — horizontal bars */}
            <line x1="30" y1="48" x2="90" y2="48" stroke="hsl(0 84% 60% / 0.6)" strokeWidth="1.2" />
            <line x1="28" y1="60" x2="92" y2="60" stroke="hsl(0 84% 60% / 0.6)" strokeWidth="1.2" />
            <line x1="30" y1="72" x2="90" y2="72" stroke="hsl(0 84% 60% / 0.6)" strokeWidth="1.2" />

            {/* Circuit lines — vertical connectors */}
            <line x1="45" y1="42" x2="45" y2="78" stroke="hsl(0 84% 60% / 0.5)" strokeWidth="1" />
            <line x1="60" y1="38" x2="60" y2="82" stroke="hsl(0 84% 60% / 0.5)" strokeWidth="1" />
            <line x1="75" y1="42" x2="75" y2="78" stroke="hsl(0 84% 60% / 0.5)" strokeWidth="1" />

            {/* Circuit nodes */}
            {[
              [45, 48], [60, 48], [75, 48],
              [35, 60], [52, 60], [68, 60], [85, 60],
              [45, 72], [60, 72], [75, 72],
              [45, 42], [75, 42],
              [45, 78], [75, 78],
            ].map(([cx, cy], i) => (
              <circle
                key={i}
                cx={cx}
                cy={cy}
                r="2.2"
                fill="hsl(0 84% 60% / 0.25)"
                stroke="hsl(0 84% 60% / 0.7)"
                strokeWidth="0.8"
              />
            ))}
          </motion.svg>
        </motion.div>
      </div>

      {/* Top-down gradient fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
    </>
  );
}
