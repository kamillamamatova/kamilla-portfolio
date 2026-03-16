export default function BackgroundScene() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <div className="background-aurora" />
      <div className="background-veil" />
    </div>
  );
}
