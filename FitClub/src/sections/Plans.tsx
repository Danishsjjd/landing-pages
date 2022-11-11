import { plansData, PlanData } from "../data/plansData";
import whiteTick from "../assets/images/whiteTick.png";
import arrow from "../assets/images/rightArrow.png";

const Plans = () => {
  return (
    <div>
      <h1 className="flex justify-center gap-8 text italic text-5xl font-medium">
        <span className="text-stroke">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="text-stroke">NOW WITHUS</span>
      </h1>
      <div className="my-16 flex justify-center gap-8 items-center">
        {plansData.map(({ features, icon, name, price, premium }, index) => (
          <PlansCard
            features={features}
            icon={icon}
            name={name}
            price={price}
            key={index}
            premium={premium}
          />
        ))}
      </div>
    </div>
  );
};

function PlansCard({ features, icon, name, price, premium }: PlanData) {
  return (
    <div
      className={`space-y-6 p-7   [&>svg]:w-10 [&>svg]:h-10 ${
        premium
          ? "scale-110 bg-gradient-to-tr from-orange to-danger [&>svg]:fill-white"
          : "bg-caloryCard [&>svg]:fill-orange"
      }`}
    >
      {icon}
      <h4 className="font-bold text-xl">{name}</h4>
      <h3 className="font-bold text-6xl">${price}</h3>
      <div className="space-y-4">
        {features.map((str) => (
          <div key={str} className="flex gap-3">
            <img src={whiteTick} alt="tick" className="w-4 object-contain" />
            <p>{str}</p>
          </div>
        ))}
      </div>
      <p className="flex gap-2">
        See more benefits{" "}
        <img src={arrow} alt="arrow" className="w-4 object-contain" />
      </p>
      <button
        className={`w-full p-3 bg-white  font-medium ${
          premium ? "text-orange" : "text-black"
        }`}
      >
        Join Now
      </button>
    </div>
  );
}

export default Plans;
