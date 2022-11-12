import React from "react"
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Destinations from "./components/destinations";
import Search from "./components/search";
import Selects from "./components/selects";
import Carousel from "./components/carousel";
import Footer from "./components/footer";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Selects />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
