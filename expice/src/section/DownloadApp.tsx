import playStore from "../assets/images/social/Group.png";
import appleStore from "../assets/images/social/Group-1.png";
import mobile from "../assets/images/mobile.png";

type Props = {};

const DownloadApp = (props: Props) => {
  return (
    <div className="my-20  min-h-[100vh] w-full bg-bg-secondary px-4 py-10 md:py-0">
      <div className="mx-auto min-h-[100vh] max-w-7xl grid-cols-2 items-center justify-center md:grid">
        <div className="flex flex-col items-center ">
          <h2 className="border-l-[16px] border-l-primary-main py-3 pl-5 text-3xl font-medium text-secondary-main lg:max-w-2xl lg:text-5xl">
            Download app for Exciting Deals
          </h2>
          <p className="py-3 pl-12 text-xs ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est,
            adipiscing cursus auctor eget sed phasellus senectus. Ut tellus
            donec vestibulum tristique leo bibendum in a, tincidunt.{" "}
          </p>
          <div className="mx-auto flex self-start md:mx-0">
            <div className="ml-12 flex cursor-pointer items-center gap-2 rounded-lg bg-black p-2 text-primary-para  sm:p-3">
              <div>
                <img src={playStore} alt="play store" />
              </div>
              <div>
                <p className="text-xs sm:text-sm">GET IT ON</p>
                <h5 className="text-xs text-white md:text-base">Google Play</h5>
              </div>
            </div>
            <div className="ml-5 flex cursor-pointer items-center gap-2 rounded-lg bg-black p-2 text-primary-para  sm:p-3">
              <div>
                <img src={appleStore} alt="play store" />
              </div>
              <div>
                <p className="text-xs sm:text-sm">GET IT ON</p>
                <h5 className="text-xs text-white md:text-base">Apple Store</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <img src={mobile} alt="mobile" className="-ml-[15%] md:ml-0" />
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
