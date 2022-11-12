import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";

import smallDots from "../assets/images/small dots.png";
import rightSign from "../assets/images/right_sign.png";
import { foods } from "../constants/data";

const CardSlider = () => {
  return (
    <div className="mt-36 mb-20 md:flex">
      <div className="relative md:w-[80%] lg:w-[70%]">
        <Slider />
        <img
          src={smallDots}
          alt="small dots"
          className="absolute -top-16 left-14 md:left-0"
        />
        <img
          src={smallDots}
          alt="small dots"
          className="absolute -bottom-10 right-0"
        />
        <img
          src={smallDots}
          alt="small dots"
          className="absolute bottom-24 -right-[-173px] rotate-90"
        />
      </div>
      <div className="grid items-center justify-center pt-10 md:w-[20%] md:justify-start md:pt-0 md:pl-10 lg:w-[30%] lg:pl-24">
        <div className="gridSliderNext cursor-pointer">
          <div className="relative flex items-center justify-end">
            <div className="h-1 w-12 bg-primary-main"></div>
            <div className="grid h-8 w-8 place-items-center rounded-full bg-primary-main">
              <img src={rightSign} alt="arrow" />
            </div>
          </div>
          <p className="relative left-6 mt-3 text-right text-sm text-primary-main">
            See More
          </p>
        </div>
      </div>
    </div>
  );
};

const Slider = () => {
  return (
    <Swiper
      id="gridSlider"
      navigation={{
        nextEl: ".gridSliderNext",
      }}
      grabCursor
      slidesPerView={1}
      loop
      className=""
      pagination={{ clickable: true }}
      centeredSlides
      centerInsufficientSlides
      modules={[Navigation]}
    >
      {foods.map((food, index) => (
        <SwiperSlide key={index} className="">
          <div className="grid grid-cols-1 gap-10 px-4 md:grid-cols-2 md:px-0 lg:gap-20">
            {food.map((foodDetails, index) => (
              <div
                className="relative mx-auto flex h-[28rem] w-full max-w-md items-end overflow-hidden rounded-3xl md:mx-0 md:max-w-none"
                key={index}
              >
                <img
                  src={foodDetails.img}
                  alt="food"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="relative z-10 grow bg-primary-main/80 text-white">
                  <div className="mx-auto max-w-sm space-y-3 px-3 py-8 [&>p]:max-w-[280px] [&>p]:text-sm">
                    <h3 className="text-xl font-bold">{foodDetails.title}</h3>
                    <p className="text-white">{foodDetails.desc}</p>
                    <p className="text-white">{foodDetails.location}</p>
                  </div>
                  <button className="absolute bottom-[18%] right-0 rounded-tl-full rounded-bl-full bg-white px-6 py-2 text-xl font-medium text-primary-main ">
                    Book
                  </button>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardSlider;
