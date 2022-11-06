import heroImg from "../assets/images/hero image.png";
import TextGroup from "../components/TextGroup";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div id={"Home"} className="mt-16">
      <div className="mx-auto block max-w-3xl items-center justify-between gap-20 space-y-5 px-3 text-center lg:flex lg:max-w-7xl lg:space-y-0">
        <div className="space-y-8">
          <h1 className="font-inter text-5xl font-semibold text-primary-dark [@media_(min-width:1205px)]:text-7xl">
            Search for Homes in your Neighborhood
          </h1>
          <p className="text-md lg:w-[500px]">
            Online Estate Agency, the modern way to sell your own home. You can
            use griffin residential to market your property.
          </p>
          <TextGroup />
        </div>
        <div className="flex max-w-3xl justify-center text-center lg:max-w-none">
          <img
            src={heroImg}
            alt="hero"
            className="min-w-[30rem] [@media_(min-width:1205px)]:max-w-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
