import { useState } from "react";

import { testimonialsData } from "../data/testimonialsData";
import rightArrow from "../assets/images/rightArrow.png";
import leftArrow from "../assets/images/leftArrow.png";

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const data = testimonialsData[currentSlide];
  return (
    <div className="px-8 space-y-5">
      <p className="text-orange font-medium text-lg">TESTIMONIAL</p>
      <div className="flex justify-between">
        <div className="space-y-5 max-w-3xl flex flex-col justify-between">
          <h1 className=" text-6xl space-y-3 font-medium">
            <div className="text-stroke">WHAT THEY</div>
            <div>SAY ABOUT US</div>
          </h1>
          <p className="text-xl">{data.review}</p>
          <div className="flex justify-between">
            <p className="text-lg">
              <span className="text-orange">{data.name}</span> -{" "}
              <span>{data.status}</span>
            </p>
            <div className="relative -right-40 flex gap-3">
              <img
                src={leftArrow}
                alt="left arrow"
                className="w-8 object-contain"
                onClick={() =>
                  setCurrentSlide((pre) =>
                    pre <= 0 ? testimonialsData.length - 1 : --pre
                  )
                }
              />
              <img
                src={rightArrow}
                alt="right arrow"
                className="w-8 object-contain"
                onClick={() =>
                  setCurrentSlide((pre) =>
                    pre >= testimonialsData.length - 1 ? 0 : ++pre
                  )
                }
              />
            </div>
          </div>
        </div>
        <div className="relative [&>*]:w-full [&>*]:h-full w-80 h-80 right-24">
          <div className="bg-gradient-to-tr from-orange to-danger absolute -right-4 -bottom-4" />
          <div className="bg-transparent border-2 border-orange absolute -left-4 -top-4" />
          <img src={data.image} alt="" className="isolate z-10" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
