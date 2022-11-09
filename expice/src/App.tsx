import HeadingText from "./components/HeadingText";
import Grid from "./section/Grid";
import Header from "./layout/Header";
import AdvanceBooking from "./section/AdvanceBooking";
import CardSlider from "./section/CardSlider";
import DownloadApp from "./section/DownloadApp";
import ExploreFoods from "./section/ExploreFoods";
import Footer from "./section/Footer";
import Hero from "./section/Hero";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <HeadingText title="Some top restaurant for dining in or Take away!" />
      <CardSlider />
      <AdvanceBooking />
      <HeadingText title="Our Services" />
      <Grid />
      <ExploreFoods />
      <DownloadApp />
      <Footer />
    </>
  );
}

export default App;
