import client1 from "../assets/images/clients/Ellipse 50-1.png";
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
};

const leftClient: ImageProps[] = [
  { src: client9, className: "left-0 top-10" },
  { src: client2, className: "right-0 bottom-28" },
  { src: client3, className: "bottom-0 left-40" },
  { src: client4, className: "top-20 left-40" },
];

const rightClient: ImageProps[] = [
  { src: client5, className: "left-0" },
  { src: client6, className: "right-0" },
  { src: client7, className: "bottom-0" },
  { src: client8, className: "top-0" },
];

const Testimonial = () => {
  return (
    <div className="bg-primary-lightest/5 py-20">
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
        <div className="flex">
          <div className="relative w-1/4">
            {leftClient.map((img, index) => (
              <Image className={img.className} src={img.src} key={index} />
            ))}
          </div>
          {/* center div */}
          <div className="flex flex-col items-center justify-center gap-10">
            <img src={client1} alt="client" />
            {/* center card */}
            <div className="w-1/2 rounded bg-white p-4 text-center shadow-lg shadow-black/5">
              <p>
                "We are very pleased with the way Besnik handled our purchase of
                a lake home. He was prompt, friendly, and very knowledgeable. He
                followed up on any and all concerns."
              </p>
              <h4>Becky Nelson</h4>
              <span>stars</span>
            </div>
          </div>
          <div className="relative w-1/4">
            {rightClient.map((img, index) => (
              <Image className={img.className} src={img.src} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

function Image({ className, src }: ImageProps) {
  return (
    <img
      src={src}
      alt="client"
      className={`absolute rounded-full ${className}`}
    />
  );
}

export default Testimonial;
