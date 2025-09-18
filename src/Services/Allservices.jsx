import React from "react";
import About from "./About";
import AdditionalServices from "./AdditionalServices";
import Cardsection from "./Cardsection";
import DesignProcess from "./DesignProcess";
import Faqs from "./Faqs";
import Startproject from "./Startproject";
import TopBanner from "./TopBanner";

const AllServices = () => {
  return (
    <div>
      <TopBanner />
      <About />
      <Cardsection />
      <AdditionalServices />
      <DesignProcess />
      <Faqs />
    </div>
  );
};

export default AllServices;
