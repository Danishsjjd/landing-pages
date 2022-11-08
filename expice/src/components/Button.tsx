import React from "react";

type Props = {
  children: React.ReactNode | String;
};

const Button = ({ children }: Props) => {
  return (
    <button className="flex items-center justify-center rounded-tl-full bg-primary-main px-16 py-6 text-white">
      {children}
    </button>
  );
};

export default Button;
