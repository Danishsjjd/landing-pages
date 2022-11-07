import logo from "../assets/images/logo.svg";
const popularSearches = [
  "Apartment for Rent",
  "Apartment Low To High",
  "Offices for Buy",
  "Offices for Rent",
];
const aboutUs = ["Our Story", "Team Members", "Careers", "Contact Us"];
const quickLinks = [
  "Terms of Use",
  "Privacy Policy",
  "Contact Support",
  "FAQs",
];
const support = ["Help Center", "Loan Supper", "Management", "Privacy Policy"];

const Footer = () => {
  return (
    <div className="mx-auto max-w-5xl py-20 px-5">
      <div className="flex flex-wrap justify-between gap-8 ">
        <div>
          <h3 className="mb-6 font-inter text-2xl font-medium text-primary-dark">
            Popular Searches
          </h3>
          <ul className="space-y-3">
            {popularSearches.map((list, index) => (
              <li key={index} className="cursor-pointer text-primary-para">
                {list}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-6 font-inter text-2xl font-medium text-primary-dark">
            About Us
          </h3>
          <ul className="space-y-3">
            {aboutUs.map((list, index) => (
              <li key={index} className="cursor-pointer text-primary-para">
                {list}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-6 font-inter text-2xl font-medium text-primary-dark">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {quickLinks.map((list, index) => (
              <li key={index} className="cursor-pointer text-primary-para">
                {list}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-6 font-inter text-2xl font-medium text-primary-dark">
            Support
          </h3>
          <ul className="space-y-3">
            {support.map((list, index) => (
              <li key={index} className="cursor-pointer text-primary-para">
                {list}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-10 flex flex-wrap justify-between">
        <img src={logo} alt="logo" />
        <p>© 2021 Besnik. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
