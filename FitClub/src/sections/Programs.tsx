import { Card as CardType, programsData } from "../data/programsData";
import arrowIcon from "../assets/images/rightArrow.png";

const Programs = () => {
  return (
    <div className="px-8">
      <h2 className="flex flex-col justify-center gap-3 text-center text-3xl font-bold italic sm:flex-row sm:gap-5 sm:text-left lg:gap-12 lg:text-5xl">
        <span className="text-stroke">EXPLORE OUR</span> <span>PROGRAMS</span>{" "}
        <span className="text-stroke">TO SHAPE YOU</span>
      </h2>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {programsData.map(({ details, heading, image }, index) => (
          <Card details={details} heading={heading} image={image} key={index} />
        ))}
      </div>
    </div>
  );
};

function Card({ details, heading, image }: CardType) {
  return (
    <div className="cursor-default space-y-5 bg-gray/50 from-orange to-danger p-6 hover:bg-gradient-to-tr [&>svg]:h-8 [&>svg]:w-8 [&>svg]:fill-white  ">
      {image}
      <h3 className="text-xl font-bold">{heading}</h3>
      <p>{details}</p>
      <button className="flex gap-10">
        <span>Join Now</span>
        <img src={arrowIcon} alt="arrow" />
      </button>
    </div>
  );
}

export default Programs;
