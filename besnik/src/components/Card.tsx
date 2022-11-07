import { useState } from "react";
import bath from "../assets/images/icons/bath.png";
import bed from "../assets/images/icons/bed.png";
import fill_heart from "../assets/images/icons/fill_Heart.png";
import outline_heart from "../assets/images/icons/outline_heart.png";
import { CardContent } from "../section/TrendingProperties";
import Button from "./Button";

const Card = ({ desc, price, title, img }: CardContent) => {
  const [toggleHeart, setToggleHeart] = useState(false);
  return (
    <div className="rounded-md border border-primary-para/5 bg-white p-6 shadow-md shadow-primary-dark/5 hover:border-black/0 hover:shadow-lg hover:shadow-black/10">
      <div className="sm:grid sm:grid-cols-3">
        <div>
          <img src={img} alt="card" className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col items-center justify-between gap-5 pl-8 text-center sm:col-span-2 sm:items-start sm:text-left ">
          <div className="mt-3 flex w-full justify-between sm:mt-0">
            <h3 className="font-inter text-xl font-medium text-primary-light lg:text-3xl">
              {price}
            </h3>
            {toggleHeart ? (
              <img
                src={fill_heart}
                alt="heart"
                className="cursor-pointer object-contain"
                onClick={() => setToggleHeart((pre) => !pre)}
              />
            ) : (
              <img
                src={outline_heart}
                alt="heart"
                className="cursor-pointer object-contain"
                onClick={() => setToggleHeart((pre) => !pre)}
              />
            )}
          </div>
          <h3 className="text-center font-inter text-2xl font-medium sm:text-left">
            {title}
          </h3>
          <p className="text-center text-xl sm:text-left">{desc}</p>
          <div className="flex gap-3">
            <div className="flex gap-2">
              <img src={bed} alt="bed" className="object-contain" />2 Beds
            </div>
            <div className="flex gap-2">
              <img src={bath} alt="bath" className="object-contain" />2 Bath
            </div>
          </div>
          <Button
            className="!p-2 text-center text-base hover:bg-primary-light hover:text-white sm:text-left"
            variant="outline"
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
