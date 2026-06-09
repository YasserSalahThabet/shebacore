import { motion } from "framer-motion";

const nodes = [
  { x: 50, y: 6, z: 0.7 },
  { x: 84, y: 24, z: 0.82 },
  { x: 84, y: 70, z: 0.62 },
  { x: 50, y: 92, z: 0.88 },
  { x: 16, y: 70, z: 0.48 },
  { x: 16, y: 24, z: 0.58 },
  { x: 50, y: 28, z: 0.78 },
  { x: 68, y: 40, z: 0.95 },
  { x: 68, y: 60, z: 0.74 },
  { x: 50, y: 72, z: 0.86 },
  { x: 32, y: 60, z: 0.66 },
  { x: 32, y: 40, z: 0.76 },
  { x: 50, y: 50, z: 1 },
];

const links = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 0],
  [6, 7],
  [7, 8],
  [8, 9],
  [9, 10],
  [10, 11],
  [11, 6],
  [0, 6],
  [1, 7],
  [2, 8],
  [3, 9],
  [4, 10],
  [5, 11],
  [12, 6],
  [12, 7],
  [12, 8],
  [12, 9],
  [12, 10],
  [12, 11],
];

const outerHex = "50,6 84,24 84,70 50,92 16,70 16,24";
const innerHex = "50,28 68,40 68,60 50,72 32,60 32,40";

export function NetworkDepthVisual() {
  return (
    <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[54%] overflow-hidden lg:block">
      <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-l from-primary/10 via-primary/[0.03] to-transparent" />
      <motion.div
        className="absolute right-[-6%] top-1/2 h-[720px] w-[620px] -translate-y-1/2"
        style={{ perspective: 900 }}
        animate={{ y: ["-50%", "-52%", "-50%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.svg
          viewBox="0 0 100 100"
          className="h-full w-full overflow-visible"
          preserveAspectRatio="xMidYMid meet"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateX: [8, 13, 8], rotateY: [-17, -9, -17] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          <defs>
            <linearGradient id="hexNetworkLine" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="hsl(0 84% 60% / 0.08)" />
              <stop offset="50%" stopColor="hsl(0 84% 60% / 0.58)" />
              <stop offset="100%" stopColor="hsl(0 84% 60% / 0.16)" />
            </linearGradient>
            <filter id="hexNetworkGlow" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="1.4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <polygon
            points={outerHex}
            fill="hsl(0 84% 60% / 0.025)"
            stroke="hsl(0 84% 60% / 0.34)"
            strokeWidth="0.55"
            strokeLinejoin="round"
            filter="url(#hexNetworkGlow)"
          />
          <polygon
            points={innerHex}
            fill="hsl(0 84% 60% / 0.035)"
            stroke="hsl(0 84% 60% / 0.48)"
            strokeWidth="0.46"
            strokeLinejoin="round"
          />

          {links.map(([from, to], index) => {
            const start = nodes[from];
            const end = nodes[to];
            const opacity = 0.16 + Math.max(start.z, end.z) * 0.42;
            const width = 0.16 + Math.max(start.z, end.z) * 0.24;

            return (
              <motion.line
                key={`${from}-${to}`}
                x1={start.x}
                y1={start.y}
                x2={end.x}
                y2={end.y}
                stroke="url(#hexNetworkLine)"
                strokeWidth={width}
                strokeLinecap="round"
                opacity={opacity}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0.7, 1, 0.7] }}
                transition={{ duration: 7 + index * 0.12, repeat: Infinity, ease: "easeInOut" }}
              />
            );
          })}

          {nodes.map((node, index) => {
            const size = 0.72 + node.z * 1.05;
            const opacity = 0.26 + node.z * 0.6;

            return (
              <motion.g
                key={`${node.x}-${node.y}`}
                filter="url(#hexNetworkGlow)"
                animate={{ scale: [1, 1.18, 1], opacity: [opacity * 0.72, opacity, opacity * 0.72] }}
                transition={{ duration: 4 + index * 0.16, repeat: Infinity, ease: "easeInOut" }}
              >
                <circle cx={node.x} cy={node.y} r={size * 1.9} fill="hsl(0 84% 60% / 0.07)" />
                <circle cx={node.x} cy={node.y} r={size} fill="hsl(0 84% 60% / 0.86)" />
              </motion.g>
            );
          })}
        </motion.svg>
      </motion.div>
    </div>
  );
}
