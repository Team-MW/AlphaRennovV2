export function RoofMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M4 34 L22 6 L40 34"
        stroke="#0d274f"
        strokeWidth="7"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <path
        d="M22 34 L36 10 L50 34"
        stroke="#94a9c9"
        strokeWidth="6"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}
