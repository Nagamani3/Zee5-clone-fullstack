import React, { Fragment } from "react";
import Slider from "../pages/zee5Section/Slider";
import Footer from "./Footer";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

const Home = () => {
  return (
    <Fragment>
      <Slider />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </Fragment>
  );
};

export default Home;
