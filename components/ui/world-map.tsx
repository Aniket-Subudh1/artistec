"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import DottedMap from "dotted-map";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
}

export function WorldMap({ dots = [], lineColor = "#6b6fd4" }: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const map = new DottedMap({ height: 100, grid: "diagonal" });

  const svgMap = map.getSVG({
    radius: 0.30,
    color: "#8a88a8",
    shape: "circle",
    backgroundColor: "transparent",
  });

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <div className="w-full aspect-2/1 relative rounded-2xl overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full pointer-events-none select-none mask-[linear-gradient(to_bottom,transparent,white_8%,white_92%,transparent)]"
        alt="world map"
        height="495"
        width="1056"
        draggable={false}
      />

      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <filter id="point-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feDropShadow dx="0" dy="0" stdDeviation="1.6" floodColor={lineColor} floodOpacity="0.5" />
          </filter>
        </defs>

        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: 0.4 * i, ease: "easeOut" }}
              />
            </g>
          );
        })}

        {dots.map((dot, i) => (
          <g key={`points-group-${i}`}>
            <circle
              cx={projectPoint(dot.start.lat, dot.start.lng).x}
              cy={projectPoint(dot.start.lat, dot.start.lng).y}
              r="4"
              fill={lineColor}
              stroke="white"
              strokeWidth="1.5"
              filter="url(#point-glow)"
            />
            <circle
              cx={projectPoint(dot.start.lat, dot.start.lng).x}
              cy={projectPoint(dot.start.lat, dot.start.lng).y}
              r="4"
              fill={lineColor}
              opacity="0.55"
            >
              <animate attributeName="r" from="4" to="13" dur="2.2s" begin="0s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.55" to="0" dur="2.2s" begin="0s" repeatCount="indefinite" />
            </circle>

            <circle
              cx={projectPoint(dot.end.lat, dot.end.lng).x}
              cy={projectPoint(dot.end.lat, dot.end.lng).y}
              r="4"
              fill={lineColor}
              stroke="white"
              strokeWidth="1.5"
              filter="url(#point-glow)"
            />
            <circle
              cx={projectPoint(dot.end.lat, dot.end.lng).x}
              cy={projectPoint(dot.end.lat, dot.end.lng).y}
              r="4"
              fill={lineColor}
              opacity="0.55"
            >
              <animate attributeName="r" from="4" to="13" dur="2.2s" begin="0.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.55" to="0" dur="2.2s" begin="0.5s" repeatCount="indefinite" />
            </circle>
          </g>
        ))}
      </svg>
    </div>
  );
}
