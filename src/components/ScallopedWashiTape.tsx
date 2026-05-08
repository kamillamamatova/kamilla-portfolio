interface ScallopedWashiTapeProps {
  className?: string;
  rotation?: number;
}

export default function ScallopedWashiTape({ className = "", rotation = 0 }: ScallopedWashiTapeProps) {
  return (
    <div
      className={`absolute w-24 h-8 z-10 ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <svg width="100%" height="100%" viewBox="0 0 96 32" preserveAspectRatio="none">
        {/* Tape body */}
        <rect x="0" y="4" width="96" height="24" fill="#ffc9d4" opacity="0.75" />
        {/* Scalloped top edge */}
        <path
          d="M0,8 Q6,0 12,8 Q18,16 24,8 Q30,0 36,8 Q42,16 48,8 Q54,0 60,8 Q66,16 72,8 Q78,0 84,8 Q90,16 96,8 L96,4 L0,4 Z"
          fill="#ffb3c6"
          opacity="0.85"
        />
        {/* Scalloped bottom edge */}
        <path
          d="M0,24 Q6,32 12,24 Q18,16 24,24 Q30,32 36,24 Q42,16 48,24 Q54,32 60,24 Q66,16 72,24 Q78,32 84,24 Q90,16 96,24 L96,28 L0,28 Z"
          fill="#ffb3c6"
          opacity="0.85"
        />
      </svg>
    </div>
  );
}
