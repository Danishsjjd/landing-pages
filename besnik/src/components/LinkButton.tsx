import { Dispatch, SetStateAction } from "react";
import { Link } from "react-scroll";
import { Config } from "tailwindcss";

type Props = {
  children: string;
  to: string;
  className?: Config;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  Component?: any;
};

const LinkButton = ({
  children,
  to,
  className,
  setIsOpen,
  Component = Link,
}: Props) => {
  return (
    <Component
      to={`${to}`}
      spy
      activeClass={" font-bold"}
      offset={-200}
      className={`cursor-pointer text-xl hover:font-bold text-primary-dark${
        className ? className : ""
      }`}
      onClick={() => {
        window.history.pushState(null, "", `#${to}`);
        if (setIsOpen) setIsOpen(false);
      }}
    >
      {children}
    </Component>
  );
};

export default LinkButton;
