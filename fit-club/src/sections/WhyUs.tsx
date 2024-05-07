import adidas from "../assets/images/adidas.png";
import nike from "../assets/images/nike.png";
import NB from "../assets/images/nb.png";
import img1 from "../assets/images/image1.png";
import img2 from "../assets/images/image2.png";
import img3 from "../assets/images/image3.png";
import img4 from "../assets/images/image4.png";
import tickImg from "../assets/images/tick.png";

const content = [
  "OVER 140+ EXPERT COACHS",
  "TRAIN SMARTER AND FASTER THAN BEFORE",
  "1 FREE PROGRAM FOR NEW MEMBER",
  "RELIABLE PARTNERS",
];

const WhyUs = () => {
  return (
    <div className="flex flex-col items-center px-8 md:flex-row md:items-start">
      <div className="grid w-[90%] grid-cols-3 gap-5 md:w-1/2 [&>img]:w-full">
        <img src={img1} alt="1" className="row-span-2 h-[20rem] sm:h-[32rem]" />
        <img src={img2} alt="2" className="col-span-2 h-[9rem] sm:h-[15rem]" />
        <img src={img3} alt="3" className="h-[9rem] sm:h-[15rem] " />
        <img src={img4} alt="4" className="h-[9rem] sm:h-[15rem]" />
      </div>
      <div className="mt-6 w-[90%] space-y-6 md:mt-0 md:w-1/2 md:pl-20">
        <h4 className="text-xl font-medium text-orange">SOME REASONS</h4>
        <h2 className="text-4xl">
          <span className="text-stroke font-medium">WHY</span> CHOOSE US?
        </h2>
        <div className="space-y-6">
          {content.map((str, index) => (
            <div key={index} className="flex  items-center gap-4">
              <img src={tickImg} alt="tick" className="w-8" />
              <h4 className="text-xl font-bold">{str}</h4>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          <p className="text-gray">OUR PARTNERS</p>
          <div className="flex gap-4">
            <img src={NB} alt="nb" />
            <img src={adidas} alt="nb" />
            <img src={nike} alt="nb" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
