import github from "../assets/images/github.png";
import insta from "../assets/images/instagram.png";
import linkedin from "../assets/images/linkedin.png";
import logo from "../assets/images/logo.png";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="px-8 border-t-2 border-t-white py-40 flex flex-col gap-20 justify-center items-center">
      <div className="flex gap-20">
        <a href="#">
          <img src={github} alt="github" className="w-10 object-contain" />
        </a>
        <a href="#">
          <img src={insta} alt="instagram" className="w-10 object-contain" />
        </a>
        <a href="#">
          <img src={linkedin} alt="linkedin" className="w-10 object-contain" />
        </a>
      </div>
      <img src={logo} alt="logo" className="w-40" />
    </div>
  );
};

export default Footer;
