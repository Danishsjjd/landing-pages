import { useState, Dispatch, SetStateAction } from "react";

import client1 from "../assets/images/clients/center.png";
import client2 from "../assets/images/clients/Ellipse 50.png";
import client3 from "../assets/images/clients/Ellipse 51.png";
import client4 from "../assets/images/clients/Ellipse 52.png";
import client5 from "../assets/images/clients/Ellipse 53.png";
import client6 from "../assets/images/clients/Ellipse 54.png";
import client7 from "../assets/images/clients/Ellipse 55.png";
import client8 from "../assets/images/clients/Ellipse 57.png";
import client9 from "../assets/images/clients/Ellipse 58.png";

type ImageProps = {
  className: string;
  src: string;
  setSrc: Dispatch<SetStateAction<string>>;
  index: number;
};

const leftClient: Omit<ImageProps, "setSrc" | "index">[] = [
  { src: client9, className: "md:left-6 md:top-14 left-6 top-14" },
  { src: client2, className: "md:right-6 md:bottom-28 right-6 bottom-16" },
  { src: client3, className: "md:bottom-10 md:left-20 bottom-10 left-80" },
  { src: client4, className: "md:top-20 md:left-40 top-20 left-40" },
];

const rightClient: Omit<ImageProps, "setSrc" | "index">[] = [
  { src: client5, className: "md:left-10 md:top-10 left-10 top-10" },
  { src: client6, className: "md:right-10 md:top-20 right-10 top-20" },
  { src: client7, className: "md:bottom-10 md:left-10 bottom-10 left-40" },
  { src: client8, className: "md:top-40 md:left-28 top-40 left-28" },
];

const Testimonial = () => {
  const [src, setSrc] = useState(client1);
  return (
    <div className="bg-primary-lightest/10 py-20">
      <div className="mx-auto max-w-7xl  px-6">
        <div className="space-y-10 text-center">
          <h3 className=" text-5xl font-medium  text-primary-dark">
            Testimonial{" "}
          </h3>
          <p>
            Our Clients send us bunch of smilies with our services and we love
            them
          </p>
        </div>
        <div className="md:flex">
          <div className="relative h-36 w-full md:h-auto md:w-1/4 ">
            {leftClient.map((img, index) => (
              <Image
                className={img.className}
                src={img.src}
                key={index}
                setSrc={setSrc}
                index={index}
              />
            ))}
          </div>
          {/* center div */}
          <div className="flex w-full flex-col items-center justify-center md:w-1/2 ">
            <div className="relative my-12">
              <div className="w-28 rounded-full">
                <img
                  src={src}
                  alt="client"
                  className="w-full rounded-full object-cover shadow-2xl shadow-black/20"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 h-36 w-36 -translate-y-1/2 -translate-x-1/2 rounded-full border border-primary-para/30" />
              <div className="absolute top-1/2 left-1/2 h-44 w-44 -translate-y-1/2 -translate-x-1/2 rounded-full border border-primary-para/20" />
            </div>
            {/* center card */}
            <div className="max-w-xl rounded bg-white p-8 text-center shadow-lg shadow-black/5">
              <p className="mb-3">
                "We are very pleased with the way Besnik handled our purchase of
                a lake home. He was prompt, friendly, and very knowledgeable. He
                followed up on any and all concerns."
              </p>
              <h4 className="mt-2 text-lg font-medium text-primary-dark">
                Becky Nelson
              </h4>
              <span>⭐⭐⭐⭐⭐</span>
            </div>
          </div>
          <div className="relative h-36 w-full md:h-auto md:w-1/4 ">
            {rightClient.map((img, index) => (
              <Image
                className={img.className}
                src={img.src}
                key={index}
                setSrc={setSrc}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

type Animation = {
  [K: number]: string;
};

function Image({ className, src, setSrc, index }: ImageProps) {
  const animation: Animation = {
    0: "animation-delay-100",
    1: "animation-delay-200",
    2: "animation-delay-300",
    3: "animation-delay-400",
    4: "animation-delay-500",
    5: "animation-delay-600",
    6: "animation-delay-700",
    7: "animation-delay-800",
    8: "animation-delay-900",
  };
  return (
    <img
      src={src}
      alt="client"
      className={`absolute ${animation[index]} animate-bounce cursor-pointer rounded-full shadow-lg shadow-black/20 ${className}`}
      onClick={() => setSrc(src)}
      data-count={index}
    />
  );
}

export default Testimonial;
