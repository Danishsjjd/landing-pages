import InputWithButton from "../components/InputWithButton";
import leave1 from "../assets/images/assets/side_branch.png";
import leave2 from "../assets/images/assets/side_branch2.png";

type Props = {};

function AdvanceBooking({}: Props) {
  return (
    <div className="relative flex min-h-[100vh] min-w-[100vw] items-center justify-center overflow-hidden bg-bg-secondary">
      <div className="space-y-20 rounded bg-white px-60 py-20">
        <div className="relative grid place-items-center pt-5 text-secondary-main">
          <div className="mb-4 h-4 w-28 bg-primary-main md:w-60" />
          <h2 className="text-2xl font-medium md:text-4xl">Advance Booking</h2>
        </div>
        <InputWithButton containerClass="max-w-2xl shadow-2xl shadow-black/10 z-10 isolate relative" />
        <div className="grid grid-cols-3 place-items-center gap-3">
          <div>
            <h3>Date</h3>
            <p>23-09-2022</p>
          </div>
          <div>
            <h3>Time</h3>
            <p>5:00 PM</p>
          </div>
          <div>
            <h3>Guests</h3>
            <p>3 People</p>
          </div>
        </div>
      </div>
      {/* leaves */}
      <img
        src={leave1}
        alt="leave"
        className="absolute -left-28 top-0 h-full w-[40%] object-cover sm:-left-10 lg:left-0"
      />
      <img
        src={leave2}
        alt="leave"
        className="absolute bottom-[15%] right-0 hidden w-[30%] sm:block md:bottom-[unset] md:top-0 lg:w-auto"
      />
    </div>
  );
}

export default AdvanceBooking;
