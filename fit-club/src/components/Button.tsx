export default function Button({
  children,
  variant = "filled",
  className,
}: {
  children: string;
  variant?: "filled" | "outline";
  className?: string;
}) {
  return (
    <button
      className={`px-5 py-2 ${
        variant === "filled"
          ? "bg-orange"
          : "border border-orange bg-transparent"
      } ${className ? className : ""}`}
    >
      {children}
    </button>
  );
}
