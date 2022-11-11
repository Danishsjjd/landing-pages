import github from "../assets/images/github.png";
import insta from "../assets/images/instagram.png";
import linkedin from "../assets/images/linkedin.png";
import logo from "../assets/images/logo.png";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="relative flex flex-col items-center justify-center gap-20 border-t-2 border-t-white px-8 py-28">
      <div className="cus-blur left-28 top-10 w-[40rem] bg-orange/20" />
      <div className="cus-blur right-28 top-10 w-[40rem] bg-danger/20" />
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
