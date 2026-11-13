import React, { type CSSProperties, type ReactNode } from "react";

export interface StarfallTextProps {
  children?: ReactNode;
  className?: string;
  duration?: number;
}

const KEYFRAMES = `
@keyframes starfall-scroll {
  from {
    background-position: 0 0, 0 0, 0 0, 0 0, 0 0, 0 0;
  }
  to {
    background-position: 0 720px, 0 540px, 0 360px, 0 240px, 0 120px, 0 0;
  }
}
@media (prefers-reduced-motion: reduce) {
  .starfall-text, .starfall-glow { animation: none !important; }
}
`;



const star = (x: number, y: number, w: number, h: number): string =>
  `radial-gradient(ellipse ${w}px ${h}px at ${x}% ${y}%, #ffffff 0%, rgba(100,242,254,0.95) 25%, rgba(125,160,255,0.45) 60%, rgba(125,160,255,0) 100%)`;

const STAR_FIELD: string = [
  star(12, 20, 3, 9), 
  star(58, 55, 2.5, 7), 
  star(84, 30, 3.5, 10), 
  star(36, 78, 2, 6), 
  star(70, 90, 2.5, 8), 
  
  "linear-gradient(180deg, #150036 0%, #1d004a 50%, #4400b0 100%)",
].join(", ");

const GLOW_STYLE: CSSProperties = {
  filter:
    "drop-shadow(0 0 8px rgba(147,197,253,0.65)) drop-shadow(0 0 22px rgba(129,140,248,0.45))",
};

export default function StarfallText({
  children = "Starfall",
  className = "",
  duration = 6,
}: StarfallTextProps): React.JSX.Element {
  const textStyle: CSSProperties = {
    backgroundImage: STAR_FIELD,
    backgroundSize:
      "60px 60px, 90px 90px, 120px 120px, 80px 80px, 120px 120px, 100% 100%",
    backgroundRepeat: "repeat, repeat, repeat, repeat, repeat, no-repeat",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    color: "transparent",
    animation: `starfall-scroll ${duration}s linear infinite`,
    display: "inline-block",
  };

  return (
    <div
      className={`flex items-center justify-center ${className}`}
    >
      <style>{KEYFRAMES}</style>
      <span className="starfall-glow inline-block" style={GLOW_STYLE}>
        <span
          className="starfall-text text-xl font-black tracking-tight sm:text-2xl md:text-5xl"
          style={textStyle}
        >
          {children}
        </span>
      </span>
    </div>
  );
}
