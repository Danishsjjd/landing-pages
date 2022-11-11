import searchIcon from "../assets/images/icons/icon-search.png";

const Banner = () => {
  return (
    <div className="my-20 bg-primary-dark py-16 md:py-32">
      <div className="mx-auto max-w-5xl items-center justify-between px-3 md:flex">
        <div className="max-w-lg space-y-4">
          <h1 className="text-5xl text-white">Talk to a Redfin Agent</h1>
          <p>
            Start your search with an expert local agent—there’s no pressure or
            obligation.
          </p>
        </div>
        <div>
          <p className="mb-1 mt-5 text-white md:mt-0">
            Where are you searching for homes?
          </p>
          <label className="flex h-12 overflow-hidden rounded-lg bg-white sm:min-w-[350px]">
            <input
              type="text"
              placeholder="Address,City,Zip"
              className="grow bg-transparent px-3 outline-none"
            />
            <div className="flex items-center justify-center bg-primary-light px-4">
              <img src={searchIcon} alt="search" className="w-6" />
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Banner;
