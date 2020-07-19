import React from "react";
import Directory from "../../Components/Directory/Directory";
import InfoSection from "../../Components/InfoSection/InfoSection";
import "./homepage.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <InfoSection />
      <Directory />
    </div>
  );
};

export default HomePage;
