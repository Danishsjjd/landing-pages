import { Card as CardType, programsData } from "../data/programsData";
import arrowIcon from "../assets/images/rightArrow.png";

const Programs = () => {
  return (
    <div className="px-8">
      <h2 className="text-5xl italic font-medium flex justify-center gap-12">
        <span className="text-stroke">EXPLORE OUR</span> <span>PROGRAMS</span>{" "}
        <span className="text-stroke">TO SHAPE YOU</span>
      </h2>
      <div className="mt-10 flex gap-4">
        {programsData.map(({ details, heading, image }, index) => (
          <Card details={details} heading={heading} image={image} key={index} />
        ))}
      </div>
    </div>
  );
};

function Card({ details, heading, image }: CardType) {
  return (
    <div className="bg-gray/50 hover:bg-gradient-to-tr from-orange to-danger p-6 space-y-5 [&>svg]:fill-white [&>svg]:w-8 [&>svg]:h-8  ">
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
