import ScrollContainer from "react-indiana-drag-scroll";

import sponsor1 from "../assets/images/sponsers/image 527.png";
import sponsor2 from "../assets/images/sponsers/image 528.png";
import sponsor3 from "../assets/images/sponsers/image 529.png";
import sponsor4 from "../assets/images/sponsers/image 530.png";
import sponsor5 from "../assets/images/sponsers/image 531.png";

const sponsers = [sponsor1, sponsor2, sponsor3, sponsor4, sponsor5];

const Sponsors = () => {
  return (
    <div className="mx-auto mt-10 max-w-7xl px-6">
      <ScrollContainer
        className="scroll-container mx-auto my-5 flex max-w-7xl items-center gap-12 overflow-x-auto  sm:gap-20 lg:justify-center"
        vertical={false}
        hideScrollbars={false}
      >
        {sponsers.map((img, index) => (
          <img
            src={img}
            alt="sponsors"
            key={index}
            className="max-w-[120px] py-2 sm:max-w-[170px]"
          />
        ))}
      </ScrollContainer>
    </div>
  );
};

export default Sponsors;
