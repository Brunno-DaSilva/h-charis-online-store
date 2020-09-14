import React from "react";
import Directory from "../../Components/Directory/Directory";
import Carousel from "../../Components/Carousel/Carousel";
import DealOfTheWeek from "../../Components/DealOfTheWeek/DealOfTheWeek";
import Delivery from "../../Components/Delivery/Delivery";
import ImageGallery from "../../Components/ImageGallery/ImageGallery";

import "./homepage.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <Carousel />
      <Directory />
      <DealOfTheWeek />
      <Delivery />
      <ImageGallery />
    </div>
  );
};

export default HomePage;
