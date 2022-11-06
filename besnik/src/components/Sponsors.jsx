import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";

const Sponsors = ({ sponsors }) => {
  return (
    <div className="px-6">
      <ScrollContainer
        className="scroll-container mx-auto my-5 flex max-w-7xl items-center gap-12 overflow-x-auto  sm:gap-20"
        vertical={false}
        hideScrollbars={false}
      >
        {sponsors.map((img, index) => (
          <img
            src={img}
            alt="sponsors"
            key={index}
            className="max-w-[130px] py-2 sm:max-w-[170px]"
          />
        ))}
      </ScrollContainer>
    </div>
  );
};

export default Sponsors;
