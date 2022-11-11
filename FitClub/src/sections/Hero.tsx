import { motion } from "framer-motion";
import CountUp from "react-countup";

import Header from "../components/Header";
import heart from "../assets/images/heart.png";
import caloriesBar from "../assets/images/calories.png";
import heroMainImg from "../assets/images/hero_image.png";
import heroLines from "../assets/images/hero_image_back.png";
import Button from "../components/Button";

const transition = { type: "spring", duration: 4 };

const Hero = () => {
  return (
    <div className="justify-center lg:flex">
      <div className="relative flex-[3] px-8">
        {/* blur */}
        <div className="cus-blur -top-12 -left-12 w-[35rem] bg-[var(--blur-color)]" />
        <Header />
        <RoundedRectangle />
        <h1 className="heading mt-14 flex flex-col gap-3 sm:gap-7">
          <div>
            <span className="text-stroke">SHAPE</span> YOUR{" "}
          </div>
          <div>IDEAL BODY</div>
        </h1>
        <p className="mt-7 text-center md:text-left md:text-lg">
          In here we will help you to shape and build your ideal body and live
          up your life to fullest
        </p>
        <div className="flex flex-col justify-between gap-4 md:flex-row md:gap-0">
          <div className="mt-10 flex justify-center gap-8 md:justify-start">
            <NumberProgress
              title={"EXPERT COACHES"}
              number={140}
              duration={1}
            />
            <NumberProgress
              title={"MEMBERS JOINED"}
              number={978}
              duration={2}
            />
            <NumberProgress
              title={"FITNESS PROGRAMS"}
              number={50}
              duration={4}
            />
          </div>
          {/* Calories Bar */}
          <motion.div
            className="mx-auto mr-32 flex max-w-xs gap-6 rounded bg-caloryCard p-4 md:max-w-none"
            transition={transition}
            initial={{ x: "-100px" }}
            whileInView={{ x: 0, opacity: 1 }}
          >
            <img src={caloriesBar} alt="graph" className="" />
            <div className="mx-auto w-20 md:mx-0">
              <p className="text-gray md:text-xl">Calories burned</p>
              <h4>220 kcal</h4>
            </div>
          </motion.div>
        </div>
        {/* buttons */}
        <div className="md:mx-none mx-auto mt-8 flex w-fit gap-3">
          <Button>Get Started</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>
      {/* right */}
      <div className="relative mt-4 flex-[1] pt-6 text-center lg:mt-0 lg:bg-orange">
        <div className="flex justify-end pr-12">
          <button className="text-bold bg-white p-2 font-medium text-black">
            Join Now
          </button>
        </div>
        <HeartContainer />
        <motion.img
          src={heroLines}
          alt="lines"
          className="absolute top-1/2 left-[36%] -z-20 w-60 -translate-x-1/2 -translate-y-1/2 [translate:_-50%_-50%] lg:left-[-13rem] lg:!top-20 lg:[translate:unset]"
          transition={transition}
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
        />
        <img
          src={heroMainImg}
          alt="hero main person"
          className="right-40 top-40 mx-auto w-80 text-center lg:absolute lg:w-auto"
        />
      </div>
    </div>
  );
};

function HeartContainer() {
  return (
    <motion.div
      className="absolute right-12 top-28 flex flex-col gap-3 rounded-md bg-appColor p-3 "
      transition={transition}
      initial={{ x: "-100px" }}
      whileInView={{ x: 0, opacity: 1 }}
    >
      <img src={heart} alt="heart" className="w-9" />
      <p className="text-lg text-gray">Heart Rate</p>
      <h3 className="text-3xl">116 pm</h3>
    </motion.div>
  );
}

function NumberProgress({
  title,
  number,
  duration,
}: {
  title: string;
  number: number;
  duration: number;
}) {
  return (
    <div>
      <div className="flex gap-3 text-3xl">
        <span>+</span>
        <CountUp end={number} duration={2 * duration} />
      </div>
      <p className="text-xs text-gray sm:text-base">{title}</p>
    </div>
  );
}

function RoundedRectangle() {
  return (
    <div className="relative mt-24 w-fit rounded-full bg-[#393d42] px-4 py-4">
      <div className="relative z-20 px-2">
        THE BEST FITNESS CLUB IN THE TOWN
      </div>
      <motion.div
        className="absolute top-1 bottom-1 z-10 w-20 rounded-full bg-orange"
        transition={transition}
        initial={{ right: 0 }}
        whileInView={{ left: 15 }}
      />
    </div>
  );
}

export default Hero;
