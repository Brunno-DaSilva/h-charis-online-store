import React from "react";
import Directory from "../../Components/Directory/Directory";
import Carousel from "../../Components/Carousel/Carousel";
import DealOfTheWeek from "../../Components/DealOfTheWeek/DealOfTheWeek";

import "./homepage.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <Carousel />
      <Directory />
      <DealOfTheWeek />
    </div>
  );
};

export default HomePage;
