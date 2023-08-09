import React from "react";

function ProgressCircle({ r, color = "primary", percent, strokeWidth = 8 }) {
  const circumference = r * 2 * Math.PI;
  return (
    <div className="w-fit h-fit relative">
      <svg className="transform -rotate-90 origin-center" width={2*r+strokeWidth} height={2*r+strokeWidth}>
        <circle
          className="text-gray-200"
          strokeWidth={strokeWidth}
          stroke="currentColor"
          fill="transparent"
          r={r}
          cx={r + strokeWidth / 2}
          cy={r + strokeWidth / 2}
        />
        <circle
          className={`text-${color}-600`}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (percent / 100) * circumference}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={r}
          cx={r + strokeWidth / 2}
          cy={r + strokeWidth / 2}
        />
      </svg>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
        <p className="text-[8px]">Progress</p>
        <p className="font-bold text-sm">{percent}%</p>
      </div>
    </div>
  );
}

export default ProgressCircle;
