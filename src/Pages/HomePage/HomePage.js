import React from "react";
import Directory from "../../Components/Directory/Directory";
import Carousel from "../../Components/Carousel/Carousel";

import "./homepage.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <Carousel />
      <Directory />
    </div>
  );
};

export default HomePage;
