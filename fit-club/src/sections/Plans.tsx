import { plansData, PlanData } from "../data/plansData";
import whiteTick from "../assets/images/whiteTick.png";
import arrow from "../assets/images/rightArrow.png";

const Plans = () => {
  return (
    <div className="relative">
      <div className="cus-blur left-16 top-10 w-[37rem] bg-[var(--blur-color)]" />
      <div className="cus-blur right-16 top-10 w-[37rem] bg-[var(--blur-color)]" />
      <h1 className=" flex flex-col items-center justify-center gap-2 text-3xl font-medium italic sm:flex-row sm:items-start md:gap-4 lg:gap-8 lg:text-5xl">
        <span className="text-stroke">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="text-stroke">NOW WITHUS</span>
      </h1>
      <div className="my-8 flex flex-col items-center justify-center gap-14 lg:my-16 lg:flex-row">
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
      className={`space-y-6 p-7   [&>svg]:h-10 [&>svg]:w-10 ${
        premium
          ? "scale-110 bg-gradient-to-tr from-orange to-danger [&>svg]:fill-white"
          : "bg-caloryCard [&>svg]:fill-orange"
      }`}
    >
      {icon}
      <h4 className="text-xl font-bold">{name}</h4>
      <h3 className="text-6xl font-bold">${price}</h3>
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
        className={`w-full bg-white p-3  font-medium ${
          premium ? "text-orange" : "text-black"
        }`}
      >
        Join Now
      </button>
    </div>
  );
}

export default Plans;
