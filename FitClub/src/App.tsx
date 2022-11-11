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
      <div className="flex items-end gap-20 px-8 relative">
        <hr className="absolute border-2 border-orange rounded w-52 p-px -top-2" />
        <h1 className="text-6xl font-bold">
          <span className="text-stroke">READY TO</span> <span>LEVEL UP</span>
          <br />
          <span className="text-stroke">YOUR BODY</span> <span>WITH US?</span>
        </h1>
        <label className="flex p-4 bg-gray">
          <input
            type="text"
            className="bg-transparent text-white grow outline-none placeholder:text-white pr-8"
            placeholder="Enter Your Email Address"
          />
          <Button>Join Now</Button>
        </label>
      </div>
      <Footer />
    </div>
  );
}

export default App;
