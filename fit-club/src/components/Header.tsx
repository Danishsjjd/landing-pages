import logo from "../assets/images/logo.png";
import Dropdown from "./Dropdown";
import menuImg from "../assets/images/bars.png";

const links = ["Home", "Program", "Why Us", "Plans", "Testimonial"];
const Header = () => {
  return (
    <>
      <div className="mb-12 hidden items-center justify-between pt-6 md:flex ">
        <img src={logo} alt="logo" className="w-40" />
        <ul className="flex gap-7">
          {links.map((link) => (
            <li className="hover:text-orange" key={link}>
              <a href={`#${link}`}>{link}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative block md:hidden">
        <div className="absolute right-2 top-2">
          <Dropdown items={links}>
            <img src={menuImg} alt="menu bar" className="w-10" />
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default Header;
