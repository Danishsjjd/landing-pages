import { Spin as Hamburger } from "hamburger-react";
import { useState } from "react";

import LinkButton from "../components/LinkButton";
import logo from "../assets/images/logo.svg";
import Button from "../components/Button";

type Props = {};

const links: { id: number; title: string }[] = [
  { id: 1, title: "Home" },
  { id: 2, title: "About us" },
  { id: 3, title: "Features" },
  { id: 4, title: "Contact" },
];

const Header = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="w-screen">
      {/* {" mobile "} */}
      {isOpen && (
        <div
          className="fixed inset-0 block h-screen w-screen bg-black/20 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      <div
        className={`isolate z-10 w-full overflow-hidden bg-white p-3 transition-transform duration-300 lg:hidden `}
      >
        <div>
          <nav
            className={`mb-3 space-y-4 overflow-hidden transition-all duration-500 ${
              isOpen ? "max-h-[1000px]" : "max-h-0"
            }`}
          >
            <ul className="space-y-4 text-center">
              {links.map((link) => (
                <li key={link.id}>
                  <LinkButton to={link.title} setIsOpen={setIsOpen}>
                    {link.title}
                  </LinkButton>
                </li>
              ))}
            </ul>
            <ul className="flex justify-center gap-4">
              <li>
                <Button variant="outline">Sign In</Button>
              </li>
              <li>
                <Button>Sign Up</Button>
              </li>
            </ul>
          </nav>
          <div className="flex items-center justify-between">
            <div>
              <img src={logo} alt="logo" />
            </div>
            <div>
              <Hamburger
                color="black"
                direction="left"
                toggled={isOpen}
                toggle={setIsOpen}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto hidden max-w-7xl items-center justify-between px-3 py-8 lg:flex">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <nav className="flex gap-12">
          <ul className="flex items-center gap-12">
            {links.map((link) => (
              <li key={link.id}>
                <LinkButton to={link.title}>{link.title}</LinkButton>
              </li>
            ))}
          </ul>
          <ul className="flex gap-6">
            <li>
              <Button variant="outline">Sign In</Button>
            </li>
            <li>
              <Button>Sign Up</Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
