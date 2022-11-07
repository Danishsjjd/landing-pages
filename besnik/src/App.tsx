import Sponsors from "./components/Sponsors";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Banner from "./section/Banner";
import Cards from "./section/Cards";
import Hero from "./section/Hero";
import Testimonial from "./section/Testimonial";
import TrendingProperties from "./section/TrendingProperties";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Sponsors />
      <Cards />
      <TrendingProperties />
      <Testimonial />
      <Banner />
      <Footer />
    </>
  );
}

export default App;
