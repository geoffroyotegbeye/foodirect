import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import TopList from "./components/TopList/TopList";
import BgImage from "./assets/2.png";
import Banner from "./components/Banner/Banner";
import OurServices from "./components/OurServices/OurServices";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div style={bgStyle} className="overflow-x-hidden">
        <div className="min-h-screen bg-white/50 backdrop-blur-3xl">
          <Hero />
          <TopList />
          <Banner />
          <OurServices />
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
