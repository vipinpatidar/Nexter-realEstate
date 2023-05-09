// import React from "react";
//components
import Feature from "../../components/Features/Feature";
import Header from "../../components/Header/Header";
import HomeProperties from "../../components/HomeProperties/HomeProperties";
import OpenOnTop from "../../components/OpenOnTop/OpenOnTop";
import Story from "../../components/Story/Story";

//css
import "./Home.scss";

const HomePage = () => {
  return (
    <>
      <OpenOnTop />
      <div className="container">
        <Header />
        <Feature />
        <HomeProperties />
        <Story />
      </div>
    </>
  );
};

export default HomePage;
