import Header from "../components/Header";
import heart from "../assets/images/heart.png";
import caloriesBar from "../assets/images/calories.png";
import heroMainImg from "../assets/images/hero_image.png";
import heroLines from "../assets/images/hero_image_back.png";
import Button from "../components/Button";

const Hero = () => {
  return (
    <div className="flex justify-center">
      <div className="flex-[3] px-8">
        <Header />
        <RoundedRectangle />
        <h1 className="text-7xl font-bold flex flex-col gap-7 mt-14">
          <div>
            <span className="text-stroke">SHAPE</span> YOUR{" "}
          </div>
          <div>IDEAL BODY</div>
        </h1>
        <p className="mt-7 text-lg">
          In here we will help you to shape and build your ideal body and live
          up your life to fullest
        </p>
        <div className="flex justify-between">
          <div className="mt-10 flex gap-8">
            <NumberProgress title={"EXPERT COACHES"} number={140} />
            <NumberProgress title={"MEMBERS JOINED"} number={978} />
            <NumberProgress title={"FITNESS PROGRAMS"} number={50} />
          </div>
          <div className="mr-32 flex p-4 rounded bg-caloryCard gap-6">
            <img src={caloriesBar} alt="graph" className="" />
            <div className="w-20">
              <p className="text-gray text-xl">Calories burned</p>
              <h4>220 kcal</h4>
            </div>
          </div>
        </div>
        <div className="flex gap-3 mt-8">
          <Button>Get Started</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>
      <div className="flex-[1] bg-orange pt-6 relative">
        <div className="flex justify-end pr-12">
          <button className="p-2 text-black font-medium bg-white text-bold">
            Join Now
          </button>
        </div>
        <div className="absolute right-12 top-28 bg-appColor p-3 flex flex-col gap-3 rounded-md ">
          <img src={heart} alt="heart" className="w-9" />
          <p className="text-gray text-lg">Heart Rate</p>
          <h3 className="text-3xl">116 pm</h3>
        </div>
        <img
          src={heroLines}
          alt="lines"
          className=" w-60 absolute top-20 -left-52"
        />
        <img
          src={heroMainImg}
          alt="hero main person"
          className="absolute -left-44 top-32"
        />
      </div>
    </div>
  );
};

function NumberProgress({ title, number }: { title: string; number: number }) {
  return (
    <div>
      <div className="flex gap-3 text-3xl">
        <span>+</span>
        <h3>{number}</h3>
      </div>
      <p className="text-gray">{title}</p>
    </div>
  );
}

function RoundedRectangle() {
  return (
    <div className="w-fit px-4 py-4 rounded-full bg-[#393d42] relative mt-24">
      <div className="relative z-20 px-2">
        THE BEST FITNESS CLUB IN THE TOWN
      </div>
      <div className="absolute top-1 rounded-full bottom-1 w-20 bg-orange z-10" />
    </div>
  );
}

export default Hero;
