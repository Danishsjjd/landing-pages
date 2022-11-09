import { foods, Food } from "../constants/data";

const ExploreFoods = () => {
  return (
    <div className="mx-auto my-16 mb-20 max-w-7xl px-4">
      <div className="my-10 space-y-4 text-center">
        <h3 className="text-4xl font-bold text-secondary-main">ExploreFoods</h3>
        <p className="mx-auto max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est,
          adipiscing cursus auctor eget sed phasellus senectus. Ut tellus donec
          vestibulum tristique leo bibendum in a, tincidunt. Volutpat metus id
          amet
        </p>
      </div>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {foods.map((food) =>
          food.map(({ img, desc, price, title, location }, index) => (
            <Card
              img={img}
              desc={desc}
              price={price}
              title={title}
              location={location}
              key={index}
            />
          ))
        )}
      </div>
    </div>
  );
};

function Card({ desc, img, price, title }: Food) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md shadow-black/5 hover:shadow-black/10">
      <img src={img} alt="food" className="h-80 w-full object-cover" />
      <div className="space-y-2 py-6 px-7">
        <div className="flex justify-between text-lg ">
          <h3 className="font-medium text-secondary-main ">{title}</h3>
          <p className=" font-bold text-primary-main">{price}$</p>
        </div>
        <p className="max-w-[250px] text-xs">{desc}</p>
      </div>
    </div>
  );
}

export default ExploreFoods;
