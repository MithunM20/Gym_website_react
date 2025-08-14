import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Reviews from "./components/Reviews";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Navbar />
      <section id="home"><Hero /></section>
      <section id="services"><Services /></section>
      <section id="about"><About /></section>
      <section id="pricing"><Pricing /></section>
      <section id="reviews"><Reviews /></section>
      <Footer />
    </>
  );
}

export default App;
