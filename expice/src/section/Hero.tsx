import InputWithButton from "../components/InputWithButton";
import Slider from "../components/HeroSlider";
import locationSvg from "../assets/images/icon/location.svg";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="relative pb-20">
      <div className="fond-medium absolute top-[19rem] left-0 flex gap-2 rounded-tr-full rounded-br-full bg-primary-main px-12 py-2 text-lg text-white sm:top-[unset] sm:bottom-[10%]">
        <img src={locationSvg} alt="location" /> Faisalabad
      </div>
      <div className="absolute right-0 top-0 -z-10 h-full w-1/3 bg-primary-main" />
      <div className="mx-auto w-full max-w-7xl items-center justify-between px-4 md:flex">
        <div className="w-full space-y-4 md:w-1/2">
          <h2 className="text-6xl font-extrabold text-secondary-main/10 sm:text-9xl">
            Food
          </h2>
          <h3 className="text-4xl font-bold text-secondary-main sm:text-5xl">
            Discover Restaurant & Delicious Food
          </h3>
          <InputWithButton />
        </div>
        <div className="mt-20 w-full sm:mt-0 md:w-1/2">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Hero;
