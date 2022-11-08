import Button from "../components/Button";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="relative">
      <div className="absolute bottom-[10%] left-0 rounded-tr-full rounded-br-full bg-primary-main px-4 py-2 text-white">
        Rajshahi
      </div>
      <div className="absolute right-0 top-0 -z-10 h-full w-1/5 bg-primary-main" />
      <div className="mx-auto flex min-h-[80vh] w-full max-w-7xl justify-between px-4">
        <div className="mt-16 w-1/2 space-y-4">
          <h2 className="text-9xl font-extrabold text-secondary-main/10">
            Food
          </h2>
          <h3 className="text-5xl font-bold text-secondary-main">
            Discover Restaurant & Delicious Food
          </h3>
          <div className="flex h-14 max-w-md bg-white p-2">
            <input
              type="text"
              className="grow bg-transparent p-2 px-3 outline-none"
              placeholder="Search Restaurant, Food..."
            />
            <Button>Go</Button>
          </div>
        </div>
        <div className="w-1/2">Hello</div>
      </div>
    </div>
  );
};

export default Hero;
