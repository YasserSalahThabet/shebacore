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

      {/* 3D Hexagon — subtle logo echo */}
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
            width="360"
            height="360"
            viewBox="0 0 100 100"
            className="opacity-[0.12]"
            style={{
              transformStyle: "preserve-3d",
              filter: "drop-shadow(0 0 20px hsl(0 84% 60% / 0.15))",
            }}
            animate={{
              rotateX: [0, 20, 0, -20, 0],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Outer hexagon */}
            <polygon
              points="50,3 93.3,25 93.3,75 50,97 6.7,75 6.7,25"
              fill="hsl(0 84% 60% / 0.03)"
              stroke="hsl(0 84% 60%)"
              strokeWidth="1.2"
            />
            {/* Mid hexagon */}
            <polygon
              points="50,15 82,32 82,68 50,85 18,68 18,32"
              fill="none"
              stroke="hsl(0 84% 60% / 0.6)"
              strokeWidth="0.7"
            />
            {/* Inner hexagon */}
            <polygon
              points="50,28 70,39 70,61 50,72 30,61 30,39"
              fill="none"
              stroke="hsl(0 84% 60% / 0.3)"
              strokeWidth="0.4"
            />
          </motion.svg>
        </motion.div>
      </div>

      {/* Top-down gradient fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
    </>
  );
}
