export function HeroBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,hsl(0_84%_60%/0.10),transparent_42%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(220_20%_6%/0.98)_0%,hsl(220_20%_6%/0.92)_42%,hsl(220_20%_6%/0.72)_72%,hsl(220_20%_6%/0.9)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
    </>
  );
}
