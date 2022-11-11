export default function Button({
  children,
  variant = "filled",
}: {
  children: string;
  variant?: "filled" | "outline";
}) {
  return (
    <button
      className={`px-5 py-2 ${
        variant === "filled"
          ? "bg-orange"
          : "bg-transparent border-orange border"
      }`}
    >
      {children}
    </button>
  );
}
