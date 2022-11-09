import logo from "../assets/images/logo.svg";
import userIcon from "../assets/images/User icon.svg";
import arrow from "../assets/images/right_sign.png";
import menuBar from "../assets/images/Menu bar.svg";

type Props = {};

const links = ["Menu One", "Menu Two", "Menu Three", "Menu Four"];

const Header = (props: Props) => {
  return (
    <header className="relative py-4">
      <div className="absolute right-0 top-0 -z-10 h-full w-1/3 bg-primary-main" />
      {/* mobile */}
      <div className="flex justify-between px-8 md:hidden">
        <img src={logo} alt="logo" className="w-28" />
        <img src={menuBar} alt="menu" />
      </div>

      <div className="mx-auto hidden max-w-7xl items-center justify-between px-4 md:flex ">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <nav className="lg:mr-60">
          <ul className="flex gap-5 text-secondary-main">
            {links.map((link, index) => (
              <li key={index} className="cursor-pointer hover:font-medium">
                {link}
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex cursor-pointer items-center justify-center gap-3">
          <div className="relative">
            <img src={userIcon} alt="user icon" />
            <div className="absolute top-0 right-0 h-4 w-4 rounded-full bg-emerald-700" />
          </div>
          <p className="text-white">User</p>
          <img src={arrow} alt="arrow" className=" w-2 rotate-90" />
        </div>
      </div>
    </header>
  );
};

export default Header;
