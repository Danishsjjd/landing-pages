import React from "react";

type Props = {
  children: React.ReactNode | String;
};

const Button = ({ children }: Props) => {
  return (
    <button className="flex items-center justify-center rounded-tl-full bg-primary-main/90 px-6 py-4 text-white hover:bg-primary-main  sm:px-16">
      {children}
    </button>
  );
};

export default Button;
