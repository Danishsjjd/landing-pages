import img1 from "../assets/images/image1.png";
import img2 from "../assets/images/image2.png";
import img3 from "../assets/images/image3.png";
import img4 from "../assets/images/image4.png";
import tickImg from "../assets/images/tick.png";

const WhyUs = () => {
  return (
    <div className="flex px-8">
      <div className="grid grid-cols-3">
        <img src={img1} alt="1" className="row-span-2 " />
        <img src={img2} alt="2" className="col-span-2 " />
        <img src={img3} alt="3" className="" />
        <img src={img4} alt="4" className="" />
      </div>
    </div>
  );
};

export default WhyUs;
