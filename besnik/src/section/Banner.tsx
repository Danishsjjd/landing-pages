type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="my-20 bg-primary-dark py-16">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <div className="max-w-lg space-y-4">
          <h1 className="text-5xl text-white">Talk to a Redfin Agent</h1>
          <p>
            Start your search with an expert local agent—there’s no pressure or
            obligation.
          </p>
        </div>
        <div>
          <p className="mb-1 text-white">Where are you searching for homes?</p>
          <label className="flex h-12 min-w-[350px] overflow-hidden rounded-lg bg-white">
            <input
              type="text"
              placeholder="Address,City,Zip"
              className="grow bg-transparent px-3 outline-none"
            />
            <div className="flex items-center justify-center bg-primary-light px-4">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="search"
                className="w-6 text-white"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                ></path>
              </svg>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Banner;
