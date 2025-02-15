import React from "react";

interface CircularProgressProps {
  percentage: number;
  color: string;
  colorOpacity: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  percentage,
  color,
  colorOpacity,
}) => {
  const radius = 40; // Radius of the circle
  const strokeWidth = 8; // Stroke width
  const circumference = 2 * Math.PI * radius; // Circumference of the circle
  const offset = circumference - (percentage / 100) * circumference; // Stroke offset for progress

  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      className="w-full h-full" // Rotates to start from top
    >
      {/* Background Circle */}
      <circle
        cx="50"
        cy="50"
        r={radius}
        fill="transparent"
        stroke={colorOpacity} // Dark blue color (Tailwind blue-900)
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />

      {/* Progress Circle */}
      <circle
        cx="50"
        cy="50"
        r={radius}
        fill="transparent"
        stroke={color} // Light blue color (Tailwind blue-500)
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        className="transition-all duration-500 ease-in-out"
      />

      {/* Percentage Text */}
      <text
        x="50"
        y="50"
        textAnchor="middle"
        dy=".3em"
        className="fill-white text-lg font-bold"
      >
        {percentage}%
      </text>
    </svg>
  );
};

export default CircularProgress;
