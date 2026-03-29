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

      {/* AI-era digital hexagon with neural network */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="relative"
          style={{ perspective: "800px" }}
          animate={{ rotateY: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <motion.svg
            width="420"
            height="420"
            viewBox="0 0 200 200"
            className="opacity-[0.12]"
            style={{
              transformStyle: "preserve-3d",
              filter: "drop-shadow(0 0 30px hsl(0 84% 60% / 0.15))",
            }}
            animate={{ rotateX: [0, 12, 0, -12, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          >
            <defs>
              <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(0 84% 60%)" stopOpacity="0.8" />
                <stop offset="100%" stopColor="hsl(0 84% 60%)" stopOpacity="0.3" />
              </linearGradient>
              <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="hsl(0 84% 60%)" stopOpacity="0.9" />
                <stop offset="100%" stopColor="hsl(0 84% 60%)" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Outer hexagon — shield frame */}
            <polygon
              points="100,8 178,35 178,165 100,192 22,165 22,35"
              fill="none"
              stroke="url(#hexGrad)"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />

            {/* Mid hexagon */}
            <polygon
              points="100,28 160,48 160,152 100,172 40,152 40,48"
              fill="hsl(0 84% 60% / 0.02)"
              stroke="hsl(0 84% 60% / 0.4)"
              strokeWidth="1"
              strokeLinejoin="round"
              strokeDasharray="4 3"
            />

            {/* Inner hexagon — core */}
            <polygon
              points="100,55 135,70 135,130 100,145 65,130 65,70"
              fill="hsl(0 84% 60% / 0.04)"
              stroke="hsl(0 84% 60% / 0.6)"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />

            {/* Neural network connections from center to mid-ring */}
            {/* Center node at 100,100 connects outward */}
            {[
              [100, 55], [135, 70], [135, 130], [100, 145], [65, 130], [65, 70],
            ].map(([x, y], i) => (
              <line
                key={`center-${i}`}
                x1={100}
                y1={100}
                x2={x}
                y2={y}
                stroke="hsl(0 84% 60% / 0.3)"
                strokeWidth="0.8"
              />
            ))}

            {/* Mid-ring to outer-ring neural links */}
            {[
              [[100, 55], [100, 28]],
              [[135, 70], [160, 48]],
              [[135, 130], [160, 152]],
              [[100, 145], [100, 172]],
              [[65, 130], [40, 152]],
              [[65, 70], [40, 48]],
            ].map(([[x1, y1], [x2, y2]], i) => (
              <line
                key={`outer-${i}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="hsl(0 84% 60% / 0.2)"
                strokeWidth="0.6"
                strokeDasharray="3 4"
              />
            ))}

            {/* Cross-connections on inner hex (mesh network feel) */}
            {[
              [[100, 55], [135, 130]],
              [[100, 55], [65, 130]],
              [[135, 70], [65, 130]],
              [[65, 70], [135, 130]],
              [[135, 70], [100, 145]],
              [[65, 70], [100, 145]],
            ].map(([[x1, y1], [x2, y2]], i) => (
              <line
                key={`mesh-${i}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="hsl(0 84% 60% / 0.08)"
                strokeWidth="0.5"
              />
            ))}

            {/* Data pulse rings around center */}
            {[18, 30].map((r, i) => (
              <circle
                key={`ring-${i}`}
                cx={100}
                cy={100}
                r={r}
                fill="none"
                stroke="hsl(0 84% 60% / 0.1)"
                strokeWidth="0.5"
                strokeDasharray="2 6"
              />
            ))}

            {/* Center core node */}
            <circle cx={100} cy={100} r="5" fill="url(#nodeGlow)" />
            <circle
              cx={100}
              cy={100}
              r="3"
              fill="hsl(0 84% 60% / 0.5)"
              stroke="hsl(0 84% 60% / 0.8)"
              strokeWidth="0.8"
            />

            {/* Inner hex vertex nodes */}
            {[
              [100, 55], [135, 70], [135, 130], [100, 145], [65, 130], [65, 70],
            ].map(([cx, cy], i) => (
              <g key={`inner-node-${i}`}>
                <circle cx={cx} cy={cy} r="3.5" fill="url(#nodeGlow)" opacity="0.5" />
                <circle
                  cx={cx}
                  cy={cy}
                  r="2.2"
                  fill="hsl(0 84% 60% / 0.35)"
                  stroke="hsl(0 84% 60% / 0.7)"
                  strokeWidth="0.7"
                />
              </g>
            ))}

            {/* Mid hex vertex nodes — smaller */}
            {[
              [100, 28], [160, 48], [160, 152], [100, 172], [40, 152], [40, 48],
            ].map(([cx, cy], i) => (
              <circle
                key={`mid-node-${i}`}
                cx={cx}
                cy={cy}
                r="1.5"
                fill="hsl(0 84% 60% / 0.25)"
                stroke="hsl(0 84% 60% / 0.5)"
                strokeWidth="0.5"
              />
            ))}

            {/* Outer hex vertex nodes — smallest */}
            {[
              [100, 8], [178, 35], [178, 165], [100, 192], [22, 165], [22, 35],
            ].map(([cx, cy], i) => (
              <circle
                key={`outer-node-${i}`}
                cx={cx}
                cy={cy}
                r="1.8"
                fill="hsl(0 84% 60% / 0.15)"
                stroke="hsl(0 84% 60% / 0.35)"
                strokeWidth="0.5"
              />
            ))}

            {/* Lock/shield icon in center — security symbol */}
            <rect
              x="95"
              y="96"
              width="10"
              height="8"
              rx="1.5"
              fill="none"
              stroke="hsl(0 84% 60% / 0.7)"
              strokeWidth="0.8"
            />
            <path
              d="M97.5,96 V93.5 A2.5,2.5 0 0 1 102.5,93.5 V96"
              fill="none"
              stroke="hsl(0 84% 60% / 0.7)"
              strokeWidth="0.8"
            />
          </motion.svg>
        </motion.div>
      </div>

      {/* Top-down gradient fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
    </>
  );
}
