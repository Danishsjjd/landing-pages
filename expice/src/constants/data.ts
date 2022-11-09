import food1 from "../assets/images/food img/1 (1).png";
import food2 from "../assets/images/food img/1 (2).png";
import food3 from "../assets/images/food img/1 (3).png";
import food4 from "../assets/images/food img/1 (4).png";
import food5 from "../assets/images/food img/1 (5).png";
import food6 from "../assets/images/food img/1 (6).png";
import food7 from "../assets/images/food img/1 (7).png";
import food8 from "../assets/images/food img/1 (8).png";

export type Food = {
  title: string;
  desc: string;
  location: string;
  img: string;
  price: number;
};

const foods: Food[][] = [
  [
    {
      title: "Fire Water",
      desc: `we are all about we are all about to the fullest and all
            content dining out or in!dining out or in!`,
      location: "New Market",
      img: food1,
      price: 10.25,
    },
    {
      title: "The Wonton ",
      desc: `we are all about we are all about to the fullest and all
      content dining out or in!dining out or in!
`,
      location: "Saheb Bazar",
      img: food2,
      price: 10.25,
    },
  ],
  [
    {
      title: "Fire Water",
      desc: `we are all about we are all about to the fullest and all
            content dining out or in!dining out or in!`,
      location: "New Market",
      img: food3,
      price: 10.25,
    },
    {
      title: "The Wonton ",
      desc: `we are all about we are all about to the fullest and all
      content dining out or in!dining out or in!
`,
      location: "Saheb Bazar",
      img: food4,
      price: 10.25,
    },
  ],
  [
    {
      title: "Fire Water",
      desc: `we are all about we are all about to the fullest and all
            content dining out or in!dining out or in!`,
      location: "New Market",
      img: food5,
      price: 10.25,
    },
    {
      title: "The Wonton ",
      desc: `we are all about we are all about to the fullest and all
      content dining out or in!dining out or in!
`,
      location: "Saheb Bazar",
      img: food6,
      price: 10.25,
    },
  ],
  [
    {
      title: "Fire Water",
      desc: `we are all about we are all about to the fullest and all
            content dining out or in!dining out or in!`,
      location: "New Market",
      img: food7,
      price: 10.25,
    },
    {
      title: "The Wonton ",
      desc: `we are all about we are all about to the fullest and all
      content dining out or in!dining out or in!
`,
      location: "Saheb Bazar",
      img: food8,
      price: 10.25,
    },
  ],
];

export { foods };
