import card1 from "../assets/images/icons/icon 01.svg";
import card2 from "../assets/images/icons/icon 02.svg";
import card3 from "../assets/images/icons/icon 03.svg";

type CardProps = {
  title: string;
  icon: string;
  des: string;
  shadow?: boolean;
};

const cardsContent: CardProps[] = [
  {
    des: `With over 1 million+ homes for sale available on the website, Trulia can match you with a house.`,
    icon: card1,
    title: "Buy a home",
  },
  {
    des: `With 35+ filters and custom keyword search, Trulia can help you find a home`,
    icon: card2,
    title: "Rent a home",
    shadow: true,
  },
  {
    des: `With more neighborhood insights than any other real estate website`,
    icon: card3,
    title: "See neighborhoods",
  },
];

const Cards = () => {
  return (
    <div className="my-28 mx-auto max-w-7xl" id="Features">
      <h2 className="mb-10 text-center font-inter text-4xl font-medium text-primary-dark sm:mb-28 sm:text-5xl">
        What Can We Help You Find?
      </h2>
      <div className="grid items-center justify-center gap-10 text-center sm:grid-cols-2 md:grid-cols-3">
        {cardsContent.map(({ des, icon, title, shadow }) => (
          <Card
            key={title}
            des={des}
            icon={icon}
            title={title}
            shadow={shadow}
          />
        ))}
      </div>
    </div>
  );
};

function Card({ des, icon, title, shadow }: CardProps) {
  return (
    <div
      className={`grid place-items-center space-y-4 rounded p-4 py-10 ${
        shadow ? "shadow-2xl shadow-primary-dark/5" : ""
      }`}
    >
      <div className="mb-12 flex justify-center">
        <img src={icon} alt="icon" />
      </div>
      <h3 className="text-3xl font-medium text-primary-dark">{title}</h3>
      <p className="max-w-xs">{des}</p>
    </div>
  );
}

export default Cards;
