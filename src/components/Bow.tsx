interface BowProps {
  className?: string;
  size?: number;
  color?: string;
}

export default function Bow({ className = "", size = 80, color = "#ffc9d4" }: BowProps) {
  const highlight = color.replace(")", ", 0.6)").replace("rgb", "rgba") || "#ffd9e4";

  return (
    <div className={`absolute z-10 ${className}`} style={{ width: size, height: size * 0.75 }}>
      <svg
        width={size}
        height={size * 0.75}
        viewBox="0 0 80 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="20" cy="30" rx="18" ry="11" fill={color} transform="rotate(-20 20 30)" />
        <ellipse cx="60" cy="30" rx="18" ry="11" fill={color} transform="rotate(20 60 30)" />
        <ellipse cx="20" cy="30" rx="10" ry="6" fill="#ffd9e4" transform="rotate(-20 20 30)" />
        <ellipse cx="60" cy="30" rx="10" ry="6" fill="#ffd9e4" transform="rotate(20 60 30)" />
        <ellipse cx="40" cy="30" rx="7" ry="7" fill={color} />
        <ellipse cx="40" cy="30" rx="4" ry="4" fill="#ffd9e4" />
      </svg>
    </div>
  );
}
