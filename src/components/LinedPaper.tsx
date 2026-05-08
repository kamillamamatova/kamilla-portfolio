import React from "react";

interface LinedPaperProps {
  children: React.ReactNode;
  className?: string;
}

export default function LinedPaper({ children, className = "" }: LinedPaperProps) {
  return (
    <div
      className={`relative bg-[#faf7f2] ${className}`}
      style={{
        backgroundImage: `
          repeating-linear-gradient(
            transparent,
            transparent 27px,
            #d4c5b0 27px,
            #d4c5b0 28px
          )`,
        backgroundPositionY: "32px",
      }}
    >
      {children}
    </div>
  );
}
