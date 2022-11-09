import bg from "../assets/images/bg.png";
import plate from "../assets/images/icon/Icon-1.svg";
import scooter from "../assets/images/icon/Icon-2.svg";
import table from "../assets/images/icon/Icon.svg";

type Props = {};

const Grid = (props: Props) => {
  return (
    <div className="relative my-10 min-h-[100vh] py-8">
      <img src={bg} alt="dots background" className="absolute inset-0 -z-10" />
      <div className="mx-auto grid min-h-[100vh] max-w-7xl grid-cols-2 px-4 lg:grid-cols-3">
        <div className="p-16">
          <div className="bg-bg-secondary p-20">
            <img src={table} alt="table" className="w-full" />
          </div>
        </div>

        <div className="relative mx-auto flex max-w-xs flex-col justify-center">
          <div className="absolute top-1/2 -left-20 h-1 w-[50%] -translate-x-1/2 -translate-y-1/2 bg-primary-main" />
          <div className="absolute top-1/2 right-[40%] h-1 w-[20%] -translate-x-1/2 -translate-y-1/2 bg-primary-main" />
          <h3 className="mt-4 ml-1 text-xl font-medium text-secondary-main">
            advanced table
            <br />
            booking
          </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        {/* last big card */}
        <div className="row-span-2 flex flex-col items-center justify-center gap-6 bg-bg-secondary p-20 text-center">
          <img src={scooter} alt="table" className="w-full" />
          <h3 className="text-xl text-secondary-main">
            free home delivery at your door steps
          </h3>
          <p className="border-b-4 border-b-primary-main pb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="">
          {/* <img src={table} alt="table" className="w-full" /> */}
          text here
        </div>
        <div className=" p-16">
          <div className="bg-bg-secondary p-20">
            <img src={plate} alt="table" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
