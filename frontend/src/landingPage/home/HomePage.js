import React from "react";
import Hero from "./Hero";

import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";
import Navbar from "../../Navbar";
import Awards from "./Awards";
import Footer from "../../Footer";
import OpenAccount from "../../OpenAccount";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
      <Footer />
    </>
  );
}

export default HomePage;
