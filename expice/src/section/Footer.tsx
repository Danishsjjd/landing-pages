import InputWithButton from "../components/InputWithButton";
import leave from "../assets/images/assets/side_branch3.png";
import fb from "../assets/images/social/Facebook.png";
import be from "../assets/images/social/Behance.png";
import ld from "../assets/images/social/Linkedin.png";
import tw from "../assets/images/social/Twitter.png";

const links = ["Product", "Company", "Learn more", "Get in touch"];
const socialLinks = [fb, be, ld, tw];

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="relative min-h-[100vh]">
      {/* side img */}
      <img
        src={leave}
        alt="leave"
        className="absolute bottom-0 -left-80 -z-10 h-[85vh] sm:-left-60 lg:left-0"
      />
      <div className="mx-auto flex min-h-[100vh] max-w-lg flex-col items-center justify-center gap-3 text-center">
        <h3 className="mb-2 text-3xl font-medium text-secondary-main ">
          Get notified <br /> about new amazing products
        </h3>
        <p className="mx-auto mb-5 max-w-sm text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est,
          adipiscing cursus auctor eget sed phasellus senectus.{" "}
        </p>
        <InputWithButton />
        <ul className="mt-8 flex gap-4 text-primary-para">
          {links.map((link) => (
            <li key={link}>{link}</li>
          ))}
        </ul>
      </div>
      {/* social link */}
      <div className="absolute bottom-[5%] right-[5%] flex gap-10">
        <div className="flex gap-5">
          {socialLinks.map((link) => (
            <a key={link}>
              <img src={link} alt="social links" />
            </a>
          ))}
        </div>
        <p>2020 Expice Studio</p>
      </div>
    </div>
  );
};

export default Footer;
