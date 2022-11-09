import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";

import food1 from "../assets/images/hero/hero_slider1.png";
import food2 from "../assets/images/hero/hero_slider2.png";

const foods = [food1, food2];

const Slider = () => {
  return (
    <Swiper
      id="heroSlider"
      navigation
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
          <img src={food} alt="food" className="max-w-lg" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
