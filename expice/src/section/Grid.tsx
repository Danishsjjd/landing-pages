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
        {/* first grid child */}
        <div className="sm:p-4 md:p-14 lg:p-8">
          <div className="bg-bg-secondary p-14 sm:p-20">
            <img src={table} alt="table" className="w-full" />
          </div>
        </div>

        <div className="relative mx-auto flex max-w-xs flex-col justify-center">
          {/* large line */}
          <div className="absolute top-1/2 -left-14 hidden h-[2px] w-[35%] -translate-x-1/2 -translate-y-1/2 bg-primary-main sm:block">
            <div className="absolute left-[2px] top-[1.2px] -translate-x-1/2 -translate-y-1/2 text-3xl font-light text-primary-main">
              &lt;
            </div>
          </div>
          {/* right small line */}
          <div className="absolute top-1/2 right-[40%] hidden h-[2px] w-[20%] -translate-x-1/2 -translate-y-1/2 bg-primary-main sm:block" />
          <h3 className="mt-7 ml-1 text-base font-medium capitalize text-secondary-main sm:text-xl">
            advanced table
            <br />
            booking
          </h3>
          <p className="pt-3 text-xs sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* last big card */}
        <div className="col-span-2 row-start-3 mx-auto flex flex-col items-center justify-center gap-6 bg-bg-secondary p-20 text-center lg:col-span-1 lg:row-span-2 lg:row-start-auto">
          <img src={scooter} alt="table" className="w-full" />
          <h3 className="text-xl text-secondary-main">
            free home delivery at your door steps
          </h3>
          <p className="border-b-4 border-b-primary-main pb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        {/* 2nd row */}
        <div className="relative mx-auto flex max-w-xs flex-col justify-center">
          {/* large line */}
          <div className="absolute top-1/2 -right-40 hidden h-[2px] w-[70%] -translate-x-1/2 -translate-y-1/2 bg-primary-main sm:block">
            <div className="absolute right-[-13px] top-[2.2px] -translate-x-1/2 -translate-y-1/2 text-3xl font-light text-primary-main">
              &gt;
            </div>
          </div>
          {/* right small line */}
          <div className="absolute top-1/2 left-0 hidden h-[2px] w-[20%] -translate-x-1/2 -translate-y-1/2 bg-primary-main sm:block" />
          <h3 className="mt-7 ml-1 text-xl font-medium capitalize text-secondary-main">
            Food For Free
            <br />
            <span className="pl-20 text-center">24/7</span>
          </h3>
          <p className="pt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="sm:p-4 md:p-14 lg:p-8">
          <div className="bg-bg-secondary p-14 sm:p-20">
            <img src={plate} alt="table" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
