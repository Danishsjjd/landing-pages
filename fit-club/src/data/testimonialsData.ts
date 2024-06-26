import image1 from "../assets/images/t-image1.png";
import image2 from "../assets/images/t-image2.jpg";
import image3 from "../assets/images/t-image3.jpg";

export type TestimonialType = {
  image: string;
  review: string;
  name: string;
  status: string;
};

export const testimonialsData: TestimonialType[] = [
  {
    image: image1,
    review:
      "I made the right choice by choosing the Fitclub and by choosing the right plan and program I already achieved my ideal body!",
    name: "MATHEW HENDRICKSON",
    status: "ENTREPRENEUR",
  },
  {
    image: image2,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsam, ab itaque nam perferendis impedit sint ",
    name: "JOHN KEVIN",
    status: "COACH",
  },
  {
    image: image3,
    review:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima aspernatur quod voluptatem",
    name: "FRANKLIN",
    status: "CUSTOMER",
  },
];
