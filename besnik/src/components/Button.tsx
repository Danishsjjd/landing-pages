import React from "react";

type Props = {
  variant?: "outline" | "filed";
  children: string;
  className?: string;
};

const Button = ({ variant = "filed", children, className }: Props) => {
  return (
    <button
      className={`rounded-md py-2 px-7 text-lg ${
        variant === "outline"
          ? "border border-primary-light bg-white text-primary-light hover:shadow hover:shadow-primary-light/70"
          : "bg-primary-light text-white shadow-xl shadow-primary-light/20 hover:shadow-md hover:shadow-primary-light"
      } ${className ? className : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
