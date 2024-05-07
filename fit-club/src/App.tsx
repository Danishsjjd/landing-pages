import Button from "./components/Button";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Plans from "./sections/Plans";
import Programs from "./sections/Programs";
import Testimonial from "./sections/Testimonial";
import WhyUs from "./sections/WhyUs";

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <WhyUs />
      <Plans />
      <Testimonial />
      <div className="relative flex flex-col items-end gap-8 px-8 md:flex-row md:gap-20">
        <hr className="absolute -top-2 w-52 rounded border-2 border-orange p-px" />
        <h1 className="text-2xl sm:text-4xl md:text-6xl">
          <span className="text-stroke">READY TO</span> <span>LEVEL UP</span>
          <br />
          <span className="text-stroke">YOUR BODY</span> <span>WITH US?</span>
        </h1>
        <label className="flex bg-gray p-4">
          <input
            type="text"
            className="grow bg-transparent pr-8 text-white outline-none placeholder:text-white"
            placeholder="Enter Your Email Address"
          />
          <Button className="text-sm sm:text-base">Join Now</Button>
        </label>
      </div>
      <Footer />
    </div>
  );
}

export default App;
