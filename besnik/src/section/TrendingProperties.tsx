import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";

import Button from "../components/Button";
import house1 from "../assets/images/buildings/iamge.png";
import house2 from "../assets/images/buildings/image-1.png";
import house3 from "../assets/images/buildings/image-2.png";
import house4 from "../assets/images/buildings/image.png";
import Card from "../components/Card";

type Props = {};
export type CardContent = {
  price: string;
  title: string;
  desc: string;
  img: string;
};

const TrendingProperties = (props: Props) => {
  return (
    <div className="mx-auto my-20 max-w-7xl space-y-10 px-3">
      <Top />
      <Slider />
    </div>
  );
};

function Top() {
  return (
    <div className="items-center justify-between text-center md:flex md:text-left [&>_*]:mx-auto [&>*]:md:!mx-0">
      <div className="max-w-lg space-y-8">
        <h2 className="text-4xl font-medium text-primary-dark sm:text-5xl">
          Our trending latest proparty
        </h2>
        <p className="md:max-w-md">
          Our unique process gives you peace of mind from home rent to services
        </p>
      </div>
      <div className="mt-5 md:mt-0">
        <Button>See All Property</Button>
      </div>
    </div>
  );
}

const Slider = () => {
  const cardContent: CardContent[][] = [
    [
      {
        desc: "Co Rd Tribune Tribune",
        price: "$259,000",
        title: "Case Alda",
        img: house1,
      },
      {
        desc: "Co Rd Tribune Tribune",
        price: "$259,000",
        title: "Case Alda",
        img: house2,
      },
      {
        desc: "Co Rd Tribune Tribune",
        price: "$259,000",
        title: "Case Alda",
        img: house3,
      },
      {
        desc: "Co Rd Tribune Tribune",
        price: "$259,000",
        title: "Case Alda",
        img: house4,
      },
    ],
    [
      {
        desc: "Co Rd Tribune Tribune",
        price: "$259,000",
        title: "Case Alda",
        img: house4,
      },
      {
        desc: "Co Rd Tribune Tribune",
        price: "$259,000",
        title: "Case Alda",
        img: house2,
      },
      {
        desc: "Co Rd Tribune Tribune",
        price: "$259,000",
        title: "Case Alda",
        img: house3,
      },
      {
        desc: "Co Rd Tribune Tribune",
        price: "$259,000",
        title: "Case Alda",
        img: house1,
      },
    ],
  ];
  return (
    <Swiper
      id="collection"
      modules={[Pagination]}
      slidesPerView={1}
      loop={true}
      className="!py-10"
      pagination={{ clickable: true }}
      centeredSlides
      centerInsufficientSlides
    >
      {cardContent.map((cards, index) => (
        <SwiperSlide
          key={index}
          className="grid items-center justify-center gap-x-10 gap-y-10 md:grid-cols-2 lg:gap-x-28"
        >
          {cards.map(({ desc, price, title, img }) => (
            <Card
              desc={desc}
              price={price}
              title={title}
              key={title}
              img={img}
            />
          ))}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TrendingProperties;
