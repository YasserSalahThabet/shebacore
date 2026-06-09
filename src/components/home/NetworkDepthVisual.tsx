import { motion } from "framer-motion";

const nodes = [
  { x: 78, y: 8, z: 0.35 },
  { x: 58, y: 18, z: 0.65 },
  { x: 86, y: 24, z: 0.5 },
  { x: 48, y: 34, z: 0.3 },
  { x: 70, y: 38, z: 0.85 },
  { x: 94, y: 46, z: 0.45 },
  { x: 56, y: 54, z: 0.55 },
  { x: 82, y: 62, z: 0.95 },
  { x: 44, y: 72, z: 0.4 },
  { x: 66, y: 78, z: 0.75 },
  { x: 92, y: 86, z: 0.55 },
  { x: 54, y: 94, z: 0.25 },
];

const links = [
  [0, 1],
  [0, 2],
  [1, 3],
  [1, 4],
  [2, 4],
  [2, 5],
  [3, 6],
  [4, 6],
  [4, 7],
  [5, 7],
  [6, 8],
  [7, 9],
  [7, 10],
  [8, 9],
  [9, 11],
  [9, 10],
];

export function NetworkDepthVisual() {
  return (
    <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[54%] overflow-hidden lg:block">
      <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-l from-primary/10 via-primary/[0.03] to-transparent" />
      <motion.div
        className="absolute right-[-10%] top-1/2 h-[760px] w-[620px] -translate-y-1/2"
        style={{ perspective: 900 }}
        animate={{ y: ["-50%", "-52%", "-50%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.svg
          viewBox="0 0 100 100"
          className="h-full w-full overflow-visible"
          preserveAspectRatio="xMidYMid meet"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateX: [8, 13, 8], rotateY: [-18, -10, -18] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          <defs>
            <linearGradient id="networkLine" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="hsl(0 84% 60% / 0.08)" />
              <stop offset="50%" stopColor="hsl(0 84% 60% / 0.52)" />
              <stop offset="100%" stopColor="hsl(0 84% 60% / 0.14)" />
            </linearGradient>
            <filter id="networkGlow" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="1.4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {links.map(([from, to], index) => {
            const start = nodes[from];
            const end = nodes[to];
            const opacity = 0.18 + Math.max(start.z, end.z) * 0.42;
            const width = 0.18 + Math.max(start.z, end.z) * 0.28;

            return (
              <motion.line
                key={`${from}-${to}`}
                x1={start.x}
                y1={start.y}
                x2={end.x}
                y2={end.y}
                stroke="url(#networkLine)"
                strokeWidth={width}
                strokeLinecap="round"
                opacity={opacity}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0.65, 1, 0.65] }}
                transition={{ duration: 7 + index * 0.18, repeat: Infinity, ease: "easeInOut" }}
              />
            );
          })}

          {nodes.map((node, index) => {
            const size = 0.9 + node.z * 1.25;
            const opacity = 0.28 + node.z * 0.58;

            return (
              <motion.g
                key={`${node.x}-${node.y}`}
                filter="url(#networkGlow)"
                animate={{ scale: [1, 1.2, 1], opacity: [opacity * 0.7, opacity, opacity * 0.7] }}
                transition={{ duration: 4 + index * 0.22, repeat: Infinity, ease: "easeInOut" }}
              >
                <circle cx={node.x} cy={node.y} r={size * 1.8} fill="hsl(0 84% 60% / 0.08)" />
                <circle cx={node.x} cy={node.y} r={size} fill="hsl(0 84% 60% / 0.86)" />
              </motion.g>
            );
          })}
        </motion.svg>
      </motion.div>
    </div>
  );
}
