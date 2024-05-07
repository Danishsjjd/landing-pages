import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { testimonialsData, TestimonialType } from "../data/testimonialsData";
import rightArrow from "../assets/images/rightArrow.png";
import leftArrow from "../assets/images/leftArrow.png";

const transition = { duration: 0.5, type: "spring" };

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const data = testimonialsData[currentSlide];

  useEffect(() => {
    const loadImage = (card: TestimonialType) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = card.image;
        loadImg.onload = () => resolve(card.image);

        loadImg.onerror = (err) => reject(err);
      });
    };

    Promise.all(testimonialsData.map((card) => loadImage(card))).catch(
      (err) => {
        const msg = "Failed to load images";
        console.log(msg, err);
      }
    );
  }, []);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <div className="space-y-5 px-8">
        <p className="text-lg font-medium text-orange">TESTIMONIAL</p>
        {/* root div */}
        <div className="justify-between lg:flex">
          <div className="flex max-w-3xl flex-col justify-between space-y-5">
            <h1 className=" space-y-3 text-3xl font-medium md:text-6xl">
              <div className="text-stroke">WHAT THEY</div>
              <div>SAY ABOUT US</div>
            </h1>
            <motion.p
              transition={transition}
              initial={{ x: "-40px", opacity: 0 }}
              animate={{ opacity: 1, x: 0 }}
              key={currentSlide}
              className="text-xl"
            >
              {data.review}
            </motion.p>
            <div className="flex justify-between">
              <motion.p
                className="text-lg"
                transition={transition}
                initial={{ x: "-40px", opacity: 0 }}
                animate={{ opacity: 1, x: 0 }}
                key={currentSlide}
              >
                <span className="text-orange">{data.name}</span> -{" "}
                <span>{data.status}</span>
              </motion.p>
              <div className="relative flex gap-3">
                <img
                  src={leftArrow}
                  alt="left arrow"
                  className="w-8 cursor-pointer object-contain"
                  onClick={() =>
                    setCurrentSlide((pre) =>
                      pre <= 0 ? testimonialsData.length - 1 : --pre
                    )
                  }
                />
                <img
                  src={rightArrow}
                  alt="right arrow"
                  className="w-8 cursor-pointer object-contain"
                  onClick={() =>
                    setCurrentSlide((pre) =>
                      pre >= testimonialsData.length - 1 ? 0 : ++pre
                    )
                  }
                />
              </div>
            </div>
          </div>
          {/* image */}
          <div className="relative right-24 mx-auto mt-10 aspect-square w-40 md:w-80 lg:mx-0 lg:mt-0 [&>*]:h-full [&>*]:w-full">
            <div className="absolute -right-4 -bottom-4 bg-gradient-to-tr from-orange to-danger" />
            <div className="absolute -left-4 -top-4 border-2 border-orange bg-transparent" />
            <motion.img
              src={data.image}
              alt=""
              className="isolate z-10"
              key={currentSlide}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "-40px" }}
              transition={transition}
            />
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Testimonial;
