import logo from "../assets/images/logo.png";

const links = ["Home", "Program", "Why Us", "Plans", "Testimonial"];
const Header = () => {
  return (
    <div className="mb-12 hidden items-center justify-between pt-6 md:flex ">
      <img src={logo} alt="logo" className="w-40" />
      <ul className="flex gap-7">
        {links.map((link) => (
          <li className="hover:text-orange">
            <a href={`#${link}`}>{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
